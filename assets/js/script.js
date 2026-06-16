/* ============================================================
   MDJ Landing Page — Script
   Handles: i18n (FR/EN), mobile menu, dynamic date/year
   ============================================================ */

'use strict';

// ---------- Translations ----------
const TRANSLATIONS = {
  fr: {
    'nav.features':        'Fonctionnalités',
    'nav.about':           'À propos',
    'nav.download':        'Télécharger',

    'hero.badge':          'Méditation quotidienne',
    'hero.title':          'Commencez chaque journée avec <span class="gradient-text">sagesse et paix</span>',
    'hero.subtitle':       'MDJ vous apporte une méditation spirituelle chaque matin, directement sur votre téléphone. Nourrissez votre âme, chaque jour.',
    'hero.cta_primary':    'Télécharger gratuitement',
    'hero.cta_secondary':  'Découvrir →',
    'hero.note':           'Gratuit · iOS & Android · ECMHA',

    'stats.messages':  'Méditations / an',
    'stats.languages': 'Langues',
    'stats.free':      'Gratuit',
    'stats.platforms': 'Plateformes',

    'features.tag':   'Fonctionnalités',
    'features.title': 'Tout ce qu\'il vous faut pour votre croissance spirituelle',

    'features.daily.title':    'Méditation quotidienne',
    'features.daily.desc':     'Un nouveau message spirituel chaque jour, soigneusement préparé par les pasteurs de l\'ECMHA.',
    'features.notif.title':    'Notifications push',
    'features.notif.desc':     'Recevez chaque matin un rappel pour commencer votre journée dans la prière et la méditation.',
    'features.archive.title':  'Archive des messages',
    'features.archive.desc':   'Retrouvez et relisez les méditations passées à tout moment, même sans connexion internet.',
    'features.bilingual.title':'Bilingue FR / EN',
    'features.bilingual.desc': 'L\'application est disponible en français et en anglais pour toucher toute la communauté.',
    'features.free.title':     '100% gratuit',
    'features.free.desc':      'Aucun abonnement, aucune publicité. MDJ est un service offert librement par l\'ECMHA.',
    'features.feedback.title': 'Partagez vos suggestions',
    'features.feedback.desc':  'Envoyez vos remarques et encouragements directement à l\'équipe pastorale depuis l\'application.',

    'about.tag':   'À propos',
    'about.title': 'Une initiative pastorale de l\'ECMHA',
    'about.p1':    'L\'<strong>Eglise du Christ · Mission Harris (ECMHA)</strong> a développé MDJ pour permettre à sa communauté de rester connectée à la Parole de Dieu, où qu\'elle se trouve.',
    'about.p2':    'Chaque jour, nos pasteurs préparent un message spirituel enrichissant, accompagné d\'un verset biblique et d\'une réflexion approfondie — le tout livré directement dans votre poche.',
    'about.val1':  'Fondé sur la Parole',
    'about.val2':  'Porté par la communauté',
    'about.val3':  'Offert avec amour',

    'about.card1.title': 'Message du jour',
    'about.card1.body':  'Jean 3:16 — Car Dieu a tant aimé le monde...',
    'about.card2.title': 'Nouvelle journée',
    'about.card2.body':  'Commencez avec intention et foi.',

    'mock.tag':     'Méditation du jour',
    'mock.verse_ref': 'Jean 15:5',
    'mock.verse':   '« Je suis le cep, vous êtes les sarments. »',
    'mock.content': 'Demeurez en moi et je demeurerai en vous...',
    'mock.notif':   'Nouvelle méditation disponible',

    'download.title':      'Prêt à commencer ?',
    'download.subtitle':   'Téléchargez MDJ gratuitement et rejoignez des milliers de croyants qui commencent leur journée dans la Parole.',
    'download.appstore_sub':'Disponible sur',
    'download.google_sub':  'Disponible sur',
    'download.note':        'Gratuit · Aucune carte requise · Aucune publicité',

    'footer.tagline': 'Méditation du Jour — ECMHA',
    'footer.rights':  'Tous droits réservés',
    'footer.cgu':     'CGU',
    'footer.privacy': 'Confidentialité',
    'footer.branco':  'Brankoo Studio',
  },

  en: {
    'nav.features':        'Features',
    'nav.about':           'About',
    'nav.download':        'Download',

    'hero.badge':          'Daily Meditation',
    'hero.title':          'Start every day with <span class="gradient-text">wisdom and peace</span>',
    'hero.subtitle':       'MDJ brings you a spiritual meditation every morning, straight to your phone. Feed your soul, every single day.',
    'hero.cta_primary':    'Download for free',
    'hero.cta_secondary':  'Discover →',
    'hero.note':           'Free · iOS & Android · ECMHA',

    'stats.messages':  'Meditations / year',
    'stats.languages': 'Languages',
    'stats.free':      'Free',
    'stats.platforms': 'Platforms',

    'features.tag':   'Features',
    'features.title': 'Everything you need for your spiritual growth',

    'features.daily.title':    'Daily Meditation',
    'features.daily.desc':     'A new spiritual message every day, carefully prepared by ECMHA\'s pastors.',
    'features.notif.title':    'Push Notifications',
    'features.notif.desc':     'Receive a morning reminder every day to start your day in prayer and meditation.',
    'features.archive.title':  'Message Archive',
    'features.archive.desc':   'Find and re-read past meditations at any time, even without an internet connection.',
    'features.bilingual.title':'Bilingual FR / EN',
    'features.bilingual.desc': 'The app is available in French and English to reach the whole community.',
    'features.free.title':     '100% Free',
    'features.free.desc':      'No subscription, no ads. MDJ is a service freely offered by ECMHA.',
    'features.feedback.title': 'Share Your Thoughts',
    'features.feedback.desc':  'Send your feedback and encouragements directly to the pastoral team from within the app.',

    'about.tag':   'About',
    'about.title': 'A pastoral initiative by ECMHA',
    'about.p1':    '<strong>Eglise du Christ · Mission Harris (ECMHA)</strong> built MDJ to help its community stay connected to the Word of God, wherever they are.',
    'about.p2':    'Every day, our pastors prepare an enriching spiritual message, paired with a Bible verse and a deep reflection — delivered straight to your pocket.',
    'about.val1':  'Rooted in the Word',
    'about.val2':  'Carried by the community',
    'about.val3':  'Offered with love',

    'about.card1.title': 'Message of the Day',
    'about.card1.body':  'John 3:16 — For God so loved the world...',
    'about.card2.title': 'A New Day',
    'about.card2.body':  'Begin with intention and faith.',

    'mock.tag':       'Meditation of the Day',
    'mock.verse_ref': 'John 15:5',
    'mock.verse':     '"I am the vine; you are the branches."',
    'mock.content':   'Abide in me and I will abide in you...',
    'mock.notif':     'New meditation available',

    'download.title':       'Ready to begin?',
    'download.subtitle':    'Download MDJ for free and join thousands of believers who start their day in the Word.',
    'download.appstore_sub':'Available on the',
    'download.google_sub':  'Get it on',
    'download.note':        'Free · No card required · No ads',

    'footer.tagline': 'Meditation of the Day — ECMHA',
    'footer.rights':  'All rights reserved',
    'footer.cgu':     'Terms of Use',
    'footer.privacy': 'Privacy Policy',
    'footer.branco':  'Brankoo Studio',
  },
};

