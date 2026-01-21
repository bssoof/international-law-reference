import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'

export function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

    if (cart.length === 0) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
                <h2 style={{ marginBottom: '1rem' }}>Your cart is empty 🍌</h2>
                <p style={{ color: '#666', marginBottom: '2rem' }}>Looks like you haven't added any elegant mugs yet.</p>
                <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
            </div>
        )
    }

    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Shopping Cart</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                {/* Cart Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {cart.map(item => (
                        <div key={item.id} style={{ display: 'flex', gap: '1rem', border: '1px solid #eee', padding: '1rem', borderRadius: '8px' }}>
                            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <div style={{ flex: 1 }}>
                                <h3>{item.name}</h3>
                                <p style={{ color: '#666' }}>${item.price}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        style={{ padding: '0.2rem 0.5rem', cursor: 'pointer' }}
                                    >-</button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        style={{ padding: '0.2rem 0.5rem', cursor: 'pointer' }}
                                    >+</button>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div style={{ border: '1px solid #eee', padding: '1.5rem', borderRadius: '8px', height: 'fit-content' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Order Summary</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 'bold' }}>
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <Link to="/checkout" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%' }}>
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    )
}
