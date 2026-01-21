import { FaBell, FaBellSlash } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { requestNotificationPermission } from '../lib/notifications'
import { useLanguage } from '../context/LanguageContext'

export function NotificationButton() {
    const { t } = useLanguage()
    const [permission, setPermission] = useState('default')

    useEffect(() => {
        if ('Notification' in window) {
            setPermission(Notification.permission)
        }
    }, [])

    const handleClick = async () => {
        const granted = await requestNotificationPermission()
        setPermission(granted ? 'granted' : 'denied')

        if (granted) {
            new Notification('🔔 ' + t('notificationGranted'), {
                body: 'BANAN Store',
                icon: '/images/icon-192.png'
            })
        }
    }

    if (permission === 'granted') {
        return (
            <button
                style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: '1.2rem', color: 'var(--color-primary)', padding: '5px'
                }}
                title="Notifications enabled"
            >
                <FaBell />
            </button>
        )
    }

    return (
        <button
            onClick={handleClick}
            style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '1.2rem', color: 'var(--color-text)', padding: '5px'
            }}
            title="Enable notifications"
        >
            <FaBellSlash />
        </button>
    )
}
