// Mouse Trail Effects and Enhanced Animations
document.addEventListener('DOMContentLoaded', () => {
  createMouseTrail();
  addScrollAnimations();
  addHoverEffects();
  addPatrioticCursor();
});

// Tricolor Mouse Trail
function createMouseTrail() {
  const colors = ['#ff9933', '#ffffff', '#138808'];
  let lastTime = 0;
  
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime < 50) return; // Throttle
    lastTime = now;
    
    // Create single tricolor sparkle
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
      position: fixed;
      font-size: 12px;
      pointer-events: none;
      z-index: 9999;
      left: ${e.clientX - 6}px;
      top: ${e.clientY - 6}px;
      animation: sparkleTrail 1s ease-out forwards;
      filter: hue-rotate(${Math.random() * 360}deg);
    `;
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle);
      }
    }, 1000);
  });
}

// Simple patriotic cursor enhancement
function addPatrioticCursor() {
  document.body.style.cursor = 'pointer';
}

// Enhanced Scroll Animations
function addScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });
  
  // Animate sections on scroll
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
  });
}

// Hover Effects
function addHoverEffects() {
  // Flag wave on hover
  const flag = document.querySelector('.indian-flag');
  if (flag) {
    flag.addEventListener('mouseenter', () => {
      flag.style.animation = 'flagWave 0.5s ease-in-out 3';
    });
  }
  
  // Button pulse effects
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.05)';
      btn.style.boxShadow = '0 10px 30px rgba(255, 153, 51, 0.4)';
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
      btn.style.boxShadow = '';
    });
  });
  
  // Card tilt effects
  document.querySelectorAll('.hero-card, .achievement-item, .value-item').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
}

// Add CSS for animations
const animationStyles = `
@keyframes sparkleTrail {
  0% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.3) rotate(180deg) translateY(-15px);
  }
}

.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.hero-card, .achievement-item, .value-item {
  transition: transform 0.3s ease;
}

button {
  transition: all 0.3s ease;
}

/* Floating elements enhancement */
.floating-elements {
  animation: floatContainer 20s linear infinite;
}

@keyframes floatContainer {
  0% { transform: translateX(0); }
  100% { transform: translateX(50px); }
}

/* Enhanced background */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 153, 51, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(19, 136, 8, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(0, 0, 128, 0.05) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}

/* Sparkle effect */
.sparkle {
  position: fixed;
  width: 4px;
  height: 4px;
  background: #ffd700;
  border-radius: 50%;
  pointer-events: none;
  animation: sparkleAnim 2s ease-out forwards;
  z-index: 1000;
}

@keyframes sparkleAnim {
  0% {
    opacity: 1;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: scale(0) rotate(360deg);
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Random sparkles
setInterval(() => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.top = Math.random() * window.innerHeight + 'px';
  document.body.appendChild(sparkle);
  
  setTimeout(() => {
    if (sparkle.parentNode) {
      sparkle.parentNode.removeChild(sparkle);
    }
  }, 2000);
}, 3000);