// Video-like Gallery Animation
document.addEventListener('DOMContentLoaded', () => {
  const videoItems = document.querySelectorAll('.video-item');
  const videoTitle = document.getElementById('videoTitle');
  const videoDesc = document.getElementById('videoDesc');
  let currentIndex = 0;
  let autoPlayInterval;

  // Auto-play like a video
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % videoItems.length;
      showVideoItem(currentIndex);
    }, 2000); // Change every 2 seconds
  }

  function showVideoItem(index) {
    // Remove active class from all
    videoItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to current
    videoItems[index].classList.add('active');
    
    // Update info
    const item = videoItems[index];
    videoTitle.textContent = item.dataset.title;
    videoDesc.textContent = item.dataset.desc;
    
    // Fade effect for text
    videoTitle.style.opacity = '0';
    videoDesc.style.opacity = '0';
    
    setTimeout(() => {
      videoTitle.style.opacity = '1';
      videoDesc.style.opacity = '1';
    }, 200);
  }

  // Click to select
  videoItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      showVideoItem(index);
      
      // Restart auto-play
      clearInterval(autoPlayInterval);
      setTimeout(startAutoPlay, 3000);
    });
  });

  // Start auto-play
  startAutoPlay();
  
  // Pause on hover
  const gallery = document.querySelector('.video-gallery');
  gallery.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
  });
  
  gallery.addEventListener('mouseleave', () => {
    startAutoPlay();
  });
});