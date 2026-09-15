# 🔧 دليل التخصيص والتكوين

هذا الدليل يساعدك على تخصيص الموقع بسهولة وإضافة معلوماتك الشخصية.

## 📝 خطوات التخصيص الأساسية

### الخطوة 1: معلومات الاتصال

#### أولاً - رقم WhatsApp

في ملف `index.html`، ابحث عن هذا السطر:
```html
<button type="button" class="btn btn-whatsapp" id="whatsappBtn">
```

وأنت بالفعل محتاج تغيير رقمك في ملف `script.js`:
```javascript
const whatsappNumber = 'WHATSAPP_LINK_HERE'; // غيّر هذا
```

غيّره إلى:
```javascript
const whatsappNumber = '201234567890'; // رقمك بدون علامات إضافية
```

**مثال:**
- إذا كان رقمك: `+20 123 456 7890`
- اكتب: `201234567890`

#### ثانياً - رابط Telegram

في ملف `script.js`:
```javascript
const telegramUser = 'TELEGRAM_LINK_HERE'; // غيّر هذا
```

غيّره إلى:
```javascript
const telegramUser = 'moelzftawy'; // اسم المستخدم بدون @
```

#### ثالثاً - رقم Vodafone Cash

في ملف `index.html`:
```html
<span id="vodafoneNumber">VODAFONE_CASH_NUMBER_HERE</span>
```

غيّره إلى:
```html
<span id="vodafoneNumber">01234567890</span>
```

### الخطوة 2: معلومات الخدمات والأسعار

#### تغيير أسعار الخدمات

في قسم الخدمات في `index.html`:

```html
<p class="service-price">100 جنيه مصري</p>
```

غيّره إلى السعر الخاص بك:
```html
<p class="service-price">150 جنيه مصري</p>
```

#### تغيير وصف الخدمات

```html
<p class="service-description">وصف الخدمة الحالي...</p>
```

غيّره إلى وصف جديد:
```html
<p class="service-description">وصفك الجديد للخدمة...</p>
```

### الخطوة 3: المعلومات الشخصية

#### تغيير الاسم والمهنة

في قسم Hero:
```html
<h2 class="hero-subtitle">أنا محمد رضا الزفتاوي</h2>
<p class="hero-profession">مطور Python و JavaScript</p>
```

غيّره إلى:
```html
<h2 class="hero-subtitle">أنا [اسمك]</h2>
<p class="hero-profession">[مهنتك]</p>
```

#### تحديث الوصف الشخصي

```html
<p class="hero-description">
    بتعلم البرمجة وبطور مهاراتي في Python وJavaScript...
</p>
```

### الخطوة 4: المهارات والشهادات والمشاريع

#### إضافة مهارة جديدة

في قسم `#skills`:
```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-js-square"></i>
    </div>
    <h3 class="skill-name">JavaScript</h3>
    <p class="skill-description">الوصف</p>
</div>
```

**لتغيير الأيقونة:**
ابحث عن أيقونة من [Font Awesome](https://fontawesome.com/icons)
مثال: بدل `fab fa-js-square` بـ `fab fa-python`

#### حذف أو إضافة شهادات

في قسم `#certificates`:
```html
<div class="certificate-card">
    <div class="cert-image">
        <img src="صورة_الشهادة.jpeg" alt="JavaScript Level 1">
    </div>
    <div class="cert-info">
        <h3 class="cert-name">JavaScript Level 1</h3>
        <p class="cert-issuer">الجهة المانحة</p>
        <p class="cert-date">10 يوليو 2026</p>
        <button class="btn btn-small" onclick="openModal('cert1')">شوف الشهادة</button>
    </div>
</div>
```

#### تحديث المشاريع

في قسم `#projects`:
```html
<div class="project-card">
    <div class="project-header">
        <h3 class="project-name">اسم المشروع</h3>
    </div>
    <p class="project-description">وصف المشروع</p>
    <div class="project-tech">
        <span class="tech-tag">HTML</span>
        <span class="tech-tag">CSS</span>
    </div>
    <button class="btn btn-small">شوف المشروع</button>
</div>
```

## 🎨 تخصيص الألوان والثيمات

إذا أردت تغيير الألوان في الثيمات:

### في ملف `styles.css`:

```css
:root {
    /* Gold Theme (Default) */
    --primary-color: #d4af37;      /* اللون الأساسي */
    --primary-dark: #b8941f;       /* نسخة داكنة */
    --secondary-color: #1a1a1a;    /* اللون الثانوي */
    --accent-color: #ffd700;       /* لون إضافي */
    --bg-color: #0d0d0d;           /* لون الخلفية */
    --bg-light: #1a1a1a;           /* خلفية فاتحة */
}
```

يمكنك تغيير أي لون إلى لون جديد.

**مثال - تغيير اللون الذهبي إلى أحمر:**
```css
--primary-color: #ff0000;
--accent-color: #ff6666;
```

## 📸 التعامل مع الصور

### الصور الحالية:
- صورتك الشخصية: `WhatsApp Image 2026-09-14 at 7.51.34 PM (4).jpeg`
- شهادات JavaScript الثلاث

### لتغيير الصور:

1. احفظ الصور الجديدة في نفس المجلد
2. غيّر اسم الملف في HTML:
```html
<img src="اسم_الصورة_الجديدة.jpeg" alt="الوصف">
```

### نصائح الصور:
- استخدم صور عالية الجودة
- حجم الصور يجب أن يكون صغير (أقل من 500KB لكل صورة)
- استخدم صيغ مثل JPG أو PNG

## 🔤 تغيير الخطوط

الموقع يستخدم خط "Tajawal" العربي. إذا أردت تغييره:

في `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap" rel="stylesheet">
```

ابحث عن خط عربي آخر على [Google Fonts](https://fonts.google.com/?subset=arabic)

في `styles.css`:
```css
body {
    font-family: 'Tajawal', sans-serif;
}
```

## 📱 تغيير العرض والتخطيط

### لتغيير حجم الحروف:

في `styles.css`:
```css
.hero-title {
    font-size: 2.5rem;  /* غيّر هذا الرقم */
}
```

### لتغيير المسافات:

```css
section {
    padding: 80px 20px;  /* غيّر هذه الأرقام */
}
```

## 🌐 إضافة صفحات جديدة

إذا أردت إضافة صفحة جديدة:

1. انسخ `index.html`
2. غيّر المحتوى
3. أضفها في قائمة التنقل:

```html
<a href="about.html" class="nav-link">نبذة عني</a>
```

## 🚀 نشر الموقع

### الخيار 1: Netlify (سهل وسريع)

1. اذهب إلى [netlify.com](https://www.netlify.com)
2. اسحب المجلد إلى الموقع
3. تم!

### الخيار 2: GitHub Pages

1. أنشئ repository على GitHub
2. ارفع الملفات
3. ستظهر الرابط تلقائياً

### الخيار 3: استضافة تقليدية

1. ارفع الملفات عن طريق FTP
2. تأكد أن `index.html` هو الملف الرئيسي

## ✅ قائمة التحقق قبل النشر

- [ ] هل تحديث الاسم والمهنة؟
- [ ] هل أضفت رقم WhatsApp؟
- [ ] هل أضفت اسم Telegram؟
- [ ] هل أضفت رقم Vodafone Cash؟
- [ ] هل حدثت الأسعار؟
- [ ] هل أضفت شهاداتك الخاصة؟
- [ ] هل أضفت صورتك الشخصية؟
- [ ] هل اختبرت الموقع على الموبايل؟
- [ ] هل اختبرت أزرار WhatsApp و Telegram؟
- [ ] هل اختبرت الثيمات الثلاث؟

## 🐛 حل المشاكل الشائعة

### المشكلة: الصور لا تظهر
**الحل:** تأكد أن أسماء الصور صحيحة (Case-sensitive)

### المشكلة: WhatsApp لا يعمل
**الحل:** تأكد من أن رقمك صحيح وبدون علامات إضافية

### المشكلة: الموقع بطيء
**الحل:** قلل حجم الصور أو استخدم صيغ مضغوطة

### المشكلة: الخطوط لا تظهر صحيحة
**الحل:** تأكد من اتصالك بالإنترنت (الخطوط تُحمّل من الإنترنت)

## 📚 موارد إضافية

- [MDN Web Docs](https://developer.mozilla.org/) - تعلم HTML و CSS و JavaScript
- [W3Schools](https://www.w3schools.com/) - دروس سهلة
- [Color Picker](https://htmlcolorcodes.com/) - اختيار الألوان
- [Icon Library](https://fontawesome.com/icons) - أيقونات

## 💬 الدعم

إذا واجهت مشكلة:
1. اقرأ الرسالة الخطأ بعناية
2. افتح console (F12) وابحث عن الأخطاء
3. استخدم Google للبحث عن الحل
4. استشر مطور آخر

---

**بالتوفيق! 🍀**
