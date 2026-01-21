import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaBox, FaShoppingCart, FaDollarSign, FaChartLine, FaCheck } from 'react-icons/fa'

export function AdminPage() {
    const { user } = useAuth()
    const { language } = useLanguage()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('products')
    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [editingProduct, setEditingProduct] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        name: '', price: '', image: '', category: '', description: '', stock: 10
    })
    const [stats, setStats] = useState({ products: 0, orders: 0, revenue: 0, pendingOrders: 0 })

    useEffect(() => {
        if (!user) {
            navigate('/')
            return
        }
        fetchProducts()
        fetchOrders()
        fetchStats()
    }, [user])

    const fetchProducts = async () => {
        const { data, error } = await supabase
            .from('store_products')
            .select('*')
            .order('created_at', { ascending: false })

        if (!error) setProducts(data || [])
        setLoading(false)
    }

    const fetchOrders = async () => {
        const { data, error } = await supabase
            .from('store_orders')
            .select('*')
            .order('created_at', { ascending: false })

        if (!error) setOrders(data || [])
    }

    const fetchStats = async () => {
        const { count: productCount } = await supabase.from('store_products').select('*', { count: 'exact', head: true })
        const { data: ordersData } = await supabase.from('store_orders').select('total, status')

        const totalRevenue = ordersData?.reduce((sum, o) => sum + (parseFloat(o.total) || 0), 0) || 0
        const pendingOrders = ordersData?.filter(o => o.status === 'pending').length || 0

        setStats({
            products: productCount || 0,
            orders: ordersData?.length || 0,
            revenue: totalRevenue,
            pendingOrders
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const productData = {
            ...formData,
            price: parseFloat(formData.price),
            stock: parseInt(formData.stock)
        }

        if (editingProduct) {
            await supabase.from('store_products').update(productData).eq('id', editingProduct.id)
        } else {
            await supabase.from('store_products').insert([productData])
        }

        setShowForm(false)
        setEditingProduct(null)
        setFormData({ name: '', price: '', image: '', category: '', description: '', stock: 10 })
        fetchProducts()
        fetchStats()
    }

    const handleEdit = (product) => {
        setEditingProduct(product)
        setFormData(product)
        setShowForm(true)
    }

    const handleDelete = async (id) => {
        if (window.confirm(language === 'ar' ? 'هل أنت متأكد من حذف هذا المنتج؟' : 'Are you sure you want to delete this product?')) {
            await supabase.from('store_products').delete().eq('id', id)
            fetchProducts()
            fetchStats()
        }
    }

    const updateOrderStatus = async (orderId, newStatus) => {
        await supabase.from('store_orders').update({ status: newStatus }).eq('id', orderId)
        fetchOrders()
        fetchStats()
    }

    const getStatusColor = (status) => {
        const colors = {
            pending: '#ff9800',
            processing: '#2196F3',
            shipped: '#9c27b0',
            delivered: '#4CAF50',
            cancelled: '#f44336'
        }
        return colors[status] || '#888'
    }

    if (!user) return null

    return (
        <div className="container" style={{ padding: '3rem 0' }}>
            <h1 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                🛠️ {language === 'ar' ? 'لوحة التحكم' : 'Admin Dashboard'}
            </h1>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{
                    backgroundColor: 'var(--color-card)',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <FaBox />
                    </div>
                    <div>
                        <h3 style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                            {language === 'ar' ? 'المنتجات' : 'Products'}
                        </h3>
                        <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--color-text)' }}>{stats.products}</p>
                    </div>
                </div>

                <div style={{
                    backgroundColor: 'var(--color-card)',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <FaShoppingCart />
                    </div>
                    <div>
                        <h3 style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                            {language === 'ar' ? 'الطلبات' : 'Orders'}
                        </h3>
                        <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--color-text)' }}>{stats.orders}</p>
                    </div>
                </div>

                <div style={{
                    backgroundColor: 'var(--color-card)',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <FaDollarSign />
                    </div>
                    <div>
                        <h3 style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                            {language === 'ar' ? 'الإيرادات' : 'Revenue'}
                        </h3>
                        <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>₪{stats.revenue.toFixed(0)}</p>
                    </div>
                </div>

                <div style={{
                    backgroundColor: 'var(--color-card)',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <FaChartLine />
                    </div>
                    <div>
                        <h3 style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                            {language === 'ar' ? 'طلبات معلقة' : 'Pending'}
                        </h3>
                        <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ff9800' }}>{stats.pendingOrders}</p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '2rem',
                borderBottom: '2px solid var(--color-border)',
                paddingBottom: '1rem'
            }}>
                <button
                    onClick={() => setActiveTab('products')}
                    style={{
                        padding: '10px 20px',
                        borderRadius: '10px',
                        border: 'none',
                        background: activeTab === 'products' ? 'var(--color-primary)' : 'var(--color-light-gray)',
                        color: activeTab === 'products' ? 'white' : 'var(--color-text)',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                    }}
                >
                    📦 {language === 'ar' ? 'المنتجات' : 'Products'}
                </button>
                <button
                    onClick={() => setActiveTab('orders')}
                    style={{
                        padding: '10px 20px',
                        borderRadius: '10px',
                        border: 'none',
                        background: activeTab === 'orders' ? 'var(--color-primary)' : 'var(--color-light-gray)',
                        color: activeTab === 'orders' ? 'white' : 'var(--color-text)',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        position: 'relative'
                    }}
                >
                    🛒 {language === 'ar' ? 'الطلبات' : 'Orders'}
                    {stats.pendingOrders > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '-5px',
                            right: '-5px',
                            background: '#ff9800',
                            color: 'white',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            fontSize: '0.7rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {stats.pendingOrders}
                        </span>
                    )}
                </button>
            </div>

            {/* Products Tab */}
            {activeTab === 'products' && (
                <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h2>{language === 'ar' ? 'إدارة المنتجات' : 'Manage Products'}</h2>
                        <button
                            onClick={() => { setShowForm(true); setEditingProduct(null); setFormData({ name: '', price: '', image: '', category: '', description: '', stock: 10 }); }}
                            className="btn btn-primary"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <FaPlus /> {language === 'ar' ? 'إضافة منتج' : 'Add Product'}
                        </button>
                    </div>

                    {/* Products Grid */}
                    {loading ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} style={{ height: '250px', background: 'var(--color-light-gray)', borderRadius: '15px', animation: 'pulse 1.5s infinite' }} />
                            ))}
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                            {products.map(product => (
                                <div key={product.id} style={{
                                    background: 'var(--color-card)',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                }}>
                                    <div style={{ height: '120px', background: 'var(--color-light-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={product.image} alt={product.name} loading="lazy" style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
                                    </div>
                                    <div style={{ padding: '1rem' }}>
                                        <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{product.name}</h4>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <span style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>₪{product.price}</span>
                                            <span style={{ fontSize: '0.8rem', color: product.stock > 0 ? '#4CAF50' : '#f44336' }}>
                                                {language === 'ar' ? `مخزون: ${product.stock}` : `Stock: ${product.stock}`}
                                            </span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button onClick={() => handleEdit(product)} style={{ flex: 1, padding: '8px', background: '#4a90d9', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                                                <FaEdit />
                                            </button>
                                            <button onClick={() => handleDelete(product.id)} style={{ flex: 1, padding: '8px', background: '#ff6b6b', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
                <>
                    <h2 style={{ marginBottom: '1.5rem' }}>{language === 'ar' ? 'إدارة الطلبات' : 'Manage Orders'}</h2>

                    {orders.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '3rem', background: 'var(--color-card)', borderRadius: '15px' }}>
                            <p style={{ color: '#888' }}>{language === 'ar' ? 'لا توجد طلبات' : 'No orders yet'}</p>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {orders.map(order => (
                                <div key={order.id} style={{
                                    background: 'var(--color-card)',
                                    borderRadius: '15px',
                                    padding: '1.5rem',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                        <div>
                                            <span style={{ color: '#888', fontSize: '0.85rem' }}>#{order.id.slice(0, 8).toUpperCase()}</span>
                                            <h4 style={{ color: 'var(--color-text)', marginTop: '0.25rem' }}>{order.shipping_name}</h4>
                                            <p style={{ color: '#888', fontSize: '0.9rem' }}>{order.shipping_email}</p>
                                            <p style={{ color: '#888', fontSize: '0.85rem' }}>{order.shipping_city} - {order.shipping_address}</p>
                                        </div>

                                        <div style={{ textAlign: 'right' }}>
                                            <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>₪{parseFloat(order.total).toFixed(2)}</span>
                                            <p style={{ color: '#888', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                                                {new Date(order.created_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Items */}
                                    <div style={{ margin: '1rem 0', padding: '1rem', background: 'var(--color-bg)', borderRadius: '10px' }}>
                                        {order.items?.map((item, i) => (
                                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', padding: '0.25rem 0' }}>
                                                <span>{item.quantity}x {item.name}</span>
                                                <span>₪{(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Status & Actions */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                        <span style={{
                                            padding: '6px 16px',
                                            borderRadius: '20px',
                                            background: `${getStatusColor(order.status)}20`,
                                            color: getStatusColor(order.status),
                                            fontWeight: '600',
                                            fontSize: '0.85rem'
                                        }}>
                                            {order.status}
                                        </span>

                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            {order.status === 'pending' && (
                                                <button onClick={() => updateOrderStatus(order.id, 'processing')} style={{
                                                    padding: '8px 16px', background: '#2196F3', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px'
                                                }}>
                                                    <FaBox size={12} /> {language === 'ar' ? 'تجهيز' : 'Process'}
                                                </button>
                                            )}
                                            {order.status === 'processing' && (
                                                <button onClick={() => updateOrderStatus(order.id, 'shipped')} style={{
                                                    padding: '8px 16px', background: '#9c27b0', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px'
                                                }}>
                                                    🚚 {language === 'ar' ? 'شحن' : 'Ship'}
                                                </button>
                                            )}
                                            {order.status === 'shipped' && (
                                                <button onClick={() => updateOrderStatus(order.id, 'delivered')} style={{
                                                    padding: '8px 16px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px'
                                                }}>
                                                    <FaCheck size={12} /> {language === 'ar' ? 'تم التوصيل' : 'Delivered'}
                                                </button>
                                            )}
                                            {order.status !== 'cancelled' && order.status !== 'delivered' && (
                                                <button onClick={() => updateOrderStatus(order.id, 'cancelled')} style={{
                                                    padding: '8px 16px', background: '#f44336', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer'
                                                }}>
                                                    {language === 'ar' ? 'إلغاء' : 'Cancel'}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}

            {/* Product Form Modal */}
            {showForm && (
                <div style={{
                    position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
                }}>
                    <div style={{ backgroundColor: 'var(--color-card)', borderRadius: '20px', padding: '2rem', width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3>{editingProduct ? (language === 'ar' ? 'تعديل المنتج' : 'Edit Product') : (language === 'ar' ? 'إضافة منتج جديد' : 'Add New Product')}</h3>
                            <button onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--color-text)' }}>
                                <FaTimes />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input
                                type="text"
                                placeholder={language === 'ar' ? 'اسم المنتج' : 'Product Name'}
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)' }}
                            />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input
                                    type="number"
                                    step="0.01"
                                    placeholder={language === 'ar' ? 'السعر' : 'Price'}
                                    required
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)' }}
                                />
                                <input
                                    type="number"
                                    placeholder={language === 'ar' ? 'المخزون' : 'Stock'}
                                    value={formData.stock}
                                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                                    style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)' }}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder={language === 'ar' ? 'رابط الصورة' : 'Image URL'}
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)' }}
                            />
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)' }}
                            >
                                <option value="">{language === 'ar' ? 'اختر الفئة' : 'Select Category'}</option>
                                <option value="Mugs">Mugs</option>
                                <option value="Sets">Sets</option>
                                <option value="Pots">Pots</option>
                            </select>
                            <textarea
                                placeholder={language === 'ar' ? 'الوصف' : 'Description'}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', minHeight: '100px', background: 'var(--color-bg)', color: 'var(--color-text)' }}
                            />
                            <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <FaSave /> {editingProduct ? (language === 'ar' ? 'تحديث' : 'Update') : (language === 'ar' ? 'إضافة' : 'Add')}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
