import { useLanguage } from '../context/LanguageContext'

export function StockBadge({ stock }) {
    const { t } = useLanguage()

    if (stock === undefined || stock === null) return null

    if (stock <= 0) {
        return (
            <span style={{
                position: 'absolute', top: 10, left: 10,
                backgroundColor: '#666', color: 'white',
                padding: '4px 10px', borderRadius: '15px',
                fontSize: '0.75rem', fontWeight: 'bold'
            }}>
                {t('outOfStock')}
            </span>
        )
    }

    if (stock <= 5) {
        return (
            <span style={{
                position: 'absolute', top: 10, left: 10,
                backgroundColor: '#ff6b6b', color: 'white',
                padding: '4px 10px', borderRadius: '15px',
                fontSize: '0.75rem', fontWeight: 'bold',
                animation: 'pulse 1.5s infinite'
            }}>
                {t('onlyLeft', { n: stock })}
            </span>
        )
    }

    return null
}
