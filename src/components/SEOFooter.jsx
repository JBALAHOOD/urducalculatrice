import React from 'react';

export default function SEOFooter() {
  const backlinks = [
    {
      name: 'Calculator.net',
      url: 'https://www.calculator.net/',
      description: 'Scientific Calculator'
    },
    {
      name: 'Rapid Tables',
      url: 'https://www.rapidtables.com/calc/',
      description: 'Math Calculators'
    },
    {
      name: 'Math Papa',
      url: 'https://www.mathpapa.com/',
      description: 'Algebra Calculator'
    },
    {
      name: 'Web 2.0 Calc',
      url: 'https://web2.0calc.com/',
      description: 'Online Calculator'
    },
    {
      name: 'Khan Academy',
      url: 'https://www.khanacademy.org/',
      description: 'Learn Math Online'
    },
    {
      name: 'Wolfram Alpha',
      url: 'https://www.wolframalpha.com/',
      description: 'Computational Engine'
    }
  ];

  const urduResources = [
    {
      name: 'اردو ویکیپیڈیا',
      url: 'https://ur.wikipedia.org/',
      description: 'ریاضی کی معلومات'
    },
    {
      name: 'اردو پوائنٹ',
      url: 'https://www.urdupoint.com/',
      description: 'تعلیمی وسائل'
    },
    {
      name: 'روزنامہ جنگ',
      url: 'https://jang.com.pk/',
      description: 'تعلیم سیکشن'
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-gray-100 to-white mt-16 py-12 px-4">
      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            'name': 'آن لائن کیلکولیٹر',
            'alternateName': 'Urdu Calculator',
            'description': 'سادہ اور تیز آن لائن کیلکولیٹر، جمع، تفریق، ضرب اور تقسیم کے لیے۔',
            'url': 'https://urducalculator.com',
            'applicationCategory': 'UtilityApplication',
            'operatingSystem': 'Any',
            'offers': {
              '@type': 'Offer',
              'price': '0',
              'priceCurrency': 'USD'
            },
            'creator': {
              '@type': 'Organization',
              'name': 'Urdu Calculator'
            }
          })
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <div className="text-center mb-12 font-urdu" dir="rtl">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              🧮
              بہترین آن لائن کیلکولیٹر
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              یہ مفت آن لائن کیلکولیٹر آپ کو تمام بنیادی ریاضی کے عمل کرنے میں مدد کرتا ہے۔ 
              جمع، تفریق، ضرب اور تقسیم کے لیے اردو ہندسوں کے ساتھ۔
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-gray-800 mb-2 font-urdu">تیز رفتار</h3>
            <p className="text-gray-600 text-sm font-urdu">فوری نتائج</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-bold text-gray-800 mb-2 font-urdu">موبائل فرینڈلی</h3>
            <p className="text-gray-600 text-sm font-urdu">تمام ڈیوائسز پر کام کرتا ہے</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🔢</div>
            <h3 className="font-bold text-gray-800 mb-2 font-urdu">اردو ہندسے</h3>
            <p className="text-gray-600 text-sm font-urdu">مقامی ہندسوں کا استعمال</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🆓</div>
            <h3 className="font-bold text-gray-800 mb-2 font-urdu">مکمل مفت</h3>
            <p className="text-gray-600 text-sm font-urdu">کوئی فیس نہیں</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* English Calculator Resources */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              🌐 Calculator Resources
            </h3>
            <div className="space-y-3">
              {backlinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-blue-600 group-hover:text-blue-800">
                        {link.name}
                      </div>
                      <div className="text-sm text-gray-600">{link.description}</div>
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-600">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Urdu Resources */}
          <div className="bg-white rounded-xl p-6 shadow-lg font-urdu" dir="rtl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              📚 اردو وسائل
            </h3>
            <div className="space-y-3">
              {urduResources.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-blue-600 group-hover:text-blue-800">
                        {link.name}
                      </div>
                      <div className="text-sm text-gray-600">{link.description}</div>
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-600">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* How to Use Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8 font-urdu" dir="rtl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            استعمال کا طریقہ
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">١</span>
                <p className="text-gray-700">اردو ہندسوں پر کلک کریں</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">٢</span>
                <p className="text-gray-700">عمل کا نشان منتخب کریں (+، -، ×، ÷)</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">٣</span>
                <p className="text-gray-700">دوسرا نمبر داخل کریں</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">٤</span>
                <p className="text-gray-700">برابر (=) دبائیں اور نتیجہ دیکھیں</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 font-urdu" dir="rtl">
            © 2024 آن لائن کیلکولیٹر - تمام حقوق محفوظ ہیں
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Made with ❤️ for Urdu speakers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}