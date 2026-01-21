import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('banan_theme')
        return saved === 'dark'
    })

    useEffect(() => {
        localStorage.setItem('banan_theme', isDark ? 'dark' : 'light')
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    const toggleTheme = () => setIsDark(prev => !prev)

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
