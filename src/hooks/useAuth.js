import { useState, useEffect } from 'react'
import { supabase, isSupabaseEnabled } from '../lib/supabase'

export function useAuth() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        if (!isSupabaseEnabled()) {
            setLoading(false)
            return
        }

        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null)
            if (session?.user) fetchFavorites(session.user.id)
            setLoading(false)
        })

        // Listen for changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
            if (session?.user) fetchFavorites(session.user.id)
            else setFavorites([])
            setLoading(false)
        })

        return () => subscription.unsubscribe()
    }, [])

    const fetchFavorites = async (userId) => {
        const { data, error } = await supabase
            .from('favorites')
            .select('item_id')
            .eq('user_id', userId)

        if (error) console.error('Error fetching favorites:', error)
        else setFavorites(data.map(f => f.item_id))
    }

    const signIn = async (email, password) => {
        if (!isSupabaseEnabled()) throw new Error('يرجى إضافة مفاتيح Supabase في ملف .env')
        return await supabase.auth.signInWithPassword({ email, password })
    }

    const signUp = async (email, password) => {
        if (!isSupabaseEnabled()) throw new Error('يرجى إضافة مفاتيح Supabase في ملف .env')
        return await supabase.auth.signUp({ email, password })
    }

    const signOut = async () => {
        if (!isSupabaseEnabled()) return
        return await supabase.auth.signOut()
    }

    const toggleFavorite = async (itemId) => {
        if (!user) throw new Error('يجب تسجيل الدخول أولاً')
        if (!isSupabaseEnabled()) throw new Error('قاعدة البيانات غير متصلة')

        const isFav = favorites.includes(String(itemId))
        if (isFav) {
            // Remove
            const { error } = await supabase
                .from('favorites')
                .delete()
                .eq('user_id', user.id)
                .eq('item_id', itemId)

            if (error) console.error('Error removing favorite:', error)
            else setFavorites(prev => prev.filter(id => id !== itemId))
        } else {
            // Add
            const { error } = await supabase
                .from('favorites')
                .insert([{ user_id: user.id, item_id: itemId }])

            if (error) console.error('Error adding favorite:', error)
            else setFavorites(prev => [...prev, itemId])
        }
    }

    return {
        user,
        loading,
        favorites,
        signIn,
        signUp,
        signOut,
        toggleFavorite,
        isSupabaseReady: isSupabaseEnabled()
    }
}
