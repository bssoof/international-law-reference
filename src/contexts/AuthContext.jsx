import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, isSupabaseEnabled } from '../lib/supabase'

const AuthContext = createContext({
    user: null,
    loading: false,
    favorites: [],
    signUp: async () => ({ error: { message: 'Not available' } }),
    signIn: async () => ({ error: { message: 'Not available' } }),
    signOut: async () => { },
    addFavorite: async () => { },
    removeFavorite: async () => { },
    isFavorite: () => false,
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        // If Supabase is not available, just finish loading
        if (!isSupabaseEnabled() || !supabase) {
            setLoading(false)
            return
        }

        let subscription = null

        const initAuth = async () => {
            try {
                // Get initial session
                const { data } = await supabase.auth.getSession()
                const session = data?.session
                setUser(session?.user || null)
                if (session?.user) {
                    await loadFavorites(session.user.id)
                }
            } catch (error) {
                console.warn('Auth init error:', error)
            } finally {
                setLoading(false)
            }

            // Listen for auth changes
            try {
                const { data } = supabase.auth.onAuthStateChange((_event, session) => {
                    setUser(session?.user || null)
                    if (session?.user) {
                        loadFavorites(session.user.id)
                    }
                })
                subscription = data?.subscription
            } catch (error) {
                console.warn('Auth listener error:', error)
            }
        }

        initAuth()

        return () => {
            if (subscription && subscription.unsubscribe) {
                subscription.unsubscribe()
            }
        }
    }, [])

    const loadFavorites = async (userId) => {
        if (!isSupabaseEnabled() || !supabase) return
        try {
            const { data } = await supabase
                .from('user_favorites')
                .select('*')
                .eq('user_id', userId)
            if (data) setFavorites(data)
        } catch (error) {
            console.warn('Load favorites error:', error)
        }
    }

    const signUp = async (email, password, name) => {
        if (!isSupabaseEnabled() || !supabase) {
            return { error: { message: 'غير متاح حالياً' } }
        }
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: { data: { full_name: name } }
            })
            return { data, error }
        } catch (error) {
            return { error: { message: error.message } }
        }
    }

    const signIn = async (email, password) => {
        if (!isSupabaseEnabled() || !supabase) {
            return { error: { message: 'غير متاح حالياً' } }
        }
        try {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password })
            return { data, error }
        } catch (error) {
            return { error: { message: error.message } }
        }
    }

    const signOut = async () => {
        if (!isSupabaseEnabled() || !supabase) return
        try {
            await supabase.auth.signOut()
            setUser(null)
            setFavorites([])
        } catch (error) {
            console.warn('Sign out error:', error)
        }
    }

    const addFavorite = async (itemId, itemType, itemTitle) => {
        if (!user || !isSupabaseEnabled() || !supabase) return { error: { message: 'Not logged in' } }
        try {
            const { data, error } = await supabase
                .from('user_favorites')
                .insert({ user_id: user.id, item_id: itemId, item_type: itemType, item_title: itemTitle })
                .select()
            if (data && data[0]) setFavorites([...favorites, data[0]])
            return { data, error }
        } catch (error) {
            return { error: { message: error.message } }
        }
    }

    const removeFavorite = async (itemId, itemType) => {
        if (!user || !isSupabaseEnabled() || !supabase) return
        try {
            await supabase
                .from('user_favorites')
                .delete()
                .eq('user_id', user.id)
                .eq('item_id', itemId)
                .eq('item_type', itemType)
            setFavorites(favorites.filter(f => !(f.item_id === itemId && f.item_type === itemType)))
        } catch (error) {
            console.warn('Remove favorite error:', error)
        }
    }

    const isFavorite = (itemId, itemType) => {
        return favorites.some(f => f.item_id === itemId && f.item_type === itemType)
    }

    const value = {
        user,
        loading,
        favorites,
        signUp,
        signIn,
        signOut,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
