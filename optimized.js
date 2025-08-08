// Optimized Gallery - No Hanging
document.addEventListener('DOMContentLoaded', () => {
  const videoItems = document.querySelectorAll('.video-item');
  const videoTitle = document.getElementById('videoTitle');
  const videoDesc = document.getElementById('videoDesc');
  let currentIndex = 0;

  function updateGallery() {
    videoItems.forEach((item, index) => {
      item.classList.remove('center', 'side', 'hidden');
      
      if (index === currentIndex) {
        item.classList.add('center');
      } else if (Math.abs(index - currentIndex) === 1 || 
                (currentIndex === 0 && index === videoItems.length - 1) ||
                (currentIndex === videoItems.length - 1 && index === 0)) {
        item.classList.add('side');
      } else {
        item.classList.add('hidden');
      }
    });

    // Update text
    if (videoItems[currentIndex]) {
      videoTitle.textContent = videoItems[currentIndex].dataset.title;
      videoDesc.textContent = videoItems[currentIndex].dataset.desc;
    }
  }

  // Auto-slide every 4 seconds
  if (videoItems.length > 0) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % videoItems.length;
      updateGallery();
    }, 4000);
    
    updateGallery();
  }

  // Click to select
  videoItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      updateGallery();
    });
  });
});