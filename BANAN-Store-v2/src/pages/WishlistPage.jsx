import { useWishlist } from '../context/WishlistContext'
import { ProductCard } from '../components/ProductCard'
import { Link } from 'react-router-dom'

export function WishlistPage() {
    const { wishlist } = useWishlist()

    if (wishlist.length === 0) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your Favorites List is Empty 💔</h2>
                <p style={{ color: '#888', marginBottom: '2rem' }}>Go find some cute mugs to love!</p>
                <Link to="/shop" className="btn btn-primary">Browse Collection</Link>
            </div>
        )
    }

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--color-text)' }}>
                Your Wishlist ({wishlist.length}) ❤️
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2.5rem'
            }}>
                {wishlist.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
