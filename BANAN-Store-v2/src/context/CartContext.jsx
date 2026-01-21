import { createContext, useContext, useState, useEffect } from 'react'
import { useToast } from './ToastContext'

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('banan_cart')
            return savedCart ? JSON.parse(savedCart) : []
        } catch (error) {
            console.error('Failed to parse cart from local storage', error)
            return []
        }
    })

    // Get toast from context - may be null if not wrapped in ToastProvider
    let toast = null
    try {
        toast = useToast()
    } catch (e) {
        // ToastContext not available
    }

    useEffect(() => {
        localStorage.setItem('banan_cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === product.id)
            if (existingItem) {
                return currentCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...currentCart, { ...product, quantity: 1 }]
        })

        // Show toast notification
        if (toast?.addToast) {
            toast.addToast(`${product.name} تمت إضافته للسلة ✨`, 'success')
        }
    }

    const removeFromCart = (id) => {
        setCart(currentCart => currentCart.filter(item => item.id !== id))

        if (toast?.addToast) {
            toast.addToast('تم إزالة المنتج من السلة', 'info')
        }
    }

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(id)
            return
        }
        setCart(currentCart => currentCart.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ))
    }

    const clearCart = () => {
        setCart([])
        if (toast?.addToast) {
            toast.addToast('تم تفريغ السلة', 'info')
        }
    }

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0)

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    )
}
