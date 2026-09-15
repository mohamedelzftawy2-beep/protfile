# 🇪🇬 MO ELZFTAWY - موقع بورتفوليو احترافي

موقع Portfolio وخدمات برمجة مصمم خصيصاً للمصريين، يستهدف الطلاب والمبتدئين في مجال البرمجة.

## 📋 الميزات

✅ **اللغة المصرية الطبيعية** - محتوى عربي مصري سهل الفهم  
✅ **تصميم فاخر** - Black & Gold Luxury كموضوع افتراضي  
✅ **ثلاث ثيمات** - ذهبي، أزرق، بنفسجي  
✅ **RTL Design** - مصمم كاملاً للعربية من اليمين لليسار  
✅ **Responsive** - يعمل بشكل مثالي على كل الأجهزة  
✅ **Glowing Effects** - تأثيرات متوهجة احترافية  
✅ **واجهات تفاعلية** - أزرار وتأثيرات سلسة  
✅ **عرض شهادات** - عرض احترافي للشهادات مع modal  
✅ **نموذج طلب خدمات** - تكامل مع WhatsApp و Telegram  
✅ **طرق دفع مصرية** - Vodafone Cash وخيارات أخرى  

## 📁 بنية الملفات

```
protfile/
├── index.html                     # الصفحة الرئيسية
├── styles.css                     # أنماط CSS (مع الثيمات)
├── script.js                      # JavaScript (التفاعلات)
├── README.md                      # هذا الملف
├── CONFIGURATION.md               # ملاحظات التخصيص والإعداد
├── assets/
│   ├── profile/
│   │   └── WhatsApp Image 2026-09-14 at 7.51.34 PM (4).jpeg  # صورة شخصية
│   ├── certificates/
│   │   ├── WhatsApp Image 2026-09-14 at 7.51.33 PM.jpeg
│   │   ├── WhatsApp Image 2026-09-14 at 7.51.34 PM.jpeg
│   │   ├── WhatsApp Image 2026-09-14 at 7.51.34 PM (1).jpeg
│   │   ├── WhatsApp Image 2026-09-14 at 7.51.34 PM (2).jpeg
│   │   └── WhatsApp Image 2026-09-14 at 7.51.34 PM (3).jpeg
│   └── projects/
│       ├── project-portfolio.svg
│       ├── project-qrcode.svg
│       ├── project-stopwatch.svg
│       └── project-todo.svg
```

## 🎨 الثيمات الثلاثة

### 1️⃣ الذهبي (Gold - الافتراضي)
- الألوان: أسود وذهبي
- تأثيرات: متوهجة ذهبية
- الشعور: فاخر واحترافي

### 2️⃣ الأزرق (Blue - Midnight)
- الألوان: أسود وأزرق فاتح
- تأثيرات: متوهجة زرقاء
- الشعور: تقني وعصري

### 3️⃣ البنفسجي (Purple - Creative)
- الألوان: بنفسجي وزهري
- تأثيرات: متوهجة زهرية
- الشعور: شبابي وإبداعي

## 🚀 البدء السريع

### 1. افتح الموقع
ببساطة افتح ملف `index.html` في المتصفح

### 2. اختر الثيم
انقر على أحد الأزرار الملونة في الأعلى لتبديل الثيم

### 3. استكشف الأقسام
اضغط على روابط التنقل لتصفح الأقسام المختلفة

## ⚙️ التخصيص

### تحديث المعلومات الشخصية

#### في `index.html`:

**الاسم والمهنة:**
```html
<h2 class="hero-subtitle">أنا محمد رضا الزفتاوي</h2>
<p class="hero-profession">مطور Python و JavaScript</p>
```

**الوصف:**
```html
<p class="hero-description">
    بتعلم البرمجة وبطور مهاراتي في Python وJavaScript...
</p>
```

### تحديث معلومات التواصل

#### في `index.html`:

**رقم واتساب:**
```html
<button class="btn btn-whatsapp" id="whatsappBtn">
    <i class="fab fa-whatsapp"></i> ابعتلي على واتساب
</button>
```
غيّر `WHATSAPP_LINK_HERE` إلى رقمك (بدون + أو مسافات)
مثال: `201234567890`

**رابط تليجرام:**
```html
<button class="btn btn-telegram" id="telegramBtn">
    <i class="fab fa-telegram"></i> ابعتلي على تليجرام
</button>
```
غيّر `TELEGRAM_LINK_HERE` إلى اسم المستخدم الخاص بك (بدون @)
مثال: `moelzftawy`

