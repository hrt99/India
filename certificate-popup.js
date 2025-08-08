// Certificate Popup and Audio Control
document.addEventListener('DOMContentLoaded', () => {
  // Show certificate popup after 10 seconds
  setTimeout(() => {
    showCertificatePopup();
  }, 10000);
  
  // Audio control - play after 10 seconds, max 2 times
  setTimeout(() => {
    playAudioControlled();
  }, 10000);
});

function showCertificatePopup() {
  const popup = document.createElement('div');
  popup.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px; animation: popupFadeIn 0.5s ease-out;">
      <div style="background: linear-gradient(135deg, #ff9933 0%, #ffd700 50%, #ff9933 100%); padding: 35px; border-radius: 25px; max-width: 450px; width: 100%; text-align: center; color: white; box-shadow: 0 25px 50px rgba(255,153,51,0.4); border: 3px solid rgba(255,255,255,0.3); animation: popupBounce 0.6s ease-out; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent); animation: shimmer 2s ease-in-out infinite;"></div>
        <div style="position: relative; z-index: 2;">
          <div style="font-size: 4rem; margin-bottom: 10px; animation: bounce 1s ease-in-out infinite;">🇮🇳</div>
          <div style="font-size: 2rem; margin-bottom: 15px; animation: pulse 1.5s ease-in-out infinite;">🏆</div>
          <h3 style="margin: 0 0 10px 0; font-size: 1.6rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); animation: glow 2s ease-in-out infinite;">Get Your Certificate of Patriotism!</h3>
          <p style="margin: 0 0 25px 0; font-size: 1.1rem; opacity: 0.95; line-height: 1.4;">Join <strong>12,394+ proud Indians</strong> who have already created their personalized certificates! Show your love for our great nation 🇮🇳</p>
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <button onclick="goToCertificate(); this.parentElement.parentElement.parentElement.parentElement.remove();" style="background: linear-gradient(135deg, #138808, #16a34a); color: white; border: none; padding: 15px 25px; border-radius: 12px; cursor: pointer; font-weight: 700; font-size: 1.1rem; box-shadow: 0 8px 20px rgba(19,136,8,0.3); transition: all 0.3s ease; animation: buttonPulse 2s ease-in-out infinite;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">📜 Create My Certificate</button>
            <button onclick="this.parentElement.parentElement.parentElement.parentElement.remove();" style="background: rgba(255,255,255,0.2); color: white; border: 2px solid rgba(255,255,255,0.5); padding: 15px 25px; border-radius: 12px; cursor: pointer; font-weight: 600; transition: all 0.3s ease;" onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">Maybe Later</button>
          </div>
          <div style="margin-top: 20px; font-size: 0.9rem; opacity: 0.8;">
            ✨ <strong>FREE</strong> • 📱 <strong>Mobile Friendly</strong> • 📤 <strong>Easy to Share</strong> ✨
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes popupFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes popupBounce {
      0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
      50% { transform: scale(1.05) rotate(2deg); }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
      100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
    @keyframes glow {
      0%, 100% { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
      50% { text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.5); }
    }
    @keyframes buttonPulse {
      0%, 100% { box-shadow: 0 8px 20px rgba(19,136,8,0.3); }
      50% { box-shadow: 0 12px 30px rgba(19,136,8,0.5); }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(popup);
}

function goToCertificate() {
  document.getElementById('certificate').scrollIntoView({ behavior: 'smooth' });
}

function playAudioControlled() {
  // Check play count (max 2 times)
  let playCount = parseInt(localStorage.getItem('audioPlayCount') || '0');
  if (playCount >= 2) return;
  
  const jetSound = document.getElementById('jetSound');
  const nationalAnthem = document.getElementById('nationalAnthem');
  const bgMusic = document.getElementById('bgMusic');
  
  // Set volumes
  if (jetSound) jetSound.volume = 0.08;
  if (nationalAnthem) nationalAnthem.volume = 0.12;
  if (bgMusic) bgMusic.volume = 0.06;
  
  // Play sequence only if not muted
  if (!window.musicMuted) {
    if (jetSound) {
      jetSound.play().catch(() => {});
      
      setTimeout(() => {
        if (nationalAnthem && !window.musicMuted) {
          nationalAnthem.play().catch(() => {});
          
          setTimeout(() => {
            if (bgMusic && !window.musicMuted) {
              bgMusic.play().catch(() => {});
            }
          }, 3000);
        }
      }, 2000);
    }
  }
  
  // Increment play count
  localStorage.setItem('audioPlayCount', (playCount + 1).toString());
}

// Make function global
window.goToCertificate = goToCertificate;