import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'
import { FaBox, FaClock, FaCheckCircle, FaTruck, FaTimesCircle, FaArrowLeft } from 'react-icons/fa'

export function OrdersPage() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()
    const { language } = useLanguage()

    useEffect(() => {
        if (user) {
            fetchOrders()
        } else {
            setLoading(false)
        }
    }, [user])

    const fetchOrders = async () => {
        const { data, error } = await supabase
            .from('store_orders')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })

        if (!error && data) {
            setOrders(data)
        }
        setLoading(false)
    }

    const getStatusInfo = (status) => {
        const statuses = {
            pending: {
                icon: <FaClock />,
                color: '#ff9800',
                label: language === 'ar' ? 'قيد الانتظار' : 'Pending',
                bg: '#fff3e0'
            },
            processing: {
                icon: <FaBox />,
                color: '#2196F3',
                label: language === 'ar' ? 'قيد التجهيز' : 'Processing',
                bg: '#e3f2fd'
            },
            shipped: {
                icon: <FaTruck />,
                color: '#9c27b0',
                label: language === 'ar' ? 'تم الشحن' : 'Shipped',
                bg: '#f3e5f5'
            },
            delivered: {
                icon: <FaCheckCircle />,
                color: '#4CAF50',
                label: language === 'ar' ? 'تم التوصيل' : 'Delivered',
                bg: '#e8f5e9'
            },
            cancelled: {
                icon: <FaTimesCircle />,
                color: '#f44336',
                label: language === 'ar' ? 'ملغي' : 'Cancelled',
                bg: '#ffebee'
            }
        }
        return statuses[status] || statuses.pending
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    if (!user) {
        return (
            <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
                <FaBox size={60} color="var(--color-light-gray)" style={{ marginBottom: '1.5rem' }} />
                <h2 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>
                    {language === 'ar' ? 'يرجى تسجيل الدخول' : 'Please Login'}
                </h2>
                <p style={{ color: '#888', marginBottom: '2rem' }}>
                    {language === 'ar' ? 'سجل دخولك لمشاهدة طلباتك' : 'Login to view your orders'}
                </p>
                <Link to="/" className="btn btn-primary">
                    {language === 'ar' ? 'العودة للرئيسية' : 'Go Home'}
                </Link>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="container" style={{ padding: '4rem 0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[1, 2, 3].map(i => (
                        <div key={i} style={{
                            height: '150px',
                            background: 'var(--color-light-gray)',
                            borderRadius: '15px',
                            animation: 'pulse 1.5s infinite'
                        }} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <Link
                    to="/"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--color-text)',
                        marginBottom: '1rem'
                    }}
                >
                    <FaArrowLeft style={{ transform: language === 'ar' ? 'rotate(180deg)' : 'none' }} />
                    {language === 'ar' ? 'العودة' : 'Back'}
                </Link>
                <h1 style={{ fontSize: '2rem', color: 'var(--color-text)' }}>
                    📦 {language === 'ar' ? 'طلباتي' : 'My Orders'}
                </h1>
            </div>

            {orders.length === 0 ? (
                <div style={{
                    textAlign: 'center',
                    padding: '4rem',
                    background: 'var(--color-card)',
                    borderRadius: '20px'
                }}>
                    <FaBox size={60} color="var(--color-light-gray)" style={{ marginBottom: '1.5rem' }} />
                    <h2 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>
                        {language === 'ar' ? 'لا توجد طلبات بعد' : 'No Orders Yet'}
                    </h2>
                    <p style={{ color: '#888', marginBottom: '2rem' }}>
                        {language === 'ar' ? 'ابدأ التسوق الآن!' : 'Start shopping now!'}
                    </p>
                    <Link to="/shop" className="btn btn-primary">
                        {language === 'ar' ? 'تسوق الآن' : 'Shop Now'}
                    </Link>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {orders.map((order, index) => {
                        const statusInfo = getStatusInfo(order.status)
                        return (
                            <div
                                key={order.id}
                                style={{
                                    background: 'var(--color-card)',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                                }}
                            >
                                {/* Order Header */}
                                <div style={{
                                    padding: '1.5rem',
                                    borderBottom: '1px solid var(--color-border)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: '1rem'
                                }}>
                                    <div>
                                        <span style={{ color: '#888', fontSize: '0.9rem' }}>
                                            {language === 'ar' ? 'رقم الطلب' : 'Order'} #
                                        </span>
                                        <h3 style={{ color: 'var(--color-text)', fontWeight: '600' }}>
                                            {order.id.slice(0, 8).toUpperCase()}
                                        </h3>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <span style={{ color: '#888', fontSize: '0.9rem', display: 'block' }}>
                                            {formatDate(order.created_at)}
                                        </span>
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            background: statusInfo.bg,
                                            color: statusInfo.color,
                                            padding: '6px 12px',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            marginTop: '5px'
                                        }}>
                                            {statusInfo.icon}
                                            {statusInfo.label}
                                        </span>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div style={{ padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                                        {order.items?.map((item, i) => (
                                            <div key={i} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1rem'
                                            }}>
                                                <div style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '10px',
                                                    background: 'var(--color-light-gray)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    overflow: 'hidden'
                                                }}>
                                                    {item.image ? (
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                        />
                                                    ) : (
                                                        <span style={{ fontSize: '1.5rem' }}>📦</span>
                                                    )}
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <h4 style={{ color: 'var(--color-text)', fontWeight: '500' }}>
                                                        {item.name}
                                                    </h4>
                                                    <span style={{ color: '#888', fontSize: '0.9rem' }}>
                                                        x{item.quantity}
                                                    </span>
                                                </div>
                                                <span style={{ fontWeight: '600', color: 'var(--color-secondary)' }}>
                                                    ₪{(item.price * item.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Order Total */}
                                    <div style={{
                                        borderTop: '1px solid var(--color-border)',
                                        paddingTop: '1rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{ color: '#888' }}>
                                            {language === 'ar' ? 'الإجمالي' : 'Total'}
                                        </span>
                                        <span style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            color: 'var(--color-primary)'
                                        }}>
                                            ₪{parseFloat(order.total).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
