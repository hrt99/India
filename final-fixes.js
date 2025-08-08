// Final Fixes - Sliding Gallery + Remove Stars + Fix Scroll
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Remove background stars
  const floatingElements = document.querySelector('.floating-elements');
  if (floatingElements) {
    floatingElements.style.display = 'none';
  }
  
  // 2. Sliding Gallery
  const gallery = document.querySelector('.video-gallery');
  const videoItems = document.querySelectorAll('.video-item');
  const videoTitle = document.getElementById('videoTitle');
  const videoDesc = document.getElementById('videoDesc');
  let currentIndex = 0;

  function slideGallery() {
    videoItems.forEach((item, index) => {
      const offset = (index - currentIndex) * 320; // 300px + 20px margin
      item.style.transform = `translateX(${offset}px)`;
      
      // Show 3 images at once, fade others
      if (index >= currentIndex && index < currentIndex + 3) {
        item.style.opacity = '1';
      } else {
        item.style.opacity = '0.3';
      }
    });
    
    // Update text
    if (videoItems[currentIndex]) {
      videoTitle.textContent = videoItems[currentIndex].dataset.title;
      videoDesc.textContent = videoItems[currentIndex].dataset.desc;
    }
  }

  // Auto-slide every 3 seconds
  if (videoItems.length > 0) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % videoItems.length;
      slideGallery();
    }, 3000);
    
    slideGallery(); // Initial slide
  }
  
  // 3. Simple scroll animations that work
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      } else {
        entry.target.style.opacity = '0.7';
        entry.target.style.transform = 'translateY(20px)';
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(section => {
    section.style.transition = 'all 0.5s ease';
    observer.observe(section);
  });
});