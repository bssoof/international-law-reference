import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { FaPaperPlane, FaEnvelope } from 'react-icons/fa'

export function Newsletter() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const { language } = useLanguage()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            setSubmitted(true)
            setEmail('')
            setTimeout(() => setSubmitted(false), 3000)
        }
    }

    return (
        <section style={{
            padding: '5rem 0',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Palestinian flag stripe at top */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #000000 25%, #ffffff 25%, #ffffff 50%, #007a3d 50%, #007a3d 75%, #ce1126 75%)'
            }} />

            {/* Decorative elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '5%',
                fontSize: '4rem',
                opacity: 0.05
            }}>🇵🇸</div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                fontSize: '3rem',
                opacity: 0.05
            }}>🏺</div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    textAlign: 'center',
                    color: 'white'
                }}>
                    {/* Icon */}
                    <div style={{
                        width: '80px',
                        height: '80px',
                        margin: '0 auto 1.5rem',
                        background: 'linear-gradient(135deg, var(--color-primary), #a00d1f)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <FaEnvelope size={30} />
                    </div>

                    {/* Text */}
                    <h2 style={{
                        fontSize: '2.2rem',
                        fontWeight: '700',
                        marginBottom: '1rem'
                    }}>
                        {language === 'ar' ? 'انضم لعائلة تراثنا' : 'Join Our Heritage Family'}
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        opacity: 0.85,
                        marginBottom: '2rem',
                        lineHeight: '1.8'
                    }}>
                        {language === 'ar'
                            ? 'اشترك في نشرتنا البريدية لتصلك أحدث المنتجات التراثية والعروض الحصرية'
                            : 'Subscribe to receive the latest heritage products and exclusive offers'}
                    </p>

                    {/* Form */}
                    {submitted ? (
                        <div style={{
                            background: 'rgba(0, 122, 61, 0.2)',
                            border: '1px solid rgba(0, 122, 61, 0.3)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            animation: 'fadeIn 0.5s ease'
                        }}>
                            <span style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'block' }}>🎉</span>
                            <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                                {language === 'ar' ? 'شكراً لانضمامك!' : 'Thanks for joining!'}
                            </p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                maxWidth: '500px',
                                margin: '0 auto'
                            }}
                        >
                            <input
                                type="email"
                                placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    flex: 1,
                                    padding: '16px 20px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    background: 'rgba(255,255,255,0.95)',
                                    color: '#333'
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    background: 'linear-gradient(135deg, var(--color-secondary), #005c2e)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '16px 30px',
                                    borderRadius: '8px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    transition: 'transform 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <FaPaperPlane />
                                {language === 'ar' ? 'اشترك' : 'Subscribe'}
                            </button>
                        </form>
                    )}

                    {/* Promise */}
                    <p style={{
                        fontSize: '0.85rem',
                        opacity: 0.6,
                        marginTop: '1.5rem'
                    }}>
                        🔒 {language === 'ar' ? 'نحترم خصوصيتك ولن نشارك بياناتك' : "We respect your privacy and won't share your data"}
                    </p>
                </div>
            </div>
        </section>
    )
}
