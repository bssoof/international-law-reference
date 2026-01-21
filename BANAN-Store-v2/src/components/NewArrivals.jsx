import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useLanguage } from '../context/LanguageContext'
import { useCart } from '../context/CartContext'
import { FaShoppingBag, FaClock } from 'react-icons/fa'

export function NewArrivals() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { language } = useLanguage()
    const { addToCart } = useCart()

    useEffect(() => {
        fetchNewArrivals()
    }, [])

    const fetchNewArrivals = async () => {
        const { data, error } = await supabase
            .from('store_products')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(3)

        if (!error && data) {
            setProducts(data)
        }
        setLoading(false)
    }

    if (loading || products.length === 0) return null

    return (
        <section style={{
            padding: '5rem 0',
            background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-light-gray) 100%)'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'var(--color-secondary)',
                        color: 'white',
                        padding: '8px 20px',
                        borderRadius: '25px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                    }}>
                        <FaClock /> {language === 'ar' ? 'وصل حديثاً' : 'Just Arrived'}
                    </span>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'var(--color-text)',
                        marginBottom: '0.5rem'
                    }}>
                        {language === 'ar' ? 'أحدث المنتجات' : 'New Arrivals'}
                    </h2>
                    <p style={{ color: '#888', fontSize: '1.1rem' }}>
                        {language === 'ar' ? 'اكتشف آخر ما وصل لمتجرنا' : 'Check out our latest additions'}
                    </p>
                </div>

                {/* Products - Horizontal Cards */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '200px 1fr auto',
                                gap: '2rem',
                                background: 'var(--color-card)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease',
                                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(10px)'
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateX(0)'
                                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)'
                            }}
                        >
                            {/* Image */}
                            <Link to={`/product/${product.id}`}>
                                <div style={{
                                    height: '150px',
                                    background: 'var(--color-light-gray)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        style={{
                                            maxWidth: '80%',
                                            maxHeight: '80%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>
                            </Link>

                            {/* Info */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                padding: '1rem 0'
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: 'fit-content',
                                    background: 'var(--color-accent)',
                                    color: 'var(--color-text)',
                                    padding: '4px 12px',
                                    borderRadius: '10px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    marginBottom: '0.5rem'
                                }}>
                                    {language === 'ar' ? 'جديد' : 'NEW'}
                                </span>
                                <Link to={`/product/${product.id}`}>
                                    <h3 style={{
                                        fontSize: '1.3rem',
                                        fontWeight: '600',
                                        color: 'var(--color-text)',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {product.name}
                                    </h3>
                                </Link>
                                <p style={{
                                    color: '#888',
                                    fontSize: '0.9rem',
                                    maxWidth: '400px'
                                }}>
                                    {product.description}
                                </p>
                            </div>

                            {/* Price & Action */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                padding: '1.5rem 2rem',
                                gap: '1rem'
                            }}>
                                <span style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: 'var(--color-secondary)'
                                }}>
                                    ₪{product.price}
                                </span>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="btn btn-primary"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '12px 20px'
                                    }}
                                >
                                    <FaShoppingBag />
                                    {language === 'ar' ? 'أضف للسلة' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
