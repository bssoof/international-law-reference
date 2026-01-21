import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp, FaHeart } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

export function Footer() {
    const { language } = useLanguage()

    return (
        <footer style={{
            backgroundColor: '#1a1a1a',
            color: '#888',
            padding: '4rem 0 0',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '2rem' }}>🇵🇸</span>
                            <h3 style={{
                                color: 'white',
                                background: 'linear-gradient(90deg, #ce1126, #007a3d)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: '800'
                            }}>تراثنا</h3>
                        </div>
                        <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '0.95rem' }}>
                            {language === 'ar'
                                ? 'نحافظ على التراث الفلسطيني من خلال منتجات أصيلة مصنوعة بحب وإتقان.'
                                : 'Preserving Palestinian heritage through authentic products made with love and craftsmanship.'}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem', fontWeight: '600' }}>
                            {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/" style={{ color: '#888', transition: 'color 0.2s' }}>{language === 'ar' ? 'الرئيسية' : 'Home'}</Link></li>
                            <li><Link to="/shop" style={{ color: '#888', transition: 'color 0.2s' }}>{language === 'ar' ? 'المتجر' : 'Shop'}</Link></li>
                            <li><Link to="/cart" style={{ color: '#888', transition: 'color 0.2s' }}>{language === 'ar' ? 'السلة' : 'Cart'}</Link></li>
                            <li><Link to="/orders" style={{ color: '#888', transition: 'color 0.2s' }}>{language === 'ar' ? 'طلباتي' : 'My Orders'}</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem', fontWeight: '600' }}>
                            {language === 'ar' ? 'الفئات' : 'Categories'}
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li style={{ color: '#888' }}>{language === 'ar' ? 'الأثواب والتطريز' : 'Thobes & Embroidery'}</li>
                            <li style={{ color: '#888' }}>{language === 'ar' ? 'الكوفيات' : 'Keffiyehs'}</li>
                            <li style={{ color: '#888' }}>{language === 'ar' ? 'الفخار التراثي' : 'Traditional Pottery'}</li>
                            <li style={{ color: '#888' }}>{language === 'ar' ? 'الإكسسوارات' : 'Accessories'}</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1rem', fontWeight: '600' }}>
                            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#888' }}>
                            <span>📧 info@turathna.ps</span>
                            <span>📞 +970 59 123 4567</span>
                            <span>📍 {language === 'ar' ? 'فلسطين' : 'Palestine'}</span>
                        </div>

                        {/* Social Icons */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            <a href="#" style={{ color: '#888', transition: 'color 0.2s' }}><FaInstagram size={20} /></a>
                            <a href="#" style={{ color: '#888', transition: 'color 0.2s' }}><FaTwitter size={20} /></a>
                            <a href="#" style={{ color: '#888', transition: 'color 0.2s' }}><FaFacebook size={20} /></a>
                            <a href="#" style={{ color: '#25D366', transition: 'color 0.2s' }}><FaWhatsapp size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid #333',
                    paddingTop: '2rem',
                    paddingBottom: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} {language === 'ar' ? 'تراثنا' : 'Turathna'}.
                        {' '}{language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#666',
                        fontSize: '0.9rem'
                    }}>
                        {language === 'ar' ? 'صنع بـ' : 'Made with'}
                        <FaHeart color="#ce1126" size={14} />
                        {language === 'ar' ? 'في فلسطين' : 'in Palestine'}
                        <span style={{ marginLeft: '8px' }}>🇵🇸</span>
                    </div>
                </div>
            </div>

            {/* Flag stripe at bottom */}
            <div style={{
                height: '6px',
                background: 'linear-gradient(90deg, #000000 25%, #ffffff 25%, #ffffff 50%, #007a3d 50%, #007a3d 75%, #ce1126 75%)'
            }} />
        </footer>
    )
}
