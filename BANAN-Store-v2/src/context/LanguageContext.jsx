import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function useLanguage() {
    return useContext(LanguageContext)
}

const translations = {
    en: {
        // Navbar
        login: 'Login',
        logout: 'Logout',
        myOrders: 'My Orders',
        adminPanel: 'Admin Panel',
        home: 'Home',
        shop: 'Shop',

        // Shop
        ourCollection: 'Our Collection',
        searchPlaceholder: 'Search for cute mugs...',
        all: 'All',
        sortDefault: 'Sort by: Default',
        sortLowHigh: 'Price: Low to High',
        sortHighLow: 'Price: High to Low',
        noProducts: 'No products found',
        addToBag: 'Add to Bag',

        // Product Details
        backToShop: '← Back to Shop',
        freeShipping: '🚚 Free Shipping over ₪150',
        returns: '📦 30-Day Returns',
        youMightLike: 'You Might Also Like',
        onlyLeft: 'Only {n} left!',
        outOfStock: 'Out of Stock',

        // Cart
        yourCart: 'Your Cart',
        emptyCart: 'Your cart is empty',
        shopNow: 'Shop Now',
        proceedToCheckout: 'Proceed to Checkout',

        // Checkout
        checkout: 'Checkout',
        shippingDetails: 'Shipping Details',
        fullName: 'Full Name',
        email: 'Email',
        address: 'Address',
        city: 'City',
        couponLabel: 'Discount Coupon',
        applyCoupon: 'Apply',
        invalidCoupon: 'Invalid coupon',
        couponApplied: '{n}% discount applied',
        orderSummary: 'Order Summary',
        subtotal: 'Subtotal',
        discount: 'Discount',
        total: 'Total',
        placeOrder: 'Place Order',
        orderSuccess: 'Order Placed Successfully! 🎉',
        thankYou: 'Thank you {name}! We will start packing your order.',

        // Reviews
        customerReviews: 'Customer Reviews',
        writeReview: 'Write a Review',
        yourRating: 'Your Rating',
        yourReview: 'Your Review',
        submitReview: 'Submit Review',
        noReviews: 'No reviews yet. Be the first!',

        // Admin
        dashboard: 'Dashboard',
        products: 'Products',
        orders: 'Orders',
        revenue: 'Revenue',
        manageProducts: 'Manage Products',
        addProduct: 'Add Product',
        editProduct: 'Edit Product',
        productName: 'Product Name',
        price: 'Price',
        imageUrl: 'Image URL',
        category: 'Category',
        description: 'Description',
        stock: 'Stock',
        save: 'Save',
        delete: 'Delete',
        confirmDelete: 'Are you sure you want to delete this product?',

        // Auth
        createAccount: 'Create Account',
        loginTitle: 'Login',
        registerTitle: 'Create New Account',
        password: 'Password',
        noAccount: "Don't have an account?",
        hasAccount: 'Already have an account?',
        registerNow: 'Register Now',
        loginNow: 'Login',
        checkEmail: 'Check your email to activate your account!',

        // Wishlist
        wishlist: 'Wishlist',
        emptyWishlist: 'Your wishlist is empty 💔',
        browseCollection: 'Browse Collection',

        // Notifications
        notificationGranted: 'Notifications enabled! 🔔',
        notificationDenied: 'Notifications blocked',
        newOrder: 'New order received!',
    },
    ar: {
        // Navbar
        login: 'تسجيل الدخول',
        logout: 'تسجيل الخروج',
        myOrders: 'طلباتي',
        adminPanel: 'لوحة التحكم',
        home: 'الرئيسية',
        shop: 'المتجر',

        // Shop
        ourCollection: 'مجموعتنا',
        searchPlaceholder: 'ابحث عن أكواب لطيفة...',
        all: 'الكل',
        sortDefault: 'الترتيب: افتراضي',
        sortLowHigh: 'السعر: من الأقل للأعلى',
        sortHighLow: 'السعر: من الأعلى للأقل',
        noProducts: 'لا توجد منتجات',
        addToBag: 'أضف للسلة',

        // Product Details
        backToShop: '← العودة للمتجر',
        freeShipping: '🚚 شحن مجاني فوق ₪150',
        returns: '📦 إرجاع خلال 30 يوم',
        youMightLike: 'قد يعجبك أيضاً',
        onlyLeft: 'متبقي {n} فقط!',
        outOfStock: 'نفذت الكمية',

        // Cart
        yourCart: 'سلة التسوق',
        emptyCart: 'السلة فارغة',
        shopNow: 'تسوق الآن',
        proceedToCheckout: 'إتمام الطلب',

        // Checkout
        checkout: 'إتمام الطلب',
        shippingDetails: 'بيانات الشحن',
        fullName: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        address: 'العنوان',
        city: 'المدينة',
        couponLabel: 'كوبون خصم',
        applyCoupon: 'تطبيق',
        invalidCoupon: 'كوبون غير صالح',
        couponApplied: 'تم تطبيق خصم {n}%',
        orderSummary: 'ملخص الطلب',
        subtotal: 'المجموع الفرعي',
        discount: 'الخصم',
        total: 'الإجمالي',
        placeOrder: 'تأكيد الطلب',
        orderSuccess: 'تم الطلب بنجاح! 🎉',
        thankYou: 'شكراً {name}! سنبدأ بتجهيز طلبك فوراً.',

        // Reviews
        customerReviews: 'تقييمات العملاء',
        writeReview: 'اكتب تقييماً',
        yourRating: 'تقييمك',
        yourReview: 'رأيك',
        submitReview: 'إرسال التقييم',
        noReviews: 'لا توجد تقييمات بعد. كن الأول!',

        // Admin
        dashboard: 'لوحة التحكم',
        products: 'المنتجات',
        orders: 'الطلبات',
        revenue: 'الإيرادات',
        manageProducts: 'إدارة المنتجات',
        addProduct: 'إضافة منتج',
        editProduct: 'تعديل المنتج',
        productName: 'اسم المنتج',
        price: 'السعر',
        imageUrl: 'رابط الصورة',
        category: 'الفئة',
        description: 'الوصف',
        stock: 'المخزون',
        save: 'حفظ',
        delete: 'حذف',
        confirmDelete: 'هل أنت متأكد من حذف هذا المنتج؟',

        // Auth
        createAccount: 'إنشاء حساب',
        loginTitle: 'تسجيل الدخول',
        registerTitle: 'إنشاء حساب جديد',
        password: 'كلمة المرور',
        noAccount: 'ليس لديك حساب؟',
        hasAccount: 'لديك حساب؟',
        registerNow: 'سجل الآن',
        loginNow: 'سجل دخول',
        checkEmail: 'تحقق من بريدك الإلكتروني لتفعيل الحساب!',

        // Wishlist
        wishlist: 'المفضلة',
        emptyWishlist: 'قائمة المفضلة فارغة 💔',
        browseCollection: 'تصفح المجموعة',

        // Notifications
        notificationGranted: 'تم تفعيل الإشعارات! 🔔',
        notificationDenied: 'الإشعارات محظورة',
        newOrder: 'طلب جديد!',
    }
}

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('banan_lang')
        return saved || 'ar' // Default Arabic
    })

    useEffect(() => {
        localStorage.setItem('banan_lang', language)
        document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr')
        document.documentElement.setAttribute('lang', language)
    }, [language])

    const t = (key, params = {}) => {
        let text = translations[language][key] || translations['en'][key] || key
        Object.keys(params).forEach(param => {
            text = text.replace(`{${param}}`, params[param])
        })
        return text
    }

    const toggleLanguage = () => setLanguage(prev => prev === 'ar' ? 'en' : 'ar')

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
