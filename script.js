// Enhanced Independence Day Website JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all components
  initPreloader();
  initJetIntro();
  initCountdown();
  initCertificateForm();
  initMusicControl();
  initFloatingElements();
  initScrollAnimations();
  initSocialShare();
});

// Preloader
function initPreloader() {
  const preloader = document.getElementById("preloader");
  
  setTimeout(() => {
    preloader.style.display = "none";
  }, 3000);
}

// Enhanced Jet Intro
function initJetIntro() {
  const jetIntro = document.getElementById("jetIntro");
  const mainContent = document.getElementById("mainContent");
  const jetSound = document.getElementById("jetSound");
  const nationalAnthem = document.getElementById("nationalAnthem");
  const bgMusic = document.getElementById("bgMusic");

  // Audio elements removed

  // Transition to main content
  setTimeout(() => {
    jetIntro.style.opacity = "0";
    jetIntro.style.transition = "opacity 1s ease-out";
    
    setTimeout(() => {
      jetIntro.style.display = "none";
      mainContent.classList.add("show");
      
      // Background music disabled
      
      // Trigger confetti celebration
      triggerCelebrationConfetti();
      
      // Start live stats animation
      animateStats();
    }, 1000);
  }, 5000);
}

// Enhanced Countdown
function initCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let targetDate = new Date(`${currentYear}-08-15T00:00:00`);
    
    // If this year's Independence Day has passed, target next year
    if (now > targetDate) {
      targetDate = new Date(`${currentYear + 1}-08-15T00:00:00`);
    }

    const diff = targetDate - now;

    if (diff <= 0) {
      daysEl.textContent = "000";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      
      // Trigger special celebration
      triggerIndependenceDayConfetti();
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(3, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Certificate Form
function initCertificateForm() {
  const form = document.getElementById("certificateForm");
  const preview = document.getElementById("certificatePreview");
  const downloadBtn = document.getElementById("downloadCertificate");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById("fullName").value.trim();
    const city = document.getElementById("city").value.trim();

    if (!fullName || !city) {
      alert("Please fill in all fields!");
      return;
    }

    // Show loading animation
    const submitBtn = form.querySelector(".generate-btn");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="btn-text">Generating...</span> <span class="btn-icon">⏳</span>';
    submitBtn.disabled = true;

    // Simulate certificate generation
    setTimeout(() => {
      // Trigger confetti
      triggerCertificateConfetti();
      
      // Show preview
      preview.style.display = "block";
      preview.scrollIntoView({ behavior: "smooth" });
      
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      
      // Setup download
      setupCertificateDownload(fullName, city);
    }, 2000);
  });
}

// Setup Certificate Download
function setupCertificateDownload(fullName, city) {
  const downloadBtn = document.getElementById("downloadCertificate");
  
  // Track certificate generation
  if (window.analytics) {
    window.analytics.trackCertificate(fullName, city);
  }
  
  // Setup share button after certificate is generated
  setTimeout(() => {
    const shareBtn = document.getElementById('shareCertificate');
    if (shareBtn) {
      shareBtn.onclick = () => {
        const shareText = `I just received my Certificate of Patriotism! Proud to be Indian! 🇮🇳 #ProudIndian #JaiHind ${window.location.href}`;
        const shareModal = document.createElement('div');
        shareModal.innerHTML = `
          <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;">
            <div style="background: white; padding: 25px; border-radius: 15px; max-width: 350px; width: 100%; text-align: center;">
              <h3 style="margin: 0 0 15px 0; color: #1a202c; font-size: 1.2rem;">📤 Share Certificate</h3>
              <div style="display: flex; gap: 8px; justify-content: center; margin: 15px 0; flex-wrap: wrap;">
                <button onclick="window.open('https://wa.me/?text=${encodeURIComponent(shareText)}', '_blank'); this.parentElement.parentElement.parentElement.remove();" style="background: #25d366; color: white; border: none; padding: 10px 14px; border-radius: 6px; cursor: pointer; font-size: 13px;">💬 WhatsApp</button>
                <button onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}', '_blank'); this.parentElement.parentElement.parentElement.remove();" style="background: #1877f2; color: white; border: none; padding: 10px 14px; border-radius: 6px; cursor: pointer; font-size: 13px;">📘 Facebook</button>
                <button onclick="window.open('https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}', '_blank'); this.parentElement.parentElement.parentElement.remove();" style="background: #1da1f2; color: white; border: none; padding: 10px 14px; border-radius: 6px; cursor: pointer; font-size: 13px;">🐦 Twitter</button>
              </div>
              <button onclick="this.parentElement.parentElement.remove()" style="background: #666; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 13px;">Close</button>
            </div>
          </div>
        `;
        document.body.appendChild(shareModal);
      };
    }
  }, 200);
  
  downloadBtn.onclick = () => {
    // Track download
    if (window.analytics) {
      window.analytics.trackDownload(fullName);
    }
    
    // Generate certificate directly
    generateCertificateImage(fullName, city);
    
    // Sound removed
    
    // Trigger download confetti
    triggerDownloadConfetti();
  };
}

