import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { FaTimes, FaEnvelope, FaLock, FaUser } from 'react-icons/fa'

export function AuthModal({ isOpen, onClose }) {
    const { signIn, signUp } = useAuth()
    const [isLogin, setIsLogin] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    if (!isOpen) return null

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            if (isLogin) {
                const { error } = await signIn(formData.email, formData.password)
                if (error) throw error
            } else {
                const { error } = await signUp(formData.email, formData.password, formData.name)
                if (error) throw error
                setError('تحقق من بريدك الإلكتروني لتفعيل الحساب!')
                return
            }
            onClose()
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{
            position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
            <div style={{
                backgroundColor: 'white', borderRadius: '20px', padding: '2rem',
                width: '100%', maxWidth: '400px', position: 'relative'
            }}>
                <button onClick={onClose} style={{
                    position: 'absolute', top: 15, right: 15,
                    background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem'
                }}>
                    <FaTimes />
                </button>

                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'} 🍌
                </h2>

                {error && (
                    <div style={{
                        backgroundColor: error.includes('تحقق') ? '#d4edda' : '#f8d7da',
                        padding: '10px', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem'
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {!isLogin && (
                        <div style={{ position: 'relative' }}>
                            <FaUser style={{ position: 'absolute', left: 12, top: 14, color: '#ccc' }} />
                            <input
                                type="text"
                                placeholder="الاسم"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                style={{
                                    width: '100%', padding: '12px 12px 12px 40px',
                                    borderRadius: '10px', border: '1px solid #ddd'
                                }}
                            />
                        </div>
                    )}

                    <div style={{ position: 'relative' }}>
                        <FaEnvelope style={{ position: 'absolute', left: 12, top: 14, color: '#ccc' }} />
                        <input
                            type="email"
                            placeholder="البريد الإلكتروني"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            style={{
                                width: '100%', padding: '12px 12px 12px 40px',
                                borderRadius: '10px', border: '1px solid #ddd'
                            }}
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <FaLock style={{ position: 'absolute', left: 12, top: 14, color: '#ccc' }} />
                        <input
                            type="password"
                            placeholder="كلمة المرور"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            style={{
                                width: '100%', padding: '12px 12px 12px 40px',
                                borderRadius: '10px', border: '1px solid #ddd'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                        style={{ padding: '14px', fontSize: '1rem' }}
                    >
                        {loading ? 'جاري التحميل...' : (isLogin ? 'دخول' : 'إنشاء حساب')}
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#888' }}>
                    {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب؟'}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        style={{
                            background: 'none', border: 'none',
                            color: 'var(--color-primary)', cursor: 'pointer', fontWeight: 'bold', marginRight: '5px'
                        }}
                    >
                        {isLogin ? 'سجل الآن' : 'سجل دخول'}
                    </button>
                </p>
            </div>
        </div>
    )
}
