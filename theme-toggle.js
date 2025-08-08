// Theme Toggle Functionality

function toggleTheme() {
  const body = document.body;
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = themeBtn.querySelector('.theme-icon');
  
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = themeBtn?.querySelector('.theme-icon');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeIcon) themeIcon.textContent = '☀️';
  } else {
    if (themeIcon) themeIcon.textContent = '🌙';
  }
});