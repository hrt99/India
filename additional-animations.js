// Additional Patriotic Animations and Effects
document.addEventListener('DOMContentLoaded', () => {
  addTextAnimations();
  addCountdownEffects();
  addPatrioticParticles();
  addInteractiveElements();
});

// Animated Text Effects
function addTextAnimations() {
  // Typewriter effect for main title
  const titleElements = document.querySelectorAll('.celebration-text span');
  titleElements.forEach((span, index) => {
    span.style.opacity = '0';
    span.style.transform = 'translateY(20px)';
    span.style.transition = 'all 0.6s ease';
    
    setTimeout(() => {
      span.style.opacity = '1';
      span.style.transform = 'translateY(0)';
    }, index * 500 + 1000);
  });
  
  // Glowing text effect
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    title.addEventListener('mouseenter', () => {
      title.style.textShadow = '0 0 20px #ff9933, 0 0 30px #ffd700';
      title.style.transform = 'scale(1.05)';
    });
    
    title.addEventListener('mouseleave', () => {
      title.style.textShadow = '';
      title.style.transform = 'scale(1)';
    });
  });
}

// Enhanced Countdown Effects
function addCountdownEffects() {
  const countdownItems = document.querySelectorAll('.countdown-item');
  
  countdownItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.1) rotateY(10deg)';
      item.style.background = 'rgba(255,255,255,0.2)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1) rotateY(0deg)';
      item.style.background = 'rgba(255,255,255,0.1)';
    });
  });
  
  // Pulsing effect for countdown numbers
  setInterval(() => {
    countdownItems.forEach((item, index) => {
      setTimeout(() => {
        const number = item.querySelector('.countdown-number');
        if (number) {
          number.style.transform = 'scale(1.2)';
          number.style.color = '#ffd700';
          setTimeout(() => {
            number.style.transform = 'scale(1)';
            number.style.color = '';
          }, 200);
        }
      }, index * 100);
    });
  }, 5000);
}

// Patriotic Particles System
function addPatrioticParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'patriotic-particles';
  particleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  `;
  document.body.appendChild(particleContainer);
  
  // Create floating patriotic symbols
  const symbols = ['🇮🇳', '⭐', '🏆', '🎖️', '🕊️'];
  
  setInterval(() => {
    const particle = document.createElement('div');
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    particle.innerHTML = symbol;
    particle.style.cssText = `
      position: absolute;
      font-size: ${Math.random() * 20 + 15}px;
      left: ${Math.random() * 100}%;
      top: 100%;
      opacity: 0.6;
      animation: floatUp ${Math.random() * 10 + 15}s linear forwards;
      pointer-events: none;
    `;
    
    particleContainer.appendChild(particle);
    
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 25000);
  }, 8000);
}

// Interactive Elements
function addInteractiveElements() {
  // Flag ripple effect on click
  const flag = document.querySelector('.indian-flag');
  if (flag) {
    flag.addEventListener('click', () => {
      flag.style.animation = 'none';
      setTimeout(() => {
        flag.style.animation = 'flagWave 0.3s ease-in-out 5';
      }, 10);
      
      // Create ripple effect
      createRipple(event, flag);
    });
  }
  
  // Gallery image zoom
  const galleryImages = document.querySelectorAll('.gallery-item img');
  galleryImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.1) rotate(2deg)';
      img.style.filter = 'brightness(1.2) saturate(1.3)';
    });
    
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1) rotate(0deg)';
      img.style.filter = '';
    });
  });
  
  // Achievement items bounce
  const achievements = document.querySelectorAll('.achievement-item');
  achievements.forEach((item, index) => {
    setTimeout(() => {
      item.style.animation = 'bounceIn 0.6s ease-out';
    }, index * 200);
  });
}

// Ripple Effect
function createRipple(event, element) {
  const ripple = document.createElement('div');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: radial-gradient(circle, rgba(255,153,51,0.6) 0%, transparent 70%);
    border-radius: 50%;
    transform: scale(0);
    animation: rippleEffect 0.6s ease-out;
    pointer-events: none;
    z-index: 10;
  `;
  
  element.style.position = 'relative';
  element.appendChild(ripple);
  
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 600);
}

// Add additional CSS animations
const additionalStyles = `
@keyframes floatUp {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes rippleEffect {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0.3) translateY(50px);
    opacity: 0;
  }
  50% {
    transform: scale(1.05) translateY(-10px);
    opacity: 0.8;
  }
  70% {
    transform: scale(0.9) translateY(5px);
    opacity: 0.9;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

/* Enhanced transitions */
.section-title {
  transition: all 0.3s ease;
}

.countdown-item {
  transition: all 0.3s ease;
}

.gallery-item img {
  transition: all 0.4s ease;
}

/* Glowing borders */
.certificate-section:hover {
  box-shadow: 0 0 30px rgba(255, 153, 51, 0.3);
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255,153,51,0.1) 50%, transparent 70%);
  animation: shimmer 3s ease-in-out infinite;
  pointer-events: none;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
`;

const additionalStyleSheet = document.createElement('style');
additionalStyleSheet.textContent = additionalStyles;
document.head.appendChild(additionalStyleSheet);