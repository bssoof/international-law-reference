// Palestinian Heritage Products Seed Script
// Run: node seed_products.cjs

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://bufakaksnwpcljmyrohj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1ZmFrYWtzbndwY2xqbXlyb2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3NjAzOTIsImV4cCI6MjA4NDMzNjM5Mn0.q9uchSC_Pzrc6D6DalSNYiOADoVUo2WQ_eps_LUOdr8';

const supabase = createClient(supabaseUrl, supabaseKey);

const products = [
    // الأثواب والتطريز (Thobes & Embroidery)
    {
        name: 'ثوب فلسطيني مطرز - أسود',
        price: 850,
        image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500',
        category: 'الأثواب والتطريز',
        description: 'ثوب فلسطيني تقليدي مطرز يدوياً بتطريز الصليب الفلاحي الأصيل',
        stock: 15
    },
    {
        name: 'ثوب بيت لحم الأبيض',
        price: 950,
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500',
        category: 'الأثواب والتطريز',
        description: 'ثوب أبيض فاخر بتطريز بيت لحم التقليدي',
        stock: 10
    },
    {
        name: 'وسادة مطرزة فلسطينية',
        price: 120,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
        category: 'الأثواب والتطريز',
        description: 'وسادة ديكور مطرزة بنقوش فلسطينية تقليدية',
        stock: 30
    },
    {
        name: 'شال مطرز يدوي',
        price: 280,
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500',
        category: 'الأثواب والتطريز',
        description: 'شال صوف مطرز بتطريز فلسطيني أصيل',
        stock: 20
    },

    // الكوفيات (Keffiyehs)
    {
        name: 'كوفية فلسطينية أصلية - أبيض وأسود',
        price: 75,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
        category: 'الكوفيات',
        description: 'كوفية فلسطينية أصلية منسوجة يدوياً',
        stock: 50
    },
    {
        name: 'كوفية فلسطينية - أحمر وأبيض',
        price: 75,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500',
        category: 'الكوفيات',
        description: 'كوفية بالألوان التقليدية الحمراء والبيضاء',
        stock: 45
    },
    {
        name: 'كوفية صغيرة للأطفال',
        price: 45,
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500',
        category: 'الكوفيات',
        description: 'كوفية حجم صغير مناسبة للأطفال',
        stock: 35
    },

    // الفخار التراثي (Traditional Pottery)
    {
        name: 'طقم فناجين قهوة عربية',
        price: 180,
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500',
        category: 'الفخار التراثي',
        description: 'طقم 6 فناجين قهوة من الفخار الخليلي الأصيل',
        stock: 25
    },
    {
        name: 'إبريق قهوة نحاسي',
        price: 220,
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500',
        category: 'الفخار التراثي',
        description: 'دلة قهوة نحاسية منقوشة يدوياً',
        stock: 18
    },
    {
        name: 'صحن فخار مزخرف',
        price: 95,
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500',
        category: 'الفخار التراثي',
        description: 'صحن تقديم فخاري بزخارف فلسطينية',
        stock: 40
    },
    {
        name: 'مزهرية خليلية',
        price: 150,
        image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500',
        category: 'الفخار التراثي',
        description: 'مزهرية فخارية من الخليل بنقوش تراثية',
        stock: 22
    },

    // الإكسسوارات (Accessories)
    {
        name: 'قلادة مفتاح العودة',
        price: 65,
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500',
        category: 'الإكسسوارات',
        description: 'قلادة فضية على شكل مفتاح العودة الفلسطيني',
        stock: 60
    },
    {
        name: 'سوار خرز فلسطيني',
        price: 35,
        image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500',
        category: 'الإكسسوارات',
        description: 'سوار من الخرز بألوان العلم الفلسطيني',
        stock: 80
    },
    {
        name: 'بروش علم فلسطين',
        price: 25,
        image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500',
        category: 'الإكسسوارات',
        description: 'بروش معدني بشكل علم فلسطين',
        stock: 100
    },
    {
        name: 'حقيبة قماش مطرزة',
        price: 195,
        image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500',
        category: 'الإكسسوارات',
        description: 'حقيبة يد قماشية بتطريز فلسطيني',
        stock: 28
    },

    // زيت الزيتون (Olive Oil Products)
    {
        name: 'زيت زيتون فلسطيني بكر ممتاز',
        price: 85,
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500',
        category: 'زيت الزيتون',
        description: 'زيت زيتون بكر ممتاز من أشجار فلسطين المعمرة - 1 لتر',
        stock: 35
    },
    {
        name: 'صابون نابلسي أصلي',
        price: 15,
        image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500',
        category: 'زيت الزيتون',
        description: 'صابون نابلسي طبيعي 100% من زيت الزيتون',
        stock: 100
    },
    {
        name: 'طقم هدايا زيت الزيتون',
        price: 180,
        image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500',
        category: 'زيت الزيتون',
        description: 'طقم هدايا يشمل زيت زيتون وزعتر وصابون نابلسي',
        stock: 20
    }
];

async function seedProducts() {
    console.log('🇵🇸 بدء إضافة المنتجات التراثية الفلسطينية...\n');

    // Delete existing products first
    console.log('🗑️ حذف المنتجات القديمة...');
    const { error: deleteError } = await supabase
        .from('store_products')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

    if (deleteError) {
        console.log('⚠️ لم يتم العثور على منتجات قديمة أو خطأ في الحذف:', deleteError.message);
    }

    // Insert new products
    console.log('📦 إضافة المنتجات الجديدة...\n');

    for (const product of products) {
        const { data, error } = await supabase
            .from('store_products')
            .insert([product])
            .select();

        if (error) {
            console.log(`❌ خطأ في إضافة ${product.name}:`, error.message);
        } else {
            console.log(`✅ تمت إضافة: ${product.name}`);
        }
    }

    // Verify count
    const { count } = await supabase
        .from('store_products')
        .select('*', { count: 'exact', head: true });

    console.log(`\n🎉 تم إضافة ${count || products.length} منتج بنجاح!`);
    console.log('🛒 افتح المتجر الآن: http://localhost:5173/shop');
}

seedProducts();
