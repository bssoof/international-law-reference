import { createContext, useContext, useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import { supabase } from '../supabaseClient'

const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [favorites, setFavorites] = useState([])
    const toast = useToast()

    useEffect(() => {
        // 1. Check active session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null)
            if (session?.user) fetchFavorites(session.user.id)
        })

        // 2. Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
            if (session?.user) {
                fetchFavorites(session.user.id)
            } else {
                setFavorites([])
            }
        })

        return () => subscription.unsubscribe()
    }, [])

    const fetchFavorites = async (userId) => {
        const { data, error } = await supabase
            .from('favorites')
            .select('*')
            .eq('user_id', userId)

        if (error) console.error('Error fetching favorites:', error)
        else setFavorites(data || [])
    }

    // Login
    const login = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            toast({ title: 'خطأ في تسجيل الدخول', description: error.message, status: 'error' })
            return false
        }

        toast({ title: 'تم تسجيل الدخول بنجاح', status: 'success' })
        return true
    }

    // Register
    const register = async (email, password, name) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { name }
            }
        })

        if (error) {
            toast({ title: 'خطأ في إنشاء الحساب', description: error.message, status: 'error' })
            return false
        }

        toast({ title: 'تم إنشاء الحساب! يرجى التحقق من بريدك الإلكتروني.', status: 'success', duration: 5000 })
        return true
    }

    // Logout
    const logout = async () => {
        await supabase.auth.signOut()
        toast({ title: 'تم تسجيل الخروج', status: 'info' })
    }

    // Toggle Favorite
    const toggleFavorite = async (item) => {
        if (!user) {
            toast({ title: 'يجب تسجيل الدخول', status: 'warning' })
            return
        }

        const isFav = favorites.some(f => f.item_id === item.id.toString() && f.item_type === item.type)

        if (isFav) {
            // Remove
            const { error } = await supabase
                .from('favorites')
                .delete()
                .match({ user_id: user.id, item_id: item.id.toString(), item_type: item.type })

            if (!error) {
                setFavorites(prev => prev.filter(f => !(f.item_id === item.id.toString() && f.item_type === item.type)))
                toast({ title: 'تم الحذف من المفضلة', status: 'info', duration: 1000 })
            }
        } else {
            // Add
            const { error } = await supabase
                .from('favorites')
                .insert([{
                    user_id: user.id,
                    item_id: item.id.toString(),
                    item_type: item.type
                }])

            if (!error) {
                setFavorites(prev => [...prev, { item_id: item.id.toString(), item_type: item.type }])
                toast({ title: 'تمت الإضافة للمفضلة', status: 'success', duration: 1000 })
            }
        }
    }

    const value = {
        user: user ? { ...user, name: user.user_metadata?.name || user.email } : null,
        favorites,
        login,
        register,
        logout,
        toggleFavorite,
        isFavorite: (id, type) => favorites.some(f => f.item_id === id.toString() && f.item_type === type)
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
