// =========================================
// SMAPEC - Main JavaScript
// =========================================

/* === NAVBAR SCROLL === */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

// Hamburger toggle
hamburger?.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinks?.classList.toggle('open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navLinks?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* === HERO SLIDER === */
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-slide-dots .dot');
let currentSlide = 0;
let heroTimer;

function goToSlide(n) {
  heroSlides[currentSlide]?.classList.remove('active');
  heroDots[currentSlide]?.classList.remove('active');
  currentSlide = (n + heroSlides.length) % heroSlides.length;
  heroSlides[currentSlide]?.classList.add('active');
  heroDots[currentSlide]?.classList.add('active');
}

function startHeroAuto() {
  heroTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

heroDots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(heroTimer);
    goToSlide(parseInt(dot.dataset.slide));
    startHeroAuto();
  });
});

if (heroSlides.length > 0) startHeroAuto();

/* === FADE IN SCROLL === */
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
fadeEls.forEach(el => observer.observe(el));

/* === AUTO FADE-IN ON ALL SECTIONS === */
function initScrollAnimations() {
  const animatables = document.querySelectorAll(
    '.cat-card, .feature-item, .why-item, .gallery-item, .testimonial-card, .footer-col, .why-content, .section-header'
  );
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 80 * (entry.target.dataset.delay || 0));
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatables.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${(i % 4) * 0.1}s, transform 0.6s ease ${(i % 4) * 0.1}s`;
    obs.observe(el);
  });
}
initScrollAnimations();

/* === LIGHTBOX === */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const src = item.dataset.src || item.querySelector('img')?.src;
    if (src && lightboxImg && lightbox) {
      lightboxImg.src = src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });
});

function closeLightbox() {
  lightbox?.classList.remove('open');
  document.body.style.overflow = '';
}

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* === VCARD DOWNLOAD === */
function downloadVCard() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Baye Sylla
ORG:SMAPEC (Super Métal Aluminium)
TITLE:Directeur Général
TEL;TYPE=CELL,VOICE,PREF:+221777044672
TEL;TYPE=WA,VOICE:+221777044672
EMAIL;TYPE=WORK:smapecalu@gmail.com
URL:http://www.smapecalu.com
ADR;TYPE=WORK:;;Dakar;Dakar;;;Sénégal
NOTE:Passion Energie Courage. L'expert en métal et aluminium.
PHOTO;VALUE=URI:https://res.cloudinary.com/dpw81ymi6/image/upload/v1789754194/photo_2026-09-18_17-21-10_y68vpz.jpg
END:VCARD`;
  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.setAttribute('download', 'Contact_Baye_Sylla_SMAPEC.vcf');
  document.body.appendChild(link);
  link.click();
  setTimeout(() => { document.body.removeChild(link); window.URL.revokeObjectURL(url); }, 100);
}

/* === CONTACT FORM === */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    btn.disabled = true;

    // Simulate success (no backend yet)
    setTimeout(() => {
      const successMsg = document.getElementById('formSuccess');
      if (successMsg) {
        successMsg.style.display = 'block';
        contactForm.reset();
      }
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 1500);
  });
}

/* === CATALOGUE FILTER === */
function filterProducts(cat) {
  const cards = document.querySelectorAll('.product-card');
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-filter="${cat}"]`)?.classList.add('active');
  cards.forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

/* === URL PARAMS for catalogue === */
const urlParams = new URLSearchParams(window.location.search);
const catParam = urlParams.get('cat');
if (catParam && typeof filterProducts === 'function') {
  window.addEventListener('load', () => filterProducts(catParam));
}

/* === SMOOTH SCROLL for anchor links === */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
