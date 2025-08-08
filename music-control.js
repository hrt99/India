// Music Control - Play 2 times after certificate generation
let musicPlayCount = 0;
let certificateGenerated = false;
let musicPlaying = false;

document.addEventListener('DOMContentLoaded', function() {
  const bgMusic = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');
  
  if (bgMusic && musicToggle) {
    // Music ended event
    bgMusic.addEventListener('ended', function() {
      if (certificateGenerated && musicPlayCount < 2) {
        musicPlayCount++;
        bgMusic.currentTime = 0;
        bgMusic.play();
      } else {
        musicPlaying = false;
        musicToggle.classList.remove('playing');
        musicToggle.innerHTML = '<span class="music-icon">🎵</span>';
      }
    });
    
    // Music toggle button
    musicToggle.addEventListener('click', function() {
      if (bgMusic.paused && !musicPlaying) {
        bgMusic.play();
        musicPlaying = true;
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<span class="music-icon">⏸️</span>';
      } else {
        bgMusic.pause();
        musicPlaying = false;
        musicToggle.classList.remove('playing');
        musicToggle.innerHTML = '<span class="music-icon">🎵</span>';
      }
    });
  }
});

// Function to trigger music after certificate generation
function playCertificateMusic() {
  const bgMusic = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');
  const musicControl = document.getElementById('musicControl');
  
  if (bgMusic) {
    certificateGenerated = true;
    musicPlayCount = 0;
    
    // Show music control
    if (musicControl) {
      musicControl.classList.add('show');
    }
    
    bgMusic.currentTime = 0;
    bgMusic.play();
    musicPlaying = true;
    
    if (musicToggle) {
      musicToggle.classList.add('playing');
      musicToggle.innerHTML = '<span class="music-icon">⏸️</span>';
    }
  }
}