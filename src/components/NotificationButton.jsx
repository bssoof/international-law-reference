import { useState, useEffect } from 'react'
import {
    Button,
    useToast,
    Tooltip
} from '@chakra-ui/react'
import { FiBell, FiBellOff } from 'react-icons/fi'

export function NotificationButton() {
    // Safely get initial permission state
    const getInitialPermission = () => {
        if (typeof window !== 'undefined' && 'Notification' in window) {
            return Notification.permission
        }
        return 'default'
    }

    const [permission, setPermission] = useState('default')
    const toast = useToast()

    useEffect(() => {
        setPermission(getInitialPermission())
    }, [])

    const requestPermission = async () => {
        if (typeof window === 'undefined' || !('Notification' in window)) {
            toast({
                title: 'غير مدعوم',
                description: 'المتصفح لا يدعم الإشعارات',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
            return
        }

        try {
            const result = await Notification.requestPermission()
            setPermission(result)

            if (result === 'granted') {
                new Notification('تم تفعيل الإشعارات! 🎉', {
                    body: 'ستصلك تنبيهات عند إضافة قرارات أو اتفاقيات جديدة.',
                    icon: '/pwa-192x192.png'
                })
            }
        } catch (error) {
            console.error('Error requesting permission:', error)
        }
    }

    const sendTestNotification = () => {
        if (permission === 'granted' && 'Notification' in window) {
            try {
                new Notification('تنبيه جديد 📢', {
                    body: 'صدر قرار جديد من محكمة العدل الدولية بخصوص...',
                    icon: '/pwa-192x192.png'
                })
            } catch (e) {
                console.error(e)
            }
        } else {
            requestPermission()
        }
    }

    // Hide button if Notifications are not supported at all
    if (typeof window !== 'undefined' && !('Notification' in window)) {
        return null
    }

    if (permission === 'granted') {
        return (
            <Tooltip label="إرسال إشعار تجريبي" placement="right">
                <Button
                    onClick={sendTestNotification}
                    colorScheme="green"
                    variant="ghost"
                    size="sm"
                    width="100%"
                    justifyContent="flex-start"
                    leftIcon={<FiBell />}
                >
                    الإشعارات مفعلة
                </Button>
            </Tooltip>
        )
    }

    if (permission === 'denied') {
        return (
            <Tooltip label="الإشعارات محظورة من المتصفح" placement="right">
                <Button
                    isDisabled
                    colorScheme="red"
                    variant="ghost"
                    size="sm"
                    width="100%"
                    justifyContent="flex-start"
                    leftIcon={<FiBellOff />}
                >
                    الإشعارات محظورة
                </Button>
            </Tooltip>
        )
    }

    return (
        <Button
            onClick={requestPermission}
            colorScheme="orange"
            variant="ghost"
            size="sm"
            width="100%"
            justifyContent="flex-start"
            leftIcon={<FiBell />}
        >
            تفعيل الإشعارات
        </Button>
    )
}
