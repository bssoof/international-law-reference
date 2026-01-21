import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { CartPage } from './pages/CartPage'
import { ProductDetails } from './pages/ProductDetails'
import { CheckoutPage } from './pages/CheckoutPage'
import { WishlistPage } from './pages/WishlistPage'
import { AdminPage } from './pages/AdminPage'
import { OrdersPage } from './pages/OrdersPage'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { ToastProvider } from './context/ToastContext'
import { ChatWidget } from './components/ChatWidget'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <ToastProvider>
            <CartProvider>
              <WishlistProvider>
                <div className="app-container">
                  <Navbar />
                  <main style={{ minHeight: '80vh' }}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/cart" element={<CartPage />} />
                      <Route path="/checkout" element={<CheckoutPage />} />
                      <Route path="/wishlist" element={<WishlistPage />} />
                      <Route path="/product/:id" element={<ProductDetails />} />
                      <Route path="/admin" element={<AdminPage />} />
                      <Route path="/orders" element={<OrdersPage />} />
                    </Routes>
                  </main>
                  <Footer />
                  <ChatWidget />
                </div>
              </WishlistProvider>
            </CartProvider>
          </ToastProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
