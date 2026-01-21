import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useLanguage } from '../context/LanguageContext'
import { useCart } from '../context/CartContext'
import { FaShoppingBag, FaStar } from 'react-icons/fa'

export function FeaturedProducts() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { language } = useLanguage()
    const { addToCart } = useCart()

    useEffect(() => {
        fetchFeatured()
    }, [])

    const fetchFeatured = async () => {
        const { data, error } = await supabase
            .from('store_products')
            .select('*')
            .limit(4)
            .order('created_at', { ascending: false })

        if (!error && data) {
            setProducts(data)
        }
        setLoading(false)
    }

    if (loading) {
        return (
            <section style={{ padding: '5rem 0', background: 'var(--color-bg)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '2rem'
                    }}>
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} style={{
                                height: '350px',
                                background: 'var(--color-light-gray)',
                                borderRadius: '16px',
                                animation: 'pulse 1.5s infinite'
                            }} />
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    if (products.length === 0) return null

    return (
        <section style={{ padding: '5rem 0', background: 'var(--color-bg)' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, var(--color-secondary), #005c2e)',
                        color: 'white',
                        padding: '8px 20px',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                    }}>
                        ⭐ {language === 'ar' ? 'الأكثر طلباً' : 'Best Sellers'}
                    </span>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'var(--color-text)',
                        marginBottom: '0.5rem'
                    }}>
                        {language === 'ar' ? 'منتجات تراثية مميزة' : 'Featured Heritage Products'}
                    </h2>
                    <p style={{ color: '#888', fontSize: '1.1rem' }}>
                        {language === 'ar' ? 'اكتشف أجمل القطع التراثية الفلسطينية' : 'Discover the finest Palestinian heritage pieces'}
                    </p>
                </div>

                {/* Products Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '2rem'
                }}>
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            style={{
                                background: 'var(--color-card)',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                                transition: 'all 0.3s ease',
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                                border: '1px solid var(--color-border)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)'
                                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.12)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.06)'
                            }}
                        >
                            <Link to={`/product/${product.id}`}>
                                <div style={{
                                    height: '220px',
                                    background: 'var(--color-light-gray)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        style={{
                                            maxWidth: '85%',
                                            maxHeight: '85%',
                                            objectFit: 'contain',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    />
                                    {/* Badge */}
                                    <span style={{
                                        position: 'absolute',
                                        top: '15px',
                                        left: '15px',
                                        background: 'linear-gradient(135deg, var(--color-primary), #a00d1f)',
                                        color: 'white',
                                        padding: '5px 12px',
                                        borderRadius: '6px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600'
                                    }}>
                                        {language === 'ar' ? 'تراثي' : 'Heritage'}
                                    </span>
                                </div>
                            </Link>

                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '0.5rem' }}>
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <FaStar key={star} size={12} color="#c9a227" />
                                    ))}
                                    <span style={{ fontSize: '0.8rem', color: '#888', marginLeft: '5px' }}>(4.9)</span>
                                </div>

                                <Link to={`/product/${product.id}`}>
                                    <h3 style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        color: 'var(--color-text)',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {product.name}
                                    </h3>
                                </Link>

                                <p style={{
                                    color: '#888',
                                    fontSize: '0.85rem',
                                    marginBottom: '1rem',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {product.description}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span style={{
                                        fontSize: '1.3rem',
                                        fontWeight: '700',
                                        color: 'var(--color-secondary)'
                                    }}>
                                        ₪{product.price}
                                    </span>
                                    <button
                                        onClick={() => addToCart(product)}
                                        style={{
                                            background: 'linear-gradient(135deg, var(--color-primary), #a00d1f)',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '10px 15px',
                                            color: 'white',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        <FaShoppingBag size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link
                        to="/shop"
                        className="btn btn-outline"
                        style={{ padding: '15px 40px', fontSize: '1rem' }}
                    >
                        {language === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'} →
                    </Link>
                </div>
            </div>
        </section>
    )
}