// ---------- i18n ----------
let currentLang = localStorage.getItem('mdj_landing_lang') || 'fr';

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.documentElement.lang = lang;

  // Update toggle button
  const flag  = document.getElementById('langFlag');
  const label = document.getElementById('langLabel');
  if (lang === 'fr') {
    flag.textContent  = '🇬🇧';
    label.textContent = 'EN';
  } else {
    flag.textContent  = '🇫🇷';
    label.textContent = 'FR';
  }

  // Update mock date
  updateMockDate(lang);
}

function toggleLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('mdj_landing_lang', currentLang);
  applyTranslations(currentLang);
}

// ---------- Mock date ----------
function updateMockDate(lang) {
  const el = document.getElementById('mockDate');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
    weekday: 'long',
    day:     'numeric',
    month:   'long',
    year:    'numeric',
  });
}

// ---------- Mobile menu ----------
function initMobileMenu() {
  const burger     = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ---------- Scroll-reveal ----------
function initReveal() {
  const cards = document.querySelectorAll('.feature-card, .about__card, .stat');
  if (!('IntersectionObserver' in window)) return;

  cards.forEach(el => {
    el.style.opacity  = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity  = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(el => observer.observe(el));
}

// ---------- Footer year ----------
function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initMobileMenu();
  initReveal();
  applyTranslations(currentLang);

  document.getElementById('langToggle').addEventListener('click', toggleLang);
});
