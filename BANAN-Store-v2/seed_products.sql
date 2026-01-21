-- Palestinian Heritage Products Seed Data
-- Run this in your Supabase SQL Editor

-- First, delete existing products (optional)
-- DELETE FROM store_products;

-- Insert Palestinian Heritage Products
INSERT INTO store_products (name, price, image, category, description, stock) VALUES

-- الأثواب والتطريز (Thobes & Embroidery)
('ثوب فلسطيني مطرز - أسود', 850, 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500', 'الأثواب والتطريز', 'ثوب فلسطيني تقليدي مطرز يدوياً بتطريز الصليب الفلاحي الأصيل', 15),
('ثوب بيت لحم الأبيض', 950, 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500', 'الأثواب والتطريز', 'ثوب أبيض فاخر بتطريز بيت لحم التقليدي', 10),
('وسادة مطرزة فلسطينية', 120, 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500', 'الأثواب والتطريز', 'وسادة ديكور مطرزة بنقوش فلسطينية تقليدية', 30),
('شال مطرز يدوي', 280, 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500', 'الأثواب والتطريز', 'شال صوف مطرز بتطريز فلسطيني أصيل', 20),

-- الكوفيات (Keffiyehs)
('كوفية فلسطينية أصلية - أبيض وأسود', 75, 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500', 'الكوفيات', 'كوفية فلسطينية أصلية منسوجة يدوياً', 50),
('كوفية فلسطينية - أحمر وأبيض', 75, 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500', 'الكوفيات', 'كوفية بالألوان التقليدية الحمراء والبيضاء', 45),
('كوفية صغيرة للأطفال', 45, 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500', 'الكوفيات', 'كوفية حجم صغير مناسبة للأطفال', 35),

-- الفخار التراثي (Traditional Pottery)  
('طقم فناجين قهوة عربية', 180, 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500', 'الفخار التراثي', 'طقم 6 فناجين قهوة من الفخار الخليلي الأصيل', 25),
('إبريق قهوة نحاسي', 220, 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500', 'الفخار التراثي', 'دلة قهوة نحاسية منقوشة يدوياً', 18),
('صحن فخار مزخرف', 95, 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500', 'الفخار التراثي', 'صحن تقديم فخاري بزخارف فلسطينية', 40),
('مزهرية خليلية', 150, 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500', 'الفخار التراثي', 'مزهرية فخارية من الخليل بنقوش تراثية', 22),

-- الإكسسوارات (Accessories)
('قلادة مفتاح العودة', 65, 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500', 'الإكسسوارات', 'قلادة فضية على شكل مفتاح العودة الفلسطيني', 60),
('سوار خرز فلسطيني', 35, 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500', 'الإكسسوارات', 'سوار من الخرز بألوان العلم الفلسطيني', 80),
('بروش علم فلسطين', 25, 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500', 'الإكسسوارات', 'بروش معدني بشكل علم فلسطين', 100),
('حقيبة قماش مطرزة', 195, 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500', 'الإكسسوارات', 'حقيبة يد قماشية بتطريز فلسطيني', 28),

-- منتجات زيت الزيتون (Olive Oil Products)
('زيت زيتون فلسطيني بكر ممتاز', 85, 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500', 'زيت الزيتون', 'زيت زيتون بكر ممتاز من أشجار فلسطين المعمرة - 1 لتر', 35),
('صابون نابلسي أصلي', 15, 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500', 'زيت الزيتون', 'صابون نابلسي طبيعي 100% من زيت الزيتون', 100),
('طقم هدايا زيت الزيتون', 180, 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500', 'زيت الزيتون', 'طقم هدايا يشمل زيت زيتون وزعتر وصابون نابلسي', 20);

-- Verify the insert
SELECT * FROM store_products ORDER BY category;
