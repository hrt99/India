// Simple Working Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section:not(.hero-section)');
  
  // Set initial state - sections start hidden below
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.6s ease-out';
  });
  
  // Intersection observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Section entering viewport - slide up and fade in
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      } else {
        // Section leaving viewport
        if (entry.boundingClientRect.top < 0) {
          // Section scrolled past (going down) - slide up and fade out
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(-50px)';
        } else {
          // Section below viewport (going up) - slide down and fade out
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(50px)';
        }
      }
    });
  }, {
    threshold: 0.2
  });
  
  sections.forEach(section => observer.observe(section));
});