import { createContext, useContext, useState, useEffect } from 'react'

const WishlistContext = createContext()

export function useWishlist() {
    return useContext(WishlistContext)
}

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState(() => {
        try {
            const saved = localStorage.getItem('banan_wishlist')
            return saved ? JSON.parse(saved) : []
        } catch (error) {
            console.error('Failed to parse wishlist from local storage', error)
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('banan_wishlist', JSON.stringify(wishlist))
    }, [wishlist])

    const toggleWishlist = (product) => {
        setWishlist(current => {
            const exists = current.find(p => p.id === product.id)
            if (exists) {
                return current.filter(p => p.id !== product.id)
            }
            return [...current, product]
        })
    }

    const isInWishlist = (id) => {
        return wishlist.some(p => p.id === id)
    }

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}
