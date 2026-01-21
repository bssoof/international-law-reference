import { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext()

export function useToast() {
    return useContext(ToastContext)
}

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([])

    const addToast = useCallback((message, type = 'success', duration = 3000) => {
        const id = Date.now()
        setToasts(prev => [...prev, { id, message, type }])

        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id))
        }, duration)
    }, [])

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer toasts={toasts} onRemove={removeToast} />
        </ToastContext.Provider>
    )
}

function ToastContainer({ toasts, onRemove }) {
    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            zIndex: 9999,
            pointerEvents: 'none'
        }}>
            {toasts.map(toast => (
                <Toast
                    key={toast.id}
                    toast={toast}
                    onRemove={() => onRemove(toast.id)}
                />
            ))}
        </div>
    )
}

function Toast({ toast, onRemove }) {
    const getColors = () => {
        switch (toast.type) {
            case 'success':
                return { bg: '#4CAF50', icon: '✓' }
            case 'error':
                return { bg: '#f44336', icon: '✕' }
            case 'warning':
                return { bg: '#ff9800', icon: '⚠' }
            case 'info':
                return { bg: '#2196F3', icon: 'ℹ' }
            default:
                return { bg: 'var(--color-primary)', icon: '✓' }
        }
    }

    const { bg, icon } = getColors()

    return (
        <div
            style={{
                background: bg,
                color: 'white',
                padding: '14px 20px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                animation: 'slideInRight 0.3s ease-out',
                pointerEvents: 'auto',
                minWidth: '280px',
                maxWidth: '400px'
            }}
        >
            <span style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontWeight: 'bold'
            }}>
                {icon}
            </span>
            <span style={{ flex: 1, fontSize: '0.95rem' }}>{toast.message}</span>
            <button
                onClick={onRemove}
                style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white',
                    fontSize: '0.8rem'
                }}
            >
                ✕
            </button>
        </div>
    )
}