// Generate Certificate as Image
function generateCertificateImage(fullName, city) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size for mobile-friendly certificate
  canvas.width = 800;
  canvas.height = 600;
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#fff8e1');
  gradient.addColorStop(0.5, '#ffffff');
  gradient.addColorStop(1, '#f3e5f5');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Border
  ctx.strokeStyle = '#ff9933';
  ctx.lineWidth = 8;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
  
  // Inner border
  ctx.strokeStyle = '#138808';
  ctx.lineWidth = 4;
  ctx.strokeRect(35, 35, canvas.width - 70, canvas.height - 70);
  
  // Title
  ctx.fillStyle = '#1a202c';
  ctx.font = 'bold 36px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('🇮🇳 CERTIFICATE OF PATRIOTISM 🇮🇳', canvas.width / 2, 120);
  
  // Subtitle
  ctx.font = '20px Arial';
  ctx.fillStyle = '#4a5568';
  ctx.fillText('Republic of India', canvas.width / 2, 160);
  
  // Main text
  ctx.font = '24px Arial';
  ctx.fillStyle = '#2d3748';
  ctx.fillText('This is to certify that', canvas.width / 2, 220);
  
  // Name
  ctx.font = 'bold 32px Arial';
  ctx.fillStyle = '#ff9933';
  ctx.fillText(fullName.toUpperCase(), canvas.width / 2, 280);
  
  // From city
  ctx.font = '20px Arial';
  ctx.fillStyle = '#4a5568';
  ctx.fillText(`from ${city}`, canvas.width / 2, 320);
  
  // Certificate text
  ctx.font = '22px Arial';
  ctx.fillStyle = '#2d3748';
  ctx.fillText('is a proud citizen of India and has demonstrated', canvas.width / 2, 370);
  ctx.fillText('exceptional patriotic spirit and love for our nation', canvas.width / 2, 400);
  
  // Date
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-IN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  ctx.font = '18px Arial';
  ctx.fillStyle = '#666';
  ctx.fillText(`Issued on: ${dateStr}`, canvas.width / 2, 460);
  
  // Motto
  ctx.font = 'italic 20px Arial';
  ctx.fillStyle = '#138808';
  ctx.fillText('"Satyameva Jayate" - Truth Alone Triumphs', canvas.width / 2, 520);
  
  // Signature line
  ctx.font = '16px Arial';
  ctx.fillStyle = '#666';
  ctx.fillText('Independence Day Celebration Committee', canvas.width / 2, 560);
  
  // Store certificate for sharing
  window.certificateCanvas = canvas;
  
  // Download the certificate
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Certificate_${fullName.replace(/\s+/g, '_')}_${city}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 'image/png');
  
  // Add share functionality
  const shareBtn = document.getElementById('shareCertificate');
  if (shareBtn) {
    shareBtn.onclick = () => {
      const shareText = `I just received my Certificate of Patriotism! Proud to be Indian! 🇮🇳 #ProudIndian #JaiHind ${window.location.href}`;
      const shareModal = document.createElement('div');
      shareModal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;">
          <div style="background: white; padding: 30px; border-radius: 15px; max-width: 400px; width: 100%; text-align: center;">
            <h3 style="margin: 0 0 20px 0; color: #1a202c;">📤 Share Your Certificate</h3>
            <div style="display: flex; gap: 10px; justify-content: center; margin: 20px 0; flex-wrap: wrap;">
              <button onclick="window.open('https://wa.me/?text=${encodeURIComponent(shareText)}', '_blank')" style="background: #25d366; color: white; border: none; padding: 12px 16px; border-radius: 8px; cursor: pointer; font-size: 14px;">💬 WhatsApp</button>
              <button onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}', '_blank')" style="background: #1877f2; color: white; border: none; padding: 12px 16px; border-radius: 8px; cursor: pointer; font-size: 14px;">📘 Facebook</button>
              <button onclick="window.open('https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}', '_blank')" style="background: #1da1f2; color: white; border: none; padding: 12px 16px; border-radius: 8px; cursor: pointer; font-size: 14px;">🐦 Twitter</button>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="background: #666; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer;">Close</button>
          </div>
        </div>
      `;
      document.body.appendChild(shareModal);
    };
  }
}

// Music Control Removed
function initMusicControl() {
  // Music functionality removed
}

// Floating Elements Animation
function initFloatingElements() {
  const floatingElements = document.querySelectorAll('.floating-flag, .floating-star, .floating-heart');
  
  floatingElements.forEach((element, index) => {
    const randomTop = Math.random() * 60 + 20;
    element.style.top = randomTop + '%';
    element.style.left = '-100px';
    element.style.animationDelay = (index * 8) + 's';
    element.style.animationDuration = '20s';
  });
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animatedElements = document.querySelectorAll('.achievement-item, .gallery-item, .hero-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Social Share Functions
function initSocialShare() {
  window.shareOnFacebook = () => {
    if (window.analytics) window.analytics.trackShare('facebook');
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("🇮🇳 Celebrating India's Independence Day! Join me in honoring our great nation's freedom and unity. Jai Hind!");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=400');
  };

  window.shareOnTwitter = () => {
    if (window.analytics) window.analytics.trackShare('twitter');
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("🇮🇳 Celebrating India's Independence Day! Join me in honoring our great nation. #IndependenceDay #JaiHind #India");
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
  };

  window.shareOnWhatsApp = () => {
    if (window.analytics) window.analytics.trackShare('whatsapp');
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("🇮🇳 Celebrating India's Independence Day! Check out this amazing tribute to our nation: " + window.location.href);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  window.copyLink = () => {
    if (window.analytics) window.analytics.trackShare('link_copy');
    navigator.clipboard.writeText(window.location.href).then(() => {
      showNotification("Link copied to clipboard! 📋");
    }).catch(() => {
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showNotification("Link copied to clipboard! 📋");
    });
  };
}

// Confetti Functions
function triggerCelebrationConfetti() {
  // Multi-colored confetti burst
  const colors = ['#ff9933', '#ffffff', '#138808', '#000080', '#ffd700'];
  
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: colors
  });

  // Additional bursts
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { x: 0.2, y: 0.7 },
      colors: colors
    });
  }, 300);

  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { x: 0.8, y: 0.7 },
      colors: colors
    });
  }, 600);
}

function triggerCertificateConfetti() {
  const colors = ['#ffd700', '#ff9933', '#138808'];
  
  confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.5 },
    colors: colors,
    shapes: ['star', 'circle']
  });
}

function triggerDownloadConfetti() {
  const colors = ['#ff9933', '#ffffff', '#138808'];
  
  confetti({
    particleCount: 100,
    spread: 50,
    origin: { y: 0.8 },
    colors: colors
  });
}

function triggerIndependenceDayConfetti() {
  // Special Independence Day celebration
  const colors = ['#ff9933', '#ffffff', '#138808', '#000080', '#ffd700'];
  
  // Continuous confetti for 5 seconds
  const duration = 5000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

// Utility Functions
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #ff9933, #ffd700);
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    z-index: 10000;
    font-weight: 600;
    animation: slideIn 0.3s ease-out;
  `;

  // Add slide-in animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => {
      document.body.removeChild(notification);
      document.head.removeChild(style);
    }, 300);
  }, 3000);
}

