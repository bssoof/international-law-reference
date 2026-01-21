import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useLanguage } from '../context/LanguageContext'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { StockBadge } from './StockBadge'

export function ProductCard({ product }) {
    const { addToCart } = useCart()
    const { toggleWishlist, isInWishlist } = useWishlist()
    const { t } = useLanguage()
    const isWishlist = isInWishlist(product.id)
    const isOutOfStock = product.stock !== undefined && product.stock <= 0

    return (
        <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: '15px',
            overflow: 'hidden',
            paddingBottom: '1rem',
            backgroundColor: 'var(--color-card)',
            transition: 'transform 0.2s',
            position: 'relative',
            opacity: isOutOfStock ? 0.7 : 1
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            {/* Stock Badge */}
            <StockBadge stock={product.stock} />

            {/* Wishlist Button */}
            <button
                onClick={(e) => {
                    e.preventDefault()
                    toggleWishlist(product)
                }}
                style={{
                    position: 'absolute', top: 10, right: 10,
                    background: 'var(--color-card)', border: 'none', borderRadius: '50%',
                    width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', cursor: 'pointer', zIndex: 2
                }}
            >
                {isWishlist ? <FaHeart color="#ffb7b2" /> : <FaRegHeart color="#ccc" />}
            </button>

            {/* Link to Details */}
            <Link to={`/product/${product.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div style={{ height: '300px', backgroundColor: 'var(--color-light-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={product.image} alt={product.name} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '0 1rem' }}>
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-text)', fontSize: '1.2rem' }}>{product.name}</h3>
                    <p style={{ color: '#aaa', marginBottom: '1rem', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {product.description}
                    </p>
                </div>
            </Link>

            {/* Action Area */}
            <div style={{ padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-secondary)' }}>₪{product.price}</span>
                <button
                    className="btn btn-primary"
                    onClick={(e) => {
                        e.preventDefault()
                        if (!isOutOfStock) addToCart(product)
                    }}
                    style={{
                        padding: '8px 16px', fontSize: '0.9rem',
                        opacity: isOutOfStock ? 0.5 : 1,
                        cursor: isOutOfStock ? 'not-allowed' : 'pointer'
                    }}
                    disabled={isOutOfStock}
                >
                    {isOutOfStock ? t('outOfStock') : t('addToBag')} ✨
                </button>
            </div>
        </div>
    )
}
