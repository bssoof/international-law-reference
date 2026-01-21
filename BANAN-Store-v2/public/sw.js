// Service Worker for Push Notifications

self.addEventListener('install', (event) => {
    console.log('Service Worker installed')
    self.skipWaiting()
})

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated')
})

self.addEventListener('push', (event) => {
    const data = event.data?.json() || {}

    const options = {
        body: data.body || 'You have a new notification',
        icon: '/images/icon-192.png',
        badge: '/images/icon-192.png',
        vibrate: [200, 100, 200],
        data: {
            url: data.url || '/'
        }
    }

    event.waitUntil(
        self.registration.showNotification(data.title || 'BANAN Store', options)
    )
})

self.addEventListener('notificationclick', (event) => {
    event.notification.close()

    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    )
})