// Enhanced Gallery Interactions
document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Create modal for full-size image view
      const img = item.querySelector('img');
      const modal = createImageModal(img.src, img.alt);
      document.body.appendChild(modal);
    });
  });
});

function createImageModal(src, alt) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    cursor: pointer;
  `;

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
    box-shadow: 0 10px 50px rgba(0,0,0,0.5);
  `;

  modal.appendChild(img);

  // Close on click
  modal.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  return modal;
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Only trigger shortcuts if not typing in input fields
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    return;
  }
  
  // Music toggle removed
  
  // Press 'C' to scroll to certificate section
  if (e.key.toLowerCase() === 'c') {
    document.querySelector('.certificate-section').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Press 'H' to scroll to top
  if (e.key.toLowerCase() === 'h') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});



// Animate Stats
function animateStats() {
  const stats = {
    visitors: { element: document.getElementById('visitorsCount'), target: 25847, current: 0 },
    certificates: { element: document.getElementById('certificatesCount'), target: 12394, current: 0 },
    shares: { element: document.getElementById('sharesCount'), target: 8756, current: 0 },
    countries: { element: document.getElementById('countriesCount'), target: 47, current: 0 }
  };
  
  Object.values(stats).forEach(stat => {
    const increment = stat.target / 100;
    const timer = setInterval(() => {
      stat.current += increment;
      if (stat.current >= stat.target) {
        stat.current = stat.target;
        clearInterval(timer);
      }
      stat.element.textContent = Math.floor(stat.current).toLocaleString();
    }, 20);
  });
  
  // Update stats periodically
  setInterval(() => {
    Object.values(stats).forEach(stat => {
      const increase = Math.floor(Math.random() * 5) + 1;
      stat.target += increase;
      stat.element.textContent = stat.target.toLocaleString();
    });
  }, 30000);
}



