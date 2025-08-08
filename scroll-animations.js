// Scroll animations disabled - just progress bar
document.addEventListener('DOMContentLoaded', () => {
  addScrollProgress();
}





function addScrollProgress() {
  // Create progress bar
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background: linear-gradient(90deg, #ff9933, #ffd700, #138808);
    z-index: 10000;
    transition: width 0.1s ease;
    box-shadow: 0 2px 10px rgba(255,153,51,0.3);
  `;
  document.body.appendChild(progressBar);
  
  // Update progress on scroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}

// Add CSS for enhanced animations
const scrollStyles = `
  /* All scroll animations removed */
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Scroll snap removed */
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = scrollStyles;
document.head.appendChild(styleSheet);