-- إصلاح صلاحيات القراءة للمنتجات
-- شغّل هذا في SQL Editor في Supabase

-- تفعيل RLS
ALTER TABLE store_products ENABLE ROW LEVEL SECURITY;

-- حذف السياسات القديمة إذا وجدت
DROP POLICY IF EXISTS "Public read products" ON store_products;
DROP POLICY IF EXISTS "Allow public read" ON store_products;
DROP POLICY IF EXISTS "Enable read access for all users" ON store_products;

-- إنشاء سياسة جديدة للسماح بالقراءة للجميع
CREATE POLICY "Enable read access for all users" 
ON store_products 
FOR SELECT 
USING (true);

-- التأكد من النتيجة
SELECT 'تم إصلاح الصلاحيات بنجاح! 🎉' AS result;
