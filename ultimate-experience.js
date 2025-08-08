// Ultimate Independence Day Experience
class UltimateExperience {
  constructor() {
    this.currentIndex = 0;
    this.videoItems = [];
    this.isAnimating = false;
    this.init();
  }

  init() {
    this.createPatrioticParticles();
    this.setupGallery();
    this.setupAdvancedScrolling();
    this.setupInteractiveElements();
    this.startAutoSlide();
  }

  createPatrioticParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'patriotic-particles';
    document.body.appendChild(particlesContainer);

    // Create 50 floating particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  setupGallery() {
    this.videoItems = document.querySelectorAll('.video-item');
    this.videoTitle = document.getElementById('videoTitle');
    this.videoDesc = document.getElementById('videoDesc');
    
    if (this.videoItems.length === 0) return;
    
    this.updateGalleryPositions();
  }

  updateGalleryPositions() {
    this.videoItems.forEach((item, index) => {
      item.classList.remove('center', 'left', 'right', 'hidden');
      
      if (index === this.currentIndex) {
        // Center item - always fully visible
        item.classList.add('center');
      } else if (index === this.currentIndex - 1 || (this.currentIndex === 0 && index === this.videoItems.length - 1)) {
        // Left item
        item.classList.add('left');
      } else if (index === this.currentIndex + 1 || (this.currentIndex === this.videoItems.length - 1 && index === 0)) {
        // Right item
        item.classList.add('right');
      } else {
        // Hidden items
        item.classList.add('hidden');
      }
    });

    // Update text with smooth transition
    if (this.videoTitle && this.videoDesc) {
      const currentItem = this.videoItems[this.currentIndex];
      this.animateText(currentItem.dataset.title, currentItem.dataset.desc);
    }
  }

  animateText(title, desc) {
    this.videoTitle.style.opacity = '0';
    this.videoDesc.style.opacity = '0';
    
    setTimeout(() => {
      this.videoTitle.textContent = title;
      this.videoDesc.textContent = desc;
      this.videoTitle.style.opacity = '1';
      this.videoDesc.style.opacity = '1';
    }, 300);
  }

  nextSlide() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    
    this.currentIndex = (this.currentIndex + 1) % this.videoItems.length;
    this.updateGalleryPositions();
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 1000);
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  setupAdvancedScrolling() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
          entry.target.style.filter = 'blur(0px)';
        } else {
          entry.target.style.opacity = '0.8';
          entry.target.style.transform = 'translateY(30px) scale(0.98)';
          entry.target.style.filter = 'blur(1px)';
        }
      });
    }, { 
      threshold: 0.2,
      rootMargin: '-50px 0px'
    });
    
    sections.forEach(section => {
      section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      observer.observe(section);
    });
  }

  setupInteractiveElements() {
    // Add click handlers for gallery items
    this.videoItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        if (index !== this.currentIndex && !this.isAnimating) {
          this.currentIndex = index;
          this.updateGalleryPositions();
        }
      });
    });

    // Add hover effects
    this.videoItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        if (!item.classList.contains('center')) {
          item.style.transform += ' scale(1.05)';
        }
      });
      
      item.addEventListener('mouseleave', () => {
        this.updateGalleryPositions();
      });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        this.nextSlide();
      }
    });
  }
}

// Initialize Ultimate Experience
document.addEventListener('DOMContentLoaded', () => {
  new UltimateExperience();
  
  // Add smooth scrolling
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Add loading animation
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }, 2000);
  }
});