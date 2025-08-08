// Defense Carousel Functionality
let currentDefenseSlide = 0;
const defenseSlides = document.querySelectorAll('.defense-carousel .photo-card');
const totalDefenseSlides = defenseSlides.length;

function showDefenseSlide(n) {
  const carousel = document.querySelector('.carousel-container');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  
  if (n >= totalDefenseSlides) currentDefenseSlide = 0;
  if (n < 0) currentDefenseSlide = totalDefenseSlides - 1;
  
  carousel.style.transform = `translateX(-${currentDefenseSlide * 100}%)`;
  
  // Update dots
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[currentDefenseSlide]) {
    dots[currentDefenseSlide].classList.add('active');
  }
}

function moveCarousel(direction) {
  currentDefenseSlide += direction;
  showDefenseSlide(currentDefenseSlide);
}

function currentSlideDefense(n) {
  currentDefenseSlide = n - 1;
  showDefenseSlide(currentDefenseSlide);
}

// Auto-advance carousel
setInterval(() => {
  currentDefenseSlide++;
  showDefenseSlide(currentDefenseSlide);
}, 5000);

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
  showDefenseSlide(0);
});

// Enhanced sharing functions with tracking
function shareOnWhatsApp() {
  const text = "🇮🇳 Celebrating 78 years of Indian Independence! Join me in honoring our freedom fighters and our incredible nation. Jai Hind! 🇮🇳";
  const url = window.location.href;
  window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
  shareWithTracking('whatsapp');
}

function shareOnFacebook() {
  const url = window.location.href;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  shareWithTracking('facebook');
}

function shareOnTwitter() {
  const text = "🇮🇳 Celebrating 78 years of Indian Independence! #IndependenceDay2025 #JaiHind #ProudIndian";
  const url = window.location.href;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  shareWithTracking('twitter');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert('🔗 Link copied to clipboard! Share it with your friends and family.');
    shareWithTracking('copy');
  });
}

// Smooth scrolling for navigation
function smoothScroll(targetId) {
  document.getElementById(targetId).scrollIntoView({
    behavior: 'smooth'
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.timeline-item, .heritage-category, .state-card, .achievement-category');
  animateElements.forEach(el => observer.observe(el));
});