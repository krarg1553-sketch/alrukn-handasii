import React from 'react';

// قائمة المنتجات التجريبية الخاصة بالقطع الإلكترونية الهندسية
const products = [
  { id: '1', name: 'لوحة تطوير Arduino Uno R3', price: 15000, image: 'arduino.jpg', stock: 10 },
  { id: '2', name: 'وحدة تحكم ESP32 واي فاي وبلوتوث', price: 12000, image: 'esp32.jpg', stock: 15 },
  { id: '3', name: 'حساس قياس المسافات التراسونيك HC-SR04', price: 3000, image: 'sensor.jpg', stock: 25 },
  { id: '4', name: 'شاشة LCD 16x2 مع محول I2C', price: 6000, image: 'lcd.jpg', stock: 8 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* هيدر المتجر */}
        <header className="flex justify-between items-center border-b border-border pb-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-primary">الركن الهندسي للإلكترونيات</h1>
            <p className="text-xs text-gray-400">وجهتك الأولى للقطع واللوحات التطويرية في العراق</p>
          </div>
          <span className="bg-surface border border-border px-3 py-1 rounded-full text-xs text-primary">
            متصل عبر Acode
          </span>
        </header>

        {/* قسم الترحيب الرئيسي */}
        <section className="bg-surface border border-border rounded-xl p-8 text-center my-8 shadow-xl">
          <h2 className="text-3xl font-extrabold mb-4 text-white">ابتكر مشاريعك المستقبلية</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6 text-sm md:text-base">
            نوفر أحدث القطع الإلكترونية، المتحكمات الدقيقة، وأجزاء الروبوتات بجودة عالية وتوصيل سريع.
          </p>
          <a 
            href="#products" 
            className="inline-block bg-primary text-background font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition-all"
          >
            تصفح المنتجات الآن
          </a>
        </section>

        {/* شبكة عرض المنتجات */}
        <section id="products" className="py-6">
          <h3 className="text-xl font-bold mb-6 border-r-4 border-primary pr-3">أحدث المنتجات المتوفرة</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-card border border-border rounded-xl p-4 flex flex-col justify-between hover:border-primary transition-all shadow-md"
              >
                <div>
                  <div className="h-40 bg-surface rounded-lg mb-4 flex items-center justify-center text-gray-500 border border-border/50">
                    صورة المنتج
                  </div>
                  <h4 className="font-semibold text-white mb-2 text-sm">{product.name}</h4>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mt-4 mb-3">
                    <span className="text-primary font-bold">{product.price.toLocaleString()} د.ع</span>
                    <span className="text-xs text-gray-400">المخزون: {product.stock}</span>
                  </div>
                  <button className="w-full bg-surface border border-primary text-primary hover:bg-primary hover:text-background py-2 rounded-lg text-sm font-medium transition-all">
                    إضافة للسلة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* التذييل (Footer) */}
        <footer className="border-t border-border mt-16 pt-6 text-center text-xs text-gray-500">
          <p>© 2026 الركن الهندسي للإلكترونيات. جميع الحقوق محفوظة.</p>
        </footer>

      </div>
    </main>
  );
}
