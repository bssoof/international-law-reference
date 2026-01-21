import { Link } from 'react-router-dom'
import { FaShoppingBag, FaHeart, FaUser, FaSignOutAlt, FaCog, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { useEffect, useState } from 'react'
import { AuthModal } from './AuthModal'

export function Navbar() {
    const { cartCount } = useCart()
    const { user, signOut } = useAuth()
    const { isDark, toggleTheme } = useTheme()
    const { language, t, toggleLanguage } = useLanguage()
    const [wiggle, setWiggle] = useState(false)
    const [showAuthModal, setShowAuthModal] = useState(false)
    const [showUserMenu, setShowUserMenu] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        if (cartCount > 0) {
            setWiggle(true)
            const timer = setTimeout(() => setWiggle(false), 300)
            return () => clearTimeout(timer)
        }
    }, [cartCount])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMobileMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [mobileMenuOpen])

    return (
        <>
            <nav style={{
                backgroundColor: 'var(--color-card)',
                boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
                padding: '1rem 0',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                borderBottom: '3px solid transparent',
                borderImage: 'linear-gradient(90deg, #ce1126, #007a3d, #000000, #ce1126) 1'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo */}
                    <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text)' }}>
                        <span style={{ fontSize: '1.8rem' }}>🇵🇸</span>
                        <span style={{
                            background: 'linear-gradient(90deg, #ce1126, #007a3d)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: '800'
                        }}>تراثنا</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', marginLeft: '2rem' }}>
                        <Link to="/" style={{ fontWeight: '500', color: 'var(--color-text)' }}>{t('home')}</Link>
                        <Link to="/shop" style={{ fontWeight: '500', color: 'var(--color-text)' }}>{t('shop')}</Link>
                    </div>

                    {/* Right Side Icons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            style={{
                                background: 'none', border: 'none', cursor: 'pointer',
                                fontSize: '1.2rem', color: 'var(--color-text)', padding: '5px'
                            }}
                            title={isDark ? 'Light Mode' : 'Dark Mode'}
                        >
                            {isDark ? <FaSun /> : <FaMoon />}
                        </button>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            style={{
                                background: 'var(--color-light-gray)', border: 'none', cursor: 'pointer',
                                padding: '5px 10px', borderRadius: '8px', fontSize: '0.8rem',
                                fontWeight: 'bold', color: 'var(--color-text)'
                            }}
                        >
                            {language === 'ar' ? 'EN' : 'عربي'}
                        </button>

                        {/* Wishlist Icon */}
                        <Link to="/wishlist" style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>
                            <FaHeart />
                        </Link>

                        {/* Cart Icon */}
                        <Link to="/cart" style={{ position: 'relative', fontSize: '1.2rem', display: 'inline-block', animation: wiggle ? 'wiggle 0.3s ease' : 'none', color: 'var(--color-text)' }}>
                            <FaShoppingBag />
                            {cartCount > 0 && (
                                <span style={{
                                    position: 'absolute', top: -8, right: -10,
                                    backgroundColor: 'var(--color-primary)', color: 'white',
                                    borderRadius: '50%', padding: '2px 6px', fontSize: '0.7rem'
                                }}>{cartCount}</span>
                            )}
                        </Link>

                        {/* User / Auth - Desktop */}
                        <div className="desktop-menu">
                            {user ? (
                                <div style={{ position: 'relative' }}>
                                    <button
                                        onClick={() => setShowUserMenu(!showUserMenu)}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '8px',
                                            background: 'linear-gradient(135deg, var(--color-primary) 0%, #a00d1f 100%)',
                                            border: 'none',
                                            padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', color: 'white'
                                        }}
                                    >
                                        <FaUser />
                                        <span style={{ fontSize: '0.85rem' }}>{user.user_metadata?.full_name || 'مستخدم'}</span>
                                    </button>

                                    {showUserMenu && (
                                        <div style={{
                                            position: 'absolute', top: '100%', right: 0, marginTop: '8px',
                                            backgroundColor: 'var(--color-card)', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                            minWidth: '180px', overflow: 'hidden', zIndex: 200
                                        }}>
                                            <Link to="/orders" onClick={() => setShowUserMenu(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderBottom: '1px solid var(--color-border)', color: 'var(--color-text)' }}>
                                                📦 {t('myOrders')}
                                            </Link>
                                            <Link to="/admin" onClick={() => setShowUserMenu(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderBottom: '1px solid var(--color-border)', color: 'var(--color-text)' }}>
                                                <FaCog /> {t('adminPanel')}
                                            </Link>
                                            <button
                                                onClick={() => { signOut(); setShowUserMenu(false); }}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px',
                                                    width: '100%', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)'
                                                }}
                                            >
                                                <FaSignOutAlt /> {t('logout')}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button
                                    onClick={() => setShowAuthModal(true)}
                                    style={{
                                        background: 'linear-gradient(135deg, var(--color-primary) 0%, #a00d1f 100%)',
                                        border: 'none',
                                        padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', color: 'white', fontWeight: '500'
                                    }}
                                >
                                    {t('login')}
                                </button>
                            )}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{
                                display: 'none',
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                color: 'var(--color-text)',
                                cursor: 'pointer',
                                padding: '5px'
                            }}
                        >
                            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 998,
                        animation: 'fadeIn 0.3s ease'
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar Menu */}
            <div style={{
                position: 'fixed',
                top: 0,
                right: language === 'ar' ? 0 : 'auto',
                left: language === 'ar' ? 'auto' : 0,
                width: '280px',
                height: '100vh',
                background: 'var(--color-card)',
                zIndex: 999,
                transform: mobileMenuOpen ? 'translateX(0)' : (language === 'ar' ? 'translateX(100%)' : 'translateX(-100%)'),
                transition: 'transform 0.3s ease',
                boxShadow: mobileMenuOpen ? '0 0 30px rgba(0,0,0,0.2)' : 'none',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Mobile Menu Header */}
                <div style={{
                    padding: '1.5rem',
                    borderBottom: '3px solid transparent',
                    borderImage: 'linear-gradient(90deg, #ce1126, #007a3d, #000000) 1',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        🇵🇸 تراثنا
                    </span>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            background: 'var(--color-light-gray)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '35px',
                            height: '35px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--color-text)'
                        }}
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <div style={{ flex: 1, padding: '1rem 0', overflowY: 'auto' }}>
                    <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            display: 'block',
                            padding: '1rem 1.5rem',
                            fontWeight: '500',
                            color: 'var(--color-text)',
                            borderBottom: '1px solid var(--color-border)'
                        }}
                    >
                        🏠 {t('home')}
                    </Link>
                    <Link
                        to="/shop"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            display: 'block',
                            padding: '1rem 1.5rem',
                            fontWeight: '500',
                            color: 'var(--color-text)',
                            borderBottom: '1px solid var(--color-border)'
                        }}
                    >
                        🛍️ {t('shop')}
                    </Link>
                    <Link
                        to="/wishlist"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            display: 'block',
                            padding: '1rem 1.5rem',
                            fontWeight: '500',
                            color: 'var(--color-text)',
                            borderBottom: '1px solid var(--color-border)'
                        }}
                    >
                        ❤️ {t('wishlist')}
                    </Link>
                    <Link
                        to="/cart"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            display: 'block',
                            padding: '1rem 1.5rem',
                            fontWeight: '500',
                            color: 'var(--color-text)',
                            borderBottom: '1px solid var(--color-border)'
                        }}
                    >
                        🛒 {t('yourCart')} {cartCount > 0 && `(${cartCount})`}
                    </Link>

                    {user && (
                        <>
                            <Link
                                to="/orders"
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    display: 'block',
                                    padding: '1rem 1.5rem',
                                    fontWeight: '500',
                                    color: 'var(--color-text)',
                                    borderBottom: '1px solid var(--color-border)'
                                }}
                            >
                                📦 {t('myOrders')}
                            </Link>
                            <Link
                                to="/admin"
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    display: 'block',
                                    padding: '1rem 1.5rem',
                                    fontWeight: '500',
                                    color: 'var(--color-text)',
                                    borderBottom: '1px solid var(--color-border)'
                                }}
                            >
                                ⚙️ {t('adminPanel')}
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Footer */}
                <div style={{
                    padding: '1.5rem',
                    borderTop: '1px solid var(--color-border)'
                }}>
                    {user ? (
                        <button
                            onClick={() => { signOut(); setMobileMenuOpen(false); }}
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'var(--color-primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px'
                            }}
                        >
                            <FaSignOutAlt /> {t('logout')}
                        </button>
                    ) : (
                        <button
                            onClick={() => { setShowAuthModal(true); setMobileMenuOpen(false); }}
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'linear-gradient(135deg, var(--color-primary) 0%, #a00d1f 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                        >
                            {t('login')}
                        </button>
                    )}
                </div>
            </div>

            <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

            <style>{`
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block !important;
                    }
                }
            `}</style>
        </>
    )
}
