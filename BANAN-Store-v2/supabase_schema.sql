-- تراثنا - Palestinian Heritage Store Database Schema
-- الخطوة 1: انسخ هذا الكود
-- الخطوة 2: افتح Supabase Dashboard
-- الخطوة 3: اذهب إلى SQL Editor
-- الخطوة 4: الصق الكود واضغط Run

-- ========================================
-- إنشاء الجداول
-- ========================================

-- جدول المنتجات
CREATE TABLE IF NOT EXISTS store_products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image TEXT,
  category TEXT,
  description TEXT,
  stock INT DEFAULT 100,
  created_at TIMESTAMP DEFAULT NOW()
);

-- جدول الطلبات
CREATE TABLE IF NOT EXISTS store_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  items JSONB NOT NULL,
  total DECIMAL(10,2),
  status TEXT DEFAULT 'pending',
  shipping_name TEXT,
  shipping_email TEXT,
  shipping_address TEXT,
  shipping_city TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- جدول التقييمات
CREATE TABLE IF NOT EXISTS store_reviews (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES store_products(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  user_name TEXT,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- جدول الكوبونات
CREATE TABLE IF NOT EXISTS store_coupons (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  discount_percent INT CHECK (discount_percent > 0 AND discount_percent <= 100),
  valid_until TIMESTAMP,
  is_active BOOLEAN DEFAULT true
);

-- ========================================
-- تفعيل RLS (Row Level Security)
-- ========================================
ALTER TABLE store_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE store_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE store_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE store_coupons ENABLE ROW LEVEL SECURITY;

-- سياسات الوصول
DROP POLICY IF EXISTS "Public read products" ON store_products;
DROP POLICY IF EXISTS "Public insert products" ON store_products;
DROP POLICY IF EXISTS "Public update products" ON store_products;
DROP POLICY IF EXISTS "Public delete products" ON store_products;

CREATE POLICY "Public read products" ON store_products FOR SELECT USING (true);
CREATE POLICY "Public insert products" ON store_products FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update products" ON store_products FOR UPDATE USING (true);
CREATE POLICY "Public delete products" ON store_products FOR DELETE USING (true);

DROP POLICY IF EXISTS "Auth users create orders" ON store_orders;
DROP POLICY IF EXISTS "Users read own orders" ON store_orders;
CREATE POLICY "Auth users create orders" ON store_orders FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users read own orders" ON store_orders FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Public read reviews" ON store_reviews;
DROP POLICY IF EXISTS "Auth users create reviews" ON store_reviews;
CREATE POLICY "Public read reviews" ON store_reviews FOR SELECT USING (true);
CREATE POLICY "Auth users create reviews" ON store_reviews FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Public read coupons" ON store_coupons;
CREATE POLICY "Public read coupons" ON store_coupons FOR SELECT USING (true);

-- ========================================
-- حذف المنتجات القديمة
-- ========================================
DELETE FROM store_products;

-- ========================================
-- إضافة المنتجات التراثية الفلسطينية 🇵🇸
-- ========================================

INSERT INTO store_products (name, price, image, category, description, stock) VALUES

-- الأثواب والتطريز
('ثوب فلسطيني مطرز - أسود', 850, 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500', 'الأثواب والتطريز', 'ثوب فلسطيني تقليدي مطرز يدوياً بتطريز الصليب الفلاحي الأصيل', 15),
('ثوب بيت لحم الأبيض', 950, 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500', 'الأثواب والتطريز', 'ثوب أبيض فاخر بتطريز بيت لحم التقليدي', 10),
('وسادة مطرزة فلسطينية', 120, 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500', 'الأثواب والتطريز', 'وسادة ديكور مطرزة بنقوش فلسطينية تقليدية', 30),
('شال مطرز يدوي', 280, 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500', 'الأثواب والتطريز', 'شال صوف مطرز بتطريز فلسطيني أصيل', 20),

-- الكوفيات
('كوفية فلسطينية أصلية - أبيض وأسود', 75, 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500', 'الكوفيات', 'كوفية فلسطينية أصلية منسوجة يدوياً', 50),
('كوفية فلسطينية - أحمر وأبيض', 75, 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500', 'الكوفيات', 'كوفية بالألوان التقليدية الحمراء والبيضاء', 45),
('كوفية صغيرة للأطفال', 45, 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500', 'الكوفيات', 'كوفية حجم صغير مناسبة للأطفال', 35),

-- الفخار التراثي
('طقم فناجين قهوة عربية', 180, 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500', 'الفخار التراثي', 'طقم 6 فناجين قهوة من الفخار الخليلي الأصيل', 25),
('إبريق قهوة نحاسي', 220, 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500', 'الفخار التراثي', 'دلة قهوة نحاسية منقوشة يدوياً', 18),
('صحن فخار مزخرف', 95, 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500', 'الفخار التراثي', 'صحن تقديم فخاري بزخارف فلسطينية', 40),
('مزهرية خليلية', 150, 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500', 'الفخار التراثي', 'مزهرية فخارية من الخليل بنقوش تراثية', 22),

-- الإكسسوارات
('قلادة مفتاح العودة', 65, 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500', 'الإكسسوارات', 'قلادة فضية على شكل مفتاح العودة الفلسطيني', 60),
('سوار خرز فلسطيني', 35, 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500', 'الإكسسوارات', 'سوار من الخرز بألوان العلم الفلسطيني', 80),
('بروش علم فلسطين', 25, 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500', 'الإكسسوارات', 'بروش معدني بشكل علم فلسطين', 100),
('حقيبة قماش مطرزة', 195, 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500', 'الإكسسوارات', 'حقيبة يد قماشية بتطريز فلسطيني', 28),

-- زيت الزيتون والصابون
('زيت زيتون فلسطيني بكر ممتاز', 85, 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500', 'زيت الزيتون', 'زيت زيتون بكر ممتاز من أشجار فلسطين المعمرة - 1 لتر', 35),
('صابون نابلسي أصلي', 15, 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500', 'زيت الزيتون', 'صابون نابلسي طبيعي 100% من زيت الزيتون', 100),
('طقم هدايا زيت الزيتون', 180, 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500', 'زيت الزيتون', 'طقم هدايا يشمل زيت زيتون وزعتر وصابون نابلسي', 20);

-- ========================================
-- إضافة كوبونات خصم
-- ========================================
INSERT INTO store_coupons (code, discount_percent, valid_until) VALUES
('PALESTINE10', 10, '2027-12-31'),
('TURATHNA20', 20, '2027-06-30'),
('HERITAGE15', 15, '2027-09-30')
ON CONFLICT (code) DO NOTHING;

-- ========================================
-- التحقق من الإضافة
-- ========================================
SELECT 'تم إضافة ' || COUNT(*) || ' منتج بنجاح! 🇵🇸' AS result FROM store_products;
