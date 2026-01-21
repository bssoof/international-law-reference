import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { FeaturedProducts } from '../components/FeaturedProducts'
import { NewArrivals } from '../components/NewArrivals'
import { Testimonials } from '../components/Testimonials'
import { Newsletter } from '../components/Newsletter'
import { FaArrowRight, FaStar, FaTruck, FaUndo, FaHandHoldingHeart } from 'react-icons/fa'

export function Home() {
    const { t, language } = useLanguage()

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Palestinian Flag Stripes */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '8px',
                    background: 'linear-gradient(90deg, #000000 25%, #ffffff 25%, #ffffff 50%, #007a3d 50%, #007a3d 75%, #ce1126 75%)'
                }} />

                {/* Decorative patterns */}
                <div style={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    border: '2px solid rgba(206, 17, 38, 0.1)',
                    top: '-150px',
                    right: '-150px'
                }} />
                <div style={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    border: '2px solid rgba(0, 122, 61, 0.1)',
                    bottom: '-100px',
                    left: '-100px'
                }} />

                {/* Keffiyeh Pattern Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.03,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                }} />

                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1
                }}>
                    {/* Text Content */}
                    <div style={{
                        color: 'white',
                        animation: 'slideInLeft 1s ease-out'
                    }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(206, 17, 38, 0.2)',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            fontSize: '0.9rem',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(206, 17, 38, 0.3)'
                        }}>
                            🇵🇸 {language === 'ar' ? 'تراث أصيل • صناعة يدوية' : 'Authentic Heritage • Handmade'}
                        </span>

                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: '800',
                            lineHeight: '1.3',
                            marginBottom: '1.5rem'
                        }}>
                            {language === 'ar' ? (
                                <>
                                    <span style={{ color: '#ce1126' }}>احمِ</span>{' '}
                                    <span style={{ color: '#ffffff' }}>تراثك</span>
                                    <br />
                                    <span style={{ color: '#007a3d' }}>وارتدِ</span>{' '}
                                    <span style={{ color: '#ffffff' }}>هويتك</span>
                                </>
                            ) : (
                                <>
                                    <span style={{ color: '#ce1126' }}>Preserve</span>{' '}
                                    <span style={{ color: '#ffffff' }}>Your Heritage</span>
                                    <br />
                                    <span style={{ color: '#007a3d' }}>Wear</span>{' '}
                                    <span style={{ color: '#ffffff' }}>Your Identity</span>
                                </>
                            )}
                        </h1>

                        <p style={{
                            fontSize: '1.15rem',
                            opacity: '0.85',
                            marginBottom: '2.5rem',
                            maxWidth: '450px',
                            lineHeight: '1.9'
                        }}>
                            {language === 'ar'
                                ? 'اكتشف مجموعتنا الفريدة من المنتجات التراثية الفلسطينية. من التطريز اليدوي إلى الفخار التقليدي، كل قطعة تحمل قصة وطن.'
                                : 'Discover our unique collection of Palestinian heritage products. From hand embroidery to traditional pottery, each piece carries the story of a homeland.'}
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link
                                to="/shop"
                                className="btn"
                                style={{
                                    background: 'linear-gradient(135deg, #ce1126 0%, #a00d1f 100%)',
                                    color: 'white',
                                    padding: '16px 35px',
                                    fontSize: '1.1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    boxShadow: '0 10px 30px rgba(206, 17, 38, 0.3)',
                                    borderRadius: '8px'
                                }}
                            >
                                {language === 'ar' ? 'تسوق الآن' : 'Shop Now'}
                                <FaArrowRight style={{ transform: language === 'ar' ? 'rotate(180deg)' : 'none' }} />
                            </Link>
                            <Link
                                to="/shop"
                                className="btn"
                                style={{
                                    background: 'transparent',
                                    color: 'white',
                                    border: '2px solid #007a3d',
                                    padding: '16px 35px',
                                    fontSize: '1.1rem',
                                    borderRadius: '8px'
                                }}
                            >
                                {language === 'ar' ? 'تعرف على قصتنا' : 'Our Story'}
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        animation: 'slideInRight 1s ease-out'
                    }}>
                        <div style={{
                            width: '380px',
                            height: '380px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(206, 17, 38, 0.15) 0%, rgba(0, 122, 61, 0.15) 100%)',
                            border: '3px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '8rem',
                            animation: 'float 4s ease-in-out infinite',
                            position: 'relative'
                        }}>
                            {/* Palestinian Keffiyeh pattern emoji or thobe */}
                            <span style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}>🏺</span>

                            {/* Decorative rings */}
                            <div style={{
                                position: 'absolute',
                                inset: '-20px',
                                borderRadius: '50%',
                                border: '1px solid rgba(206, 17, 38, 0.3)',
                                animation: 'pulse 3s infinite'
                            }} />
                            <div style={{
                                position: 'absolute',
                                inset: '-40px',
                                borderRadius: '50%',
                                border: '1px solid rgba(0, 122, 61, 0.2)',
                                animation: 'pulse 3s infinite 0.5s'
                            }} />
                        </div>
                    </div>
                </div>

                {/* Bottom Flag Stripe */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '8px',
                    background: 'linear-gradient(90deg, #ce1126 25%, #007a3d 25%, #007a3d 50%, #ffffff 50%, #ffffff 75%, #000000 75%)'
                }} />
            </section>

            {/* Features Bar */}
            <section style={{
                background: 'var(--color-card)',
                padding: '2.5rem 0',
                borderBottom: '1px solid var(--color-border)'
            }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '2rem',
                        textAlign: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                            <FaTruck size={24} color="var(--color-secondary)" />
                            <span style={{ fontWeight: '500', color: 'var(--color-text)' }}>
                                {language === 'ar' ? 'شحن لجميع المناطق' : 'Shipping Everywhere'}
                            </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                            <FaHandHoldingHeart size={24} color="var(--color-primary)" />
                            <span style={{ fontWeight: '500', color: 'var(--color-text)' }}>
                                {language === 'ar' ? 'صناعة يدوية أصيلة' : 'Authentic Handmade'}
                            </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                            <FaStar size={24} color="#c9a227" />
                            <span style={{ fontWeight: '500', color: 'var(--color-text)' }}>
                                {language === 'ar' ? 'جودة تراثية' : 'Heritage Quality'}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <FeaturedProducts />

            {/* New Arrivals */}
            <NewArrivals />

            {/* Testimonials */}
            <Testimonials />

            {/* Newsletter */}
            <Newsletter />
        </div>
    )
}