// Live Feed Updates
function updateLiveFeed() {
  const names = ['Rajesh', 'Priya', 'Amit', 'Sneha', 'Vikram', 'Anita', 'Rohit', 'Kavya'];
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'];
  const actions = ['generated their certificate', 'shared on Facebook', 'completed the quiz', 'downloaded their certificate'];
  const avatars = ['🇮🇳', '🏆', '❤️', '⭐'];
  
  const feedContainer = document.querySelector('.live-feed');
  
  setInterval(() => {
    const name = names[Math.floor(Math.random() * names.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const avatar = avatars[Math.floor(Math.random() * avatars.length)];
    
    const newItem = document.createElement('div');
    newItem.className = 'feed-item';
    newItem.innerHTML = `
      <div class="feed-avatar">${avatar}</div>
      <div class="feed-content">
        <strong>${name} from ${city}</strong> just ${action}!
        <span class="feed-time">Just now</span>
      </div>
    `;
    
    feedContainer.insertBefore(newItem, feedContainer.firstChild);
    
    // Remove old items (keep only 3)
    while (feedContainer.children.length > 3) {
      feedContainer.removeChild(feedContainer.lastChild);
    }
  }, 8000);
}

// Initialize new features
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    updateLiveFeed();
  }, 7000);
});

// Performance optimization - Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });
}