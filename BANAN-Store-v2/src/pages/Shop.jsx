import { useState, useEffect, useMemo } from 'react'
import { supabase } from '../lib/supabase'
import { ProductCard } from '../components/ProductCard'
import { FaSearch } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

export function Shop() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [sortOrder, setSortOrder] = useState('default')
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    const { language } = useLanguage()

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const { data, error } = await supabase
            .from('store_products')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching products:', error)
            setProductList([])
        } else {
            setProductList(data || [])
        }
        setLoading(false)
    }

    const categories = ['All', ...new Set(productList.map(p => p.category).filter(Boolean))]

    const getCategoryLabel = (cat) => {
        if (cat === 'All') return language === 'ar' ? 'الكل' : 'All'
        return cat
    }

    const filteredProducts = useMemo(() => {
        let result = productList

        if (selectedCategory !== 'All') {
            result = result.filter(p => p.category === selectedCategory)
        }

        if (searchTerm) {
            result = result.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description?.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        if (sortOrder === 'low-high') {
            result = [...result].sort((a, b) => a.price - b.price)
        } else if (sortOrder === 'high-low') {
            result = [...result].sort((a, b) => b.price - a.price)
        }

        return result
    }, [searchTerm, selectedCategory, sortOrder, productList])

    if (loading) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏺</div>
                <p style={{ color: '#888' }}>
                    {language === 'ar' ? 'جاري تحميل المنتجات التراثية...' : 'Loading heritage products...'}
                </p>
            </div>
        )
    }

    return (
        <div style={{ background: 'var(--color-bg)', minHeight: '80vh' }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                padding: '4rem 0 3rem',
                textAlign: 'center',
                position: 'relative'
            }}>
                {/* Flag stripe */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #000000 25%, #ffffff 25%, #ffffff 50%, #007a3d 50%, #007a3d 75%, #ce1126 75%)'
                }} />

                <h2 style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    marginBottom: '0.5rem'
                }}>
                    {language === 'ar' ? '🇵🇸 منتجاتنا التراثية' : '🇵🇸 Our Heritage Collection'}
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {language === 'ar' ? 'اكتشف أصالة الحرف الفلسطينية' : 'Discover authentic Palestinian craftsmanship'}
                </p>
            </div>

            <div className="container" style={{ padding: '2rem 0 4rem' }}>
                {/* Filters Bar */}
                <div style={{
                    marginBottom: '2rem',
                    padding: '1.5rem',
                    backgroundColor: 'var(--color-card)',
                    borderRadius: '15px',
                    boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid var(--color-border)'
                }}>
                    {/* Search */}
                    <div style={{ position: 'relative', flex: 1, minWidth: '250px' }}>
                        <FaSearch style={{
                            position: 'absolute',
                            left: language === 'ar' ? 'auto' : 15,
                            right: language === 'ar' ? 15 : 'auto',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#888'
                        }} />
                        <input
                            type="text"
                            placeholder={language === 'ar' ? 'ابحث عن منتج تراثي...' : 'Search heritage products...'}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: language === 'ar' ? '12px 40px 12px 12px' : '12px 12px 12px 40px',
                                borderRadius: '10px',
                                border: '1px solid var(--color-border)',
                                backgroundColor: 'var(--color-bg)',
                                outline: 'none',
                                color: 'var(--color-text)'
                            }}
                        />
                    </div>

                    {/* Categories */}
                    <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '5px' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    backgroundColor: selectedCategory === cat
                                        ? 'var(--color-primary)'
                                        : 'var(--color-light-gray)',
                                    color: selectedCategory === cat ? 'white' : 'var(--color-text)',
                                    fontWeight: '500',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {getCategoryLabel(cat)}
                            </button>
                        ))}
                    </div>

                    {/* Sort */}
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        style={{
                            padding: '10px 15px',
                            borderRadius: '10px',
                            border: '1px solid var(--color-border)',
                            outline: 'none',
                            color: 'var(--color-text)',
                            background: 'var(--color-bg)',
                            cursor: 'pointer'
                        }}
                    >
                        <option value="default">{language === 'ar' ? 'ترتيب: افتراضي' : 'Sort: Default'}</option>
                        <option value="low-high">{language === 'ar' ? 'السعر: من الأقل' : 'Price: Low to High'}</option>
                        <option value="high-low">{language === 'ar' ? 'السعر: من الأعلى' : 'Price: High to Low'}</option>
                    </select>
                </div>

                {/* Product Count */}
                <div style={{ marginBottom: '1.5rem', color: '#888' }}>
                    {filteredProducts.length} {language === 'ar' ? 'منتج' : 'products'}
                </div>

                {/* Grid */}
                {filteredProducts.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        color: '#888',
                        padding: '4rem',
                        background: 'var(--color-card)',
                        borderRadius: '15px'
                    }}>
                        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🏺</span>
                        {language === 'ar'
                            ? 'لم يتم العثور على منتجات. جرب البحث بكلمات أخرى.'
                            : 'No products found. Try a different search.'}
                    </div>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