**رقم Vodafone Cash:**
```html
<span id="vodafoneNumber">VODAFONE_CASH_NUMBER_HERE</span>
```
غيّر إلى رقم محفظتك

### تحديث الأسعار

في قسم الخدمات (`#services`):
```html
<p class="service-price">100 جنيه مصري</p>
```

### تحديث المهارات

في قسم المهارات (`#skills`), عدّل أو أضف بطاقات مهارة:
```html
<div class="skill-card">
    <div class="skill-icon"><i class="fab fa-js-square"></i></div>
    <h3 class="skill-name">JavaScript</h3>
    <p class="skill-description">الوصف الخاص بك</p>
</div>
```

### تحديث المشاريع

في قسم المشاريع (`#projects`), عدّل بيانات المشروع:
```html
<div class="project-card">
    <h3 class="project-name">اسم المشروع</h3>
    <p class="project-description">الوصف</p>
    <div class="project-tech">
        <span class="tech-tag">التقنية</span>
    </div>
</div>
```

## 🔗 الروابط المهمة

- [Font Awesome Icons](https://fontawesome.com/icons) - الأيقونات
- [Google Fonts - Tajawal](https://fonts.google.com/specimen/Tajawal) - الخط العربي
- [WhatsApp API](https://www.whatsapp.com/business/downloads/contact-cards/) - واتساب
- [Telegram Bot](https://core.telegram.org/bots) - تليجرام

## 📱 الأقسام الرئيسية

### 1. Navbar
- شعار الموقع
- روابط التنقل
- مبدل الثيمات

### 2. Hero Section
- الترحيب
- الاسم والمهنة
- الوصف الشخصي
- الأزرار الرئيسية
- الصورة الشخصية

### 3. About Section
- معلومات عني
- بيانات شخصية (الاسم، المجال، التخصص، المهارات، الدولة)

### 4. Skills Section
- عرض المهارات
- أوصاف لكل مهارة
- أيقونات جميلة

### 5. Certificates Section
- عرض الشهادات
- صور الشهادات
- بيانات الشهادات
- modal لتكبير الصور

### 6. Projects Section
- عرض المشاريع
- وصف كل مشروع
- التقنيات المستخدمة

### 7. Services Section
- قائمة الخدمات
- الأسعار
- أوصاف الخدمات

### 8. Why Choose Section
- المميزات الرئيسية
- الفوائد

### 9. Request Service Section
- نموذج لطلب الخدمات
- تكامل WhatsApp و Telegram
- اختيار المستوى والخدمة

### 10. Payment Methods Section
- طرق الدفع
- بيانات الدفع
- زر نسخ الرقم

### 11. Contact Section
- روابط التواصل
- WhatsApp و Telegram

### 12. Footer
- معلومات الموقع
- الروابط السريعة
- معلومات التواصل
- حقوق الطبع

## 🎯 نصائح الاستخدام

### للطلاب والمبتدئين
- استخدم اللغة المصرية البسيطة
- أضف شرح خطوة بخطوة
- اجعل الأسعار مناسبة للطالب

### لتحسين الأداء
- استخدم صور بجودة عالية لكن حجم صغير
- قلل عدد الخطوط المستخدمة
- استخدم lazy loading للصور

### لتحسين SEO
- أضف meta tags مناسبة في HTML
- استخدم عناوين واضحة ومفيدة
- أكتب descriptions طويلة الذيل

## 🔐 الأمان

**لا تشارك:**
- كلمات المرور
- أرقام بطاقات الائتمان
- بيانات حساسة

**معلومات آمنة للمشاركة:**
- رقم WhatsApp
- رقم Vodafone Cash
- بريد إلكتروني

## 📧 التواصل

لأي استفسارات أو تحديثات:
- **WhatsApp**: [أضف رقمك]
- **Telegram**: [أضف اسمك]
- **Email**: moelzftawy@example.com

## 📜 الترخيص

هذا المشروع مصمم خصيصاً للاستخدام الشخصي والتعليمي.

## 🙏 شكر وتقدير

شكراً لاستخدامك هذا الموقع. نتمنى أن يساعدك في عرض مشاريعك وخدماتك بشكل احترافي.

---

**صُنع بـ ❤️ للمصريين** 🇪🇬
