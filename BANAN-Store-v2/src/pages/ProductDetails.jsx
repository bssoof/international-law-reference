import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import products from '../data/products.json'
import { useCart } from '../context/CartContext'
import { ProductCard } from '../components/ProductCard'
import { Reviews } from '../components/Reviews'

export function ProductDetails() {
    const { id } = useParams()
    const { addToCart } = useCart()
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchProduct()
    }, [id])

    const fetchProduct = async () => {
        // First try Supabase
        const { data, error } = await supabase
            .from('store_products')
            .select('*')
            .eq('id', parseInt(id))
            .single()

        if (data && !error) {
            setProduct(data)
        } else {
            // Fallback to JSON
            const found = products.find(p => p.id === parseInt(id))
            setProduct(found)
        }
        setQuantity(1)
        setLoading(false)
    }

    if (loading) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Loading...</div>
    if (!product) return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Product not found</div>

    // Get 3 related products (excluding current)
    const relatedProducts = products
        .filter(p => p.id !== product.id)
        .slice(0, 3)

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                {/* Image Section */}
                <div style={{
                    backgroundColor: '#fff9f9', borderRadius: '20px', padding: '2rem',
                    border: '1px solid #f0f0f0', display: 'flex', justifyContent: 'center'
                }}>
                    <img src={product.image} alt={product.name} style={{ maxWidth: '100%', borderRadius: '10px' }} />
                </div>

                {/* Info Section */}
                <div>
                    <Link to="/shop" style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
                        ← Back to Shop
                    </Link>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{product.name}</h1>
                    <p style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '2rem' }}>
                        ${product.price}
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '3rem' }}>
                        {product.description}
                        <br /><br />
                        Made with premium ceramic, this piece is designed to bring joy to your daily ritual. Microwave and dishwasher safe.
                    </p>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '3rem' }}>
                        <div style={{
                            display: 'flex', alignItems: 'center', border: '1px solid #ddd',
                            borderRadius: '25px', padding: '5px 10px'
                        }}>
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ background: 'none', border: 'none', padding: '10px', cursor: 'pointer' }}>-</button>
                            <span style={{ margin: '0 10px', fontWeight: 'bold' }}>{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)} style={{ background: 'none', border: 'none', padding: '10px', cursor: 'pointer' }}>+</button>
                        </div>
                        <button className="btn btn-primary" onClick={() => {
                            for (let i = 0; i < quantity; i++) addToCart(product)
                        }} style={{ padding: '15px 40px' }}>
                            Add to Bag ✨
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', color: '#aaa', fontSize: '0.9rem' }}>
                        <span>🚚 Free Shipping over $50</span>
                        <span>📦 30-Day Returns</span>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <Reviews productId={product.id} />

            {/* Related Products */}
            <div style={{ marginTop: '6rem' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>You Might Also Like</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                    {relatedProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    )
}
