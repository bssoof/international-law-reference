// Push Notification Utility

export const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
        console.log('This browser does not support notifications')
        return false
    }

    const permission = await Notification.requestPermission()
    return permission === 'granted'
}

export const sendNotification = (title, options = {}) => {
    if (Notification.permission === 'granted') {
        new Notification(title, {
            icon: '/images/icon-192.png',
            badge: '/images/icon-192.png',
            vibrate: [200, 100, 200],
            ...options
        })
    }
}

// Register service worker for background notifications
export const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('/sw.js')
            console.log('Service Worker registered:', registration)
            return registration
        } catch (error) {
            console.error('Service Worker registration failed:', error)
        }
    }
}
