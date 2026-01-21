import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaCheckCircle, FaTag } from 'react-icons/fa'

export function CheckoutPage() {
    const { cart, cartTotal, clearCart } = useCart()
    const { user } = useAuth()
    const navigate = useNavigate()
    const [orderPlaced, setOrderPlaced] = useState(false)
    const [loading, setLoading] = useState(false)
    const [couponCode, setCouponCode] = useState('')
    const [couponApplied, setCouponApplied] = useState(null)
    const [couponError, setCouponError] = useState('')
    const [formData, setFormData] = useState({
        name: user?.user_metadata?.full_name || '',
        email: user?.email || '',
        address: '',
        city: ''
    })

    const discount = couponApplied ? (cartTotal * couponApplied.discount_percent / 100) : 0
    const finalTotal = cartTotal - discount

    const applyCoupon = async () => {
        setCouponError('')
        const { data, error } = await supabase
            .from('store_coupons')
            .select('*')
            .eq('code', couponCode.toUpperCase())
            .eq('is_active', true)
            .single()

        if (error || !data) {
            setCouponError('كوبون غير صالح')
            setCouponApplied(null)
        } else if (new Date(data.valid_until) < new Date()) {
            setCouponError('انتهت صلاحية الكوبون')
            setCouponApplied(null)
        } else {
            setCouponApplied(data)
            setCouponError('')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        // Save order to Supabase
        const { error } = await supabase.from('store_orders').insert([{
            user_id: user?.id || null,
            items: cart,
            total: finalTotal,
            shipping_name: formData.name,
            shipping_email: formData.email,
            shipping_address: formData.address,
            shipping_city: formData.city,
            status: 'pending'
        }])

        if (!error) {
            setOrderPlaced(true)
            clearCart()
            window.scrollTo(0, 0)
        }
        setLoading(false)
    }

    if (orderPlaced) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
                <FaCheckCircle size={80} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>تم الطلب بنجاح! 🎉</h2>
                <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
                    شكراً {formData.name}! سنبدأ بتجهيز طلبك فوراً.
                </p>
                <div style={{ padding: '2rem', border: '1px solid #f0f0f0', maxWidth: '400px', margin: '0 auto 2rem', borderRadius: '15px' }}>
                    <h3 style={{ marginBottom: '1rem' }}>الفاتورة</h3>
                    <p><strong>المجموع:</strong> ${finalTotal.toFixed(2)}</p>
                    {couponApplied && <p style={{ color: 'green' }}>خصم: -${discount.toFixed(2)}</p>}
                    <p><strong>الشحن إلى:</strong> {formData.city}</p>
                </div>
                <Link to="/" className="btn btn-primary">العودة للرئيسية</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
                <h2>سلة التسوق فارغة!</h2>
                <Link to="/shop" className="btn btn-primary" style={{ marginTop: '1rem' }}>تسوق الآن</Link>
            </div>
        )
    }

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>إتمام الطلب</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem' }}>
                {/* Form */}
                <div>
                    <h3 style={{ marginBottom: '1.5rem' }}>بيانات الشحن</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>الاسم الكامل</label>
                            <input
                                required
                                type="text"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>البريد الإلكتروني</label>
                            <input
                                required
                                type="email"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>العنوان</label>
                            <input
                                required
                                type="text"
                                value={formData.address}
                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>المدينة</label>
                            <input
                                required
                                type="text"
                                value={formData.city}
                                onChange={e => setFormData({ ...formData, city: e.target.value })}
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={loading} style={{ marginTop: '1rem', padding: '15px', fontSize: '1.1rem' }}>
                            {loading ? 'جاري المعالجة...' : `إتمام الطلب (${finalTotal.toFixed(2)}$)`}
                        </button>
                    </form>
                </div>

                {/* Summary */}
                <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '15px', height: 'fit-content' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>ملخص الطلب</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                        {cart.map(item => (
                            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                <span>{item.quantity}x {item.name}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    {/* Coupon Section */}
                    <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', fontWeight: '500' }}>
                            <FaTag /> كوبون خصم
                        </label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="text"
                                placeholder="أدخل الكوبون"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
                            />
                            <button type="button" onClick={applyCoupon} className="btn btn-outline" style={{ padding: '10px 16px' }}>
                                تطبيق
                            </button>
                        </div>
                        {couponError && <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.5rem' }}>{couponError}</p>}
                        {couponApplied && (
                            <p style={{ color: 'green', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                                تم تطبيق خصم {couponApplied.discount_percent}%
                            </p>
                        )}
                    </div>

                    <div style={{ borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>المجموع الفرعي</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        {couponApplied && (
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'green' }}>
                                <span>الخصم</span>
                                <span>-${discount.toFixed(2)}</span>
                            </div>
                        )}
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '0.5rem' }}>
                            <span>الإجمالي</span>
                            <span>${finalTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
