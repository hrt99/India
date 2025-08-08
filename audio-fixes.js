// Audio Control System
window.musicMuted = false;
window.audioReady = false;

// Initialize audio controls
document.addEventListener('DOMContentLoaded', () => {
  const musicToggle = document.getElementById('musicToggle');
  const jetSound = document.getElementById('jetSound');
  const nationalAnthem = document.getElementById('nationalAnthem');
  const bgMusic = document.getElementById('bgMusic');
  
  // Set volumes
  if (jetSound) jetSound.volume = 0.08;
  if (nationalAnthem) nationalAnthem.volume = 0.12;
  if (bgMusic) {
    bgMusic.volume = 0.06;
    bgMusic.loop = true;
  }
  
  // Music toggle functionality
  if (musicToggle) {
    musicToggle.addEventListener('click', () => {
      window.musicMuted = !window.musicMuted;
      
      if (window.musicMuted) {
        // Mute all audio
        if (jetSound) jetSound.pause();
        if (nationalAnthem) nationalAnthem.pause();
        if (bgMusic) bgMusic.pause();
        musicToggle.innerHTML = '<span class="music-icon">🔇</span>';
      } else {
        // Unmute and play background music if page is ready
        if (window.audioReady && bgMusic) {
          bgMusic.play().catch(() => {});
        }
        musicToggle.innerHTML = '<span class="music-icon">🎵</span>';
      }
    });
  }
});

// Enhanced audio sequence after page transition
function startAudioSequence() {
  if (window.musicMuted) return;
  
  const jetSound = document.getElementById('jetSound');
  const nationalAnthem = document.getElementById('nationalAnthem');
  const bgMusic = document.getElementById('bgMusic');
  
  setTimeout(() => {
    if (jetSound && !window.musicMuted) {
      jetSound.play().catch(() => {});
    }
    
    setTimeout(() => {
      if (nationalAnthem && !window.musicMuted) {
        nationalAnthem.play().catch(() => {});
      }
      
      setTimeout(() => {
        if (bgMusic && !window.musicMuted) {
          bgMusic.play().catch(() => {});
        }
      }, 3000);
    }, 2000);
  }, 1000);
  
  window.audioReady = true;
}