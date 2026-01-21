import { useLanguage } from '../context/LanguageContext'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
    {
        id: 1,
        name: 'فاطمة الخليلي',
        nameEn: 'Fatima Al-Khalili',
        avatar: '👩',
        location: 'رام الله',
        locationEn: 'Ramallah',
        rating: 5,
        text: 'ثوب التطريز الذي اشتريته رائع جداً! الجودة ممتازة والتطريز يدوي حقيقي. فخورة بارتداء تراثنا.',
        textEn: 'The embroidered thobe I bought is amazing! Excellent quality and genuine hand embroidery. Proud to wear our heritage.'
    },
    {
        id: 2,
        name: 'أحمد ناصر',
        nameEn: 'Ahmad Nasser',
        avatar: '👨',
        location: 'القدس',
        locationEn: 'Jerusalem',
        rating: 5,
        text: 'اشتريت طقم فخار تراثي كهدية. التغليف كان رائعاً والقطع جميلة جداً. شكراً لكم!',
        textEn: 'Bought a traditional pottery set as a gift. Beautiful packaging and stunning pieces. Thank you!'
    },
    {
        id: 3,
        name: 'منى عبدالرحمن',
        nameEn: 'Muna Abdulrahman',
        avatar: '👩',
        location: 'الناصرة',
        locationEn: 'Nazareth',
        rating: 5,
        text: 'الكوفية الأصلية التي طلبتها وصلت بسرعة. نوعية ممتازة وألوان ثابتة. أنصح الجميع بالشراء.',
        textEn: 'The authentic keffiyeh I ordered arrived quickly. Excellent quality with lasting colors. Highly recommend!'
    }
]

export function Testimonials() {
    const { language } = useLanguage()

    return (
        <section style={{
            padding: '5rem 0',
            background: 'var(--color-card)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(206, 17, 38, 0.05), rgba(0, 122, 61, 0.05))',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, var(--color-primary), #a00d1f)',
                        color: 'white',
                        padding: '8px 20px',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                    }}>
                        💬 {language === 'ar' ? 'آراء عملائنا' : 'Customer Reviews'}
                    </span>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'var(--color-text)',
                        marginBottom: '0.5rem'
                    }}>
                        {language === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Customers Say'}
                    </h2>
                    <p style={{ color: '#888', fontSize: '1.1rem' }}>
                        {language === 'ar' ? 'نفخر بثقة عملائنا في منتجاتنا التراثية' : "We're proud of our customers' trust in our heritage products"}
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            style={{
                                background: 'var(--color-bg)',
                                borderRadius: '16px',
                                padding: '2rem',
                                position: 'relative',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease',
                                border: '1px solid var(--color-border)',
                                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)'
                                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.1)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.05)'
                            }}
                        >
                            {/* Quote Icon */}
                            <FaQuoteLeft
                                size={30}
                                style={{
                                    color: 'var(--color-primary)',
                                    opacity: 0.2,
                                    marginBottom: '1rem'
                                }}
                            />

                            {/* Stars */}
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} size={16} color="#c9a227" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p style={{
                                fontSize: '1rem',
                                lineHeight: '1.8',
                                color: 'var(--color-text)',
                                marginBottom: '1.5rem'
                            }}>
                                "{language === 'ar' ? testimonial.text : testimonial.textEn}"
                            </p>

                            {/* Author */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                borderTop: '1px solid var(--color-border)',
                                paddingTop: '1rem'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem'
                                }}>
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 style={{
                                        fontWeight: '600',
                                        color: 'var(--color-text)',
                                        marginBottom: '2px'
                                    }}>
                                        {language === 'ar' ? testimonial.name : testimonial.nameEn}
                                    </h4>
                                    <span style={{ fontSize: '0.85rem', color: '#888' }}>
                                        📍 {language === 'ar' ? testimonial.location : testimonial.locationEn}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
