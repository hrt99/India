// Quote Carousel functionality
let currentQuoteSlide = 1;

function currentSlide(n) {
  showSlide(currentQuoteSlide = n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.quote-slide');
  const dots = document.querySelectorAll('.dot');
  
  if (n > slides.length) currentQuoteSlide = 1;
  if (n < 1) currentQuoteSlide = slides.length;
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (slides[currentQuoteSlide - 1]) {
    slides[currentQuoteSlide - 1].classList.add('active');
  }
  if (dots[currentQuoteSlide - 1]) {
    dots[currentQuoteSlide - 1].classList.add('active');
  }
}

// Auto-advance quotes every 4 seconds
function autoAdvanceQuotes() {
  currentQuoteSlide++;
  showSlide(currentQuoteSlide);
}

// Defense Carousel
let currentDefenseSlideNum = 1;

function currentDefenseSlide(n) {
  showDefenseSlide(currentDefenseSlideNum = n);
}

function showDefenseSlide(n) {
  const slides = document.querySelectorAll('.defense-slide');
  const dots = document.querySelectorAll('.defense-dots .dot');
  
  if (n > slides.length) currentDefenseSlideNum = 1;
  if (n < 1) currentDefenseSlideNum = slides.length;
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (slides[currentDefenseSlideNum - 1]) {
    slides[currentDefenseSlideNum - 1].classList.add('active');
  }
  if (dots[currentDefenseSlideNum - 1]) {
    dots[currentDefenseSlideNum - 1].classList.add('active');
  }
}

function autoAdvanceDefense() {
  currentDefenseSlideNum++;
  showDefenseSlide(currentDefenseSlideNum);
}

function changeDefenseSlide(direction) {
  currentDefenseSlideNum += direction;
  showDefenseSlide(currentDefenseSlideNum);
}

// Initialize carousels
document.addEventListener('DOMContentLoaded', () => {
  setInterval(autoAdvanceQuotes, 4000);
  setInterval(autoAdvanceDefense, 5000);
});

// Make functions global
window.currentDefenseSlide = currentDefenseSlide;
window.changeDefenseSlide = changeDefenseSlide;

// Add enhanced CSS for quote carousel and jets
const enhancedStyles = `
/* Quote Carousel */
.quote-carousel {
  position: relative;
  margin-bottom: 20px;
}

.quote-slide {
  display: none;
  animation: fadeIn 0.5s ease-in-out;
}

.quote-slide.active {
  display: block;
}

.quote-dots {
  text-align: center;
  margin-top: 20px;
}

.dot {
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: rgba(255,255,255,0.5);
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active,
.dot:hover {
  background-color: white;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Realistic CSS Jet Design */
.military-jet {
  position: absolute;
  width: 100px;
  height: 40px;
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.4));
}

.jet-body {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Main fuselage */
.fuselage {
  position: absolute;
  width: 70px;
  height: 12px;
  background: linear-gradient(to bottom, #2563eb, #1e40af, #1e3a8a);
  border-radius: 6px;
  top: 14px;
  left: 15px;
  box-shadow: inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3);
}

/* Nose cone */
.nose {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 15px solid #1e40af;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  top: 14px;
  left: 0;
}

/* Cockpit */
.cockpit {
  position: absolute;
  width: 20px;
  height: 8px;
  background: linear-gradient(to bottom, #60a5fa, #3b82f6);
  border-radius: 4px;
  top: 16px;
  left: 25px;
  opacity: 0.8;
}

/* Left wing */
.wing-left {
  position: absolute;
  width: 0;
  height: 0;
  border-right: 25px solid #374151;
  border-top: 8px solid transparent;
  border-bottom: 15px solid transparent;
  top: 8px;
  left: 35px;
  transform: skewX(-10deg);
}

/* Right wing */
.wing-right {
  position: absolute;
  width: 0;
  height: 0;
  border-right: 25px solid #374151;
  border-top: 15px solid transparent;
  border-bottom: 8px solid transparent;
  top: 17px;
  left: 35px;
  transform: skewX(10deg);
}

/* Main tail */
.tail-main {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 12px solid #374151;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  top: 14px;
  right: 0;
}

/* Tail fin */
.tail-fin {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 8px solid #374151;
  border-bottom: 12px solid transparent;
  top: 2px;
  right: 5px;
}

/* Engine exhaust */
.engine {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #ef4444, #dc2626);
  border-radius: 50%;
  top: 18px;
  right: 2px;
  box-shadow: 0 0 8px #ef4444;
}

/* Formation positioning */
.jet-1 {
  top: 80px;
  animation: jetFly1 5s ease-in-out forwards;
  z-index: 3;
}

.jet-2 {
  top: 40px;
  animation: jetFly2 5s ease-in-out forwards;
  z-index: 2;
}

.jet-3 {
  top: 120px;
  animation: jetFly3 5s ease-in-out forwards;
  z-index: 2;
}

/* Enhanced trails */
.jet-trail {
  position: absolute;
  top: 50%;
  right: -100px;
  width: 120px;
  height: 6px;
  transform: translateY(-50%);
  border-radius: 3px;
  animation: trailFade 1s ease-out infinite;
  opacity: 0.8;
}

.jet-trail.orange {
  background: linear-gradient(to right, #ff9933, rgba(255, 153, 51, 0));
  box-shadow: 0 0 10px #ff9933;
}

.jet-trail.white {
  background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));
  box-shadow: 0 0 10px #ffffff;
}

.jet-trail.green {
  background: linear-gradient(to right, #138808, rgba(19, 136, 8, 0));
  box-shadow: 0 0 10px #138808;
}

/* Enhanced Achievements Grid */
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}

/* Additional Value Item Colors */
.value-item:nth-child(9) { 
  border-top-color: var(--green); 
}
.value-item:nth-child(10) { 
  border-top-color: var(--orange); 
}
.value-item:nth-child(11) { 
  border-top-color: var(--blue); 
}
`;

// Inject enhanced styles
const styleSheet = document.createElement('style');
styleSheet.textContent = enhancedStyles;
document.head.appendChild(styleSheet);