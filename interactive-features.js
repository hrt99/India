// Interactive Features and UI Enhancements

// Collapsible sections
function toggleCollapsible(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector('.toggle-icon');
  
  header.classList.toggle('active');
  content.classList.toggle('active');
  
  if (content.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = '0';
  }
}

// Tabbed interface
function showTab(evt, tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabContents.forEach(content => content.classList.remove('active'));
  tabBtns.forEach(btn => btn.classList.remove('active'));
  
  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}

// Defense modal
function openDefenseModal(type) {
  const defenseInfo = {
    army: { title: 'Indian Army', desc: 'The Indian Army is the land-based branch and the largest component of the Indian Armed Forces. With over 1.4 million active personnel, it stands as one of the world\'s largest standing armies.' },
    tank: { title: 'Armored Division', desc: 'India\'s armored divisions feature advanced tanks including the indigenous Arjun MBT and T-90 Bhishma tanks, providing superior firepower and protection.' },
    airforce: { title: 'Indian Air Force', desc: 'The Indian Air Force operates advanced aircraft including Rafale, Sukhoi Su-30MKI, and indigenous Tejas fighters, maintaining air superiority.' },
    navy: { title: 'Indian Navy', desc: 'The Indian Navy secures maritime borders with aircraft carriers, destroyers, and submarines, including the indigenous INS Vikrant.' },
    missile: { title: 'Missile Defense', desc: 'India\'s missile arsenal includes Agni series ICBMs, BrahMos supersonic cruise missiles, and Prithvi tactical missiles.' },
    s400: { title: 'S-400 System', desc: 'The S-400 Triumf is a mobile surface-to-air missile system providing comprehensive air defense against aircraft and missiles.' }
  };
  
  const info = defenseInfo[type];
  alert(`${info.title}\n\n${info.desc}`);
}

// Progress bar
function updateProgressBar() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById('progressBar').style.width = scrollPercent + '%';
}

// Floating action buttons
function quickShare() {
  if (navigator.share) {
    navigator.share({
      title: '🇮🇳 Independence Day 2025',
      text: 'Celebrating 78 years of Indian Independence!',
      url: window.location.href
    });
  } else {
    shareOnWhatsApp();
  }
}

function addToFavorites() {
  localStorage.setItem('independenceFavorite', 'true');
  showNotification('❤️ Added to favorites!');
}

function showQuickInfo() {
  alert('🇮🇳 Independence Day 2025\n\nCelebrating 78 years of freedom!\nJai Hind!');
}

// Notification system
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, var(--orange), var(--gold));
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Auto-scroll to sections
function autoScrollToSection() {
  const sections = document.querySelectorAll('section');
  let currentSection = 0;
  
  setInterval(() => {
    if (currentSection < sections.length - 1) {
      currentSection++;
      sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    } else {
      currentSection = 0;
      sections[0].scrollIntoView({ behavior: 'smooth' });
    }
  }, 10000); // Auto-scroll every 10 seconds
}

// Initialize features
document.addEventListener('DOMContentLoaded', function() {
  // Progress bar
  window.addEventListener('scroll', updateProgressBar);
  
  // Smooth animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.6s ease forwards';
      }
    });
  });
  
  document.querySelectorAll('.collapsible-section, .defense-card').forEach(el => {
    observer.observe(el);
  });
  
  // Check if user is returning visitor
  if (localStorage.getItem('independenceFavorite')) {
    showNotification('🇮🇳 Welcome back, patriot!');
  }
  
  // Auto-scroll feature (optional)
  // autoScrollToSection();
});

// Enhanced certificate generation with confetti
function generateCertificateWithEffects(formData) {
  const certificateId = generateCertificateWithData(formData);
  
  // Confetti effect
  if (typeof confetti !== 'undefined') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff9933', '#ffffff', '#138808']
    });
  }
  
  // Play music
  playCertificateMusic();
  
  // Show notification
  showNotification('🏆 Certificate generated successfully!');
  
  return certificateId;
}

// All keyboard event listeners removed to ensure normal browser functionality