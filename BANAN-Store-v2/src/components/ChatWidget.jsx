import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { FaComments, FaTimes, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([
        {
            id: 1,
            from: 'bot',
            text: 'أهلاً وسهلاً! كيف يمكنني مساعدتك اليوم؟ 🇵🇸',
            textEn: 'Welcome! How can I help you today? 🇵🇸'
        }
    ])
    const { language } = useLanguage()

    const quickReplies = [
        { ar: 'أين طلبي؟', en: 'Where is my order?' },
        { ar: 'استفسار عن التطريز', en: 'Embroidery inquiry' },
        { ar: 'طلب خاص', en: 'Custom order' }
    ]

    const handleSend = () => {
        if (!message.trim()) return

        setMessages(prev => [...prev, {
            id: Date.now(),
            from: 'user',
            text: message
        }])

        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                from: 'bot',
                text: 'شكراً لتواصلك! سنرد عليك في أقرب وقت. للطلبات العاجلة، تواصل معنا عبر واتساب.',
                textEn: 'Thanks for reaching out! We\'ll respond soon. For urgent orders, contact us via WhatsApp.'
            }])
        }, 1000)

        setMessage('')
    }

    const handleQuickReply = (reply) => {
        setMessage(language === 'ar' ? reply.ar : reply.en)
    }

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'fixed',
                    bottom: '25px',
                    right: language === 'ar' ? '25px' : 'auto',
                    left: language === 'ar' ? 'auto' : '25px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ce1126 0%, #a00d1f 100%)',
                    border: 'none',
                    boxShadow: '0 5px 25px rgba(206, 17, 38, 0.4)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    zIndex: 997,
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                {isOpen ? <FaTimes /> : <FaComments />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: language === 'ar' ? '25px' : 'auto',
                    left: language === 'ar' ? 'auto' : '25px',
                    width: '350px',
                    maxWidth: 'calc(100vw - 50px)',
                    height: '450px',
                    background: 'var(--color-card)',
                    borderRadius: '16px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    zIndex: 996,
                    animation: 'fadeInUp 0.3s ease-out',
                    border: '1px solid var(--color-border)'
                }}>
                    {/* Header */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                        padding: '1.25rem',
                        color: 'white',
                        borderBottom: '3px solid transparent',
                        borderImage: 'linear-gradient(90deg, #ce1126, #007a3d, #000000) 1'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #ce1126, #007a3d)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.3rem'
                            }}>
                                �🇸
                            </div>
                            <div>
                                <h4 style={{ fontWeight: '600', marginBottom: '2px' }}>
                                    {language === 'ar' ? 'دعم تراثنا' : 'Turathna Support'}
                                </h4>
                                <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                                    {language === 'ar' ? 'نرد خلال دقائق' : 'We reply within minutes'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div style={{
                        flex: 1,
                        padding: '1rem',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        background: 'var(--color-bg)'
                    }}>
                        {messages.map(msg => (
                            <div
                                key={msg.id}
                                style={{
                                    alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '80%'
                                }}
                            >
                                <div style={{
                                    background: msg.from === 'user'
                                        ? 'linear-gradient(135deg, #ce1126, #a00d1f)'
                                        : 'var(--color-card)',
                                    color: msg.from === 'user' ? 'white' : 'var(--color-text)',
                                    padding: '12px 16px',
                                    borderRadius: msg.from === 'user'
                                        ? '16px 16px 4px 16px'
                                        : '16px 16px 16px 4px',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.5',
                                    border: msg.from === 'bot' ? '1px solid var(--color-border)' : 'none'
                                }}>
                                    {msg.from === 'bot'
                                        ? (language === 'ar' ? msg.text : msg.textEn)
                                        : msg.text
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Replies */}
                    <div style={{
                        padding: '0.5rem 1rem',
                        display: 'flex',
                        gap: '8px',
                        flexWrap: 'wrap',
                        background: 'var(--color-bg)'
                    }}>
                        {quickReplies.map((reply, i) => (
                            <button
                                key={i}
                                onClick={() => handleQuickReply(reply)}
                                style={{
                                    background: 'var(--color-card)',
                                    border: '1px solid var(--color-border)',
                                    padding: '8px 12px',
                                    borderRadius: '8px',
                                    fontSize: '0.8rem',
                                    color: 'var(--color-text)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {language === 'ar' ? reply.ar : reply.en}
                            </button>
                        ))}
                    </div>

                    {/* Input */}
                    <div style={{
                        padding: '1rem',
                        borderTop: '1px solid var(--color-border)',
                        display: 'flex',
                        gap: '10px',
                        background: 'var(--color-card)'
                    }}>
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder={language === 'ar' ? 'اكتب رسالتك...' : 'Type a message...'}
                            style={{
                                flex: 1,
                                padding: '12px 16px',
                                borderRadius: '8px',
                                border: '1px solid var(--color-border)',
                                background: 'var(--color-bg)',
                                color: 'var(--color-text)',
                                outline: 'none'
                            }}
                        />
                        <button
                            onClick={handleSend}
                            style={{
                                width: '45px',
                                height: '45px',
                                borderRadius: '8px',
                                background: 'linear-gradient(135deg, #ce1126, #a00d1f)',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <FaPaperPlane />
                        </button>
                    </div>

                    {/* WhatsApp Link */}
                    <a
                        href="https://wa.me/970591234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            padding: '12px',
                            background: '#25D366',
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: '500'
                        }}
                    >
                        <FaWhatsapp size={18} />
                        {language === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
                    </a>
                </div>
            )}
        </>
    )
}
