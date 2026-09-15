// ==================== Theme Switcher ====================
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'gold';
    applyTheme(savedTheme);

    // Theme buttons
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const theme = this.dataset.theme;
            applyTheme(theme);
            localStorage.setItem('theme', theme);
        });
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            const isOpen = navMenu.classList.contains('is-open');
            if (isOpen) {
                closeMobileMenu();
            } else {
                navMenu.classList.add('is-open');
                menuToggle.setAttribute('aria-expanded', 'true');
                menuToggle.setAttribute('aria-label', 'إغلاق القائمة');
                menuToggle.querySelector('i').className = 'fas fa-times';
            }
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });

        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                closeMobileMenu();
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeMobileMenu();
            }
        });

        function closeMobileMenu() {
            navMenu.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'فتح القائمة');
            menuToggle.querySelector('i').className = 'fas fa-bars';
        }
    }
});

function applyTheme(theme) {
    document.body.classList.remove('gold-theme', 'blue-theme', 'purple-theme');
    
    if (theme === 'blue') {
        document.body.classList.add('blue-theme');
    } else if (theme === 'purple') {
        document.body.classList.add('purple-theme');
    }
    // gold is default, no need to add class
}

// ==================== Modal Functions ====================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        const modalId = event.target.id;
        closeModal(modalId);
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = 'auto';
    }
});

// ==================== Copy to Clipboard ====================
function copyToClipboard(elementId, button) {
    const element = document.getElementById(elementId);
    if (!element || !button) return;

    const text = element.textContent.trim();
    const showCopySuccess = () => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> تم النسخ!';
        button.style.background = '#28a745';

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    };

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(showCopySuccess).catch(() => {
            fallbackCopy(text, showCopySuccess);
        });
    } else {
        fallbackCopy(text, showCopySuccess);
    }
}

function fallbackCopy(text, onSuccess) {
    const temporaryInput = document.createElement('textarea');
    temporaryInput.value = text;
    temporaryInput.setAttribute('readonly', '');
    temporaryInput.style.position = 'fixed';
    temporaryInput.style.opacity = '0';
    document.body.appendChild(temporaryInput);
    temporaryInput.select();

    const copied = document.execCommand('copy');
    temporaryInput.remove();

    if (copied) onSuccess();
}

// ==================== Form Handling ====================
const serviceForm = document.getElementById('serviceForm');
const whatsappBtn = document.getElementById('whatsappBtn');
const telegramBtn = document.getElementById('telegramBtn');

if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function(e) {
        e.preventDefault();
        sendViaWhatsApp();
    });
}

if (telegramBtn) {
    telegramBtn.addEventListener('click', function(e) {
        e.preventDefault();
        sendViaTelegram();
    });
}

function getFormData() {
    return {
        serviceType: document.getElementById('serviceType').value,
        platformCode: document.getElementById('platformCode').value,
        password: document.getElementById('password').value
    };
}

function validateForm() {
    const serviceType = document.getElementById('serviceType').value;
    const platformCode = document.getElementById('platformCode').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!serviceType || !platformCode || !password) {
        alert('من فضلك اختار نوع الخدمة وأدخل كود المنصة وكلمة المرور');
        return false;
    }
    return true;
}

function buildServiceMessage(data) {
    const serviceNames = {
        javascript: 'JavaScript',
        python: 'Python',
        both: 'Python و JavaScript'
    };

    const message = `
🧩 نوع الخدمة: ${serviceNames[data.serviceType]}

🔐 كود المنصة: ${data.platformCode}

🔑 كلمة المرور: ${data.password}`;

    return message;
}

function sendViaWhatsApp() {
    if (!validateForm()) return;

    const data = getFormData();
    const message = buildServiceMessage(data);
    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/201275055679?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

function sendViaTelegram() {
    if (!validateForm()) return;

    const data = getFormData();
    const message = buildServiceMessage(data);
    const encodedMessage = encodeURIComponent(message);
    
    const telegramURL = `https://t.me/moelzftawy?text=${encodedMessage}`;
    
    window.open(telegramURL, '_blank');
}

// ==================== Smooth Scroll for Navigation ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== Active Navigation Link ====================
window.addEventListener('scroll', function() {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// ==================== Add Active Link Styling ====================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ==================== Input Formatting ====================
// Allow RTL text input
document.querySelectorAll('input, textarea').forEach(input => {
    input.setAttribute('dir', 'rtl');
});

// ==================== Form Reset ====================
function resetForm() {
    if (serviceForm) {
        serviceForm.reset();
    }
}

// ==================== Page Load Animation ====================
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    
    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .certificate-card, .project-card, .service-card').forEach(el => {
        observer.observe(el);
    });
});

// Add animation styles
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(animationStyle);

// ==================== Prevent Form Submission ====================
if (serviceForm) {
    serviceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // The form is handled by WhatsApp/Telegram buttons only
    });
}

// ==================== Accessibility ====================
// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown') {
        window.scrollBy(0, 50);
    } else if (e.key === 'ArrowUp') {
        window.scrollBy(0, -50);
    }
});

// ==================== Console Branding ====================
console.log('%c🇪🇬 Welcome to MO ELZFTAWY Portfolio', 'font-size: 20px; color: #d4af37; font-weight: bold;');
console.log('%cPython & JavaScript Developer', 'font-size: 14px; color: #ffd700;');
console.log('%cFrontend Web Development Specialist', 'font-size: 12px; color: #00d4ff;');
console.log('%cContact: WhatsApp / Telegram / Email', 'font-size: 12px; color: #ff006e;');
