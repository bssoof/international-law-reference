import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Center, Spinner } from '@chakra-ui/react'
import App from './App'
import { TreatyDetail, CaseDetail, ResolutionDetail } from './pages/DetailPages'
import { ContributePage } from './pages/ContributePage'
import { AISearchPage } from './pages/AISearchPage'
import { ComparePage } from './pages/ComparePage'
import { AdminPage } from './pages/AdminPage'
import { UserProvider } from './context/UserContext'
import theme from './theme'

// Lazy Load
const WorldMapPage = lazy(() => import('./pages/WorldMapPage'))
const CountryCompare = lazy(() => import('./pages/CountryCompare'))
const NewsSection = lazy(() => import('./components/NewsSection'))

const LoadingSpinner = () => (
    <Center h="100vh">
        <Spinner size="xl" color="brand.500" thickness="4px" />
    </Center>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <UserProvider>
                <HashRouter>
                    <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="/treaty/:id" element={<TreatyDetail />} />
                            <Route path="/case/:id" element={<CaseDetail />} />
                            <Route path="/resolution/:id" element={<ResolutionDetail />} />
                            <Route path="/contribute" element={<ContributePage />} />
                            <Route path="/ai-search" element={<AISearchPage />} />
                            <Route path="/compare" element={<ComparePage />} />
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="/world-map" element={<WorldMapPage />} />
                            <Route path="/country-compare" element={<CountryCompare />} />
                            <Route path="/news" element={<NewsSection />} />
                        </Routes>
                    </Suspense>
                </HashRouter>
            </UserProvider>
        </ChakraProvider>
    </React.StrictMode>,
)
