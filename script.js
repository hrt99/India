document.addEventListener("DOMContentLoaded", () => {
  const jetIntro = document.getElementById("jetIntro");
  const mainContent = document.getElementById("mainContent");
  const jetSound = document.getElementById("jetSound");
  const bgMusic = document.getElementById("bgMusic");
  const countdownEl = document.getElementById("countdown");
  const form = document.getElementById("nameForm");
  const nameInput = document.getElementById("nameInput");
  const confettiHolder = document.getElementById("confettiHolder");

  jetSound.play().catch(() => {});
  setTimeout(() => {
    jetIntro.style.display = "none";
    mainContent.classList.add("show");
    bgMusic.play().catch(() => {});
  }, 4000);

  // Countdown
  function updateCountdown() {
    const now = new Date();
    const target = new Date("2025-08-15T00:00:00");
    const diff = target - now;
    if (diff <= 0) {
      countdownEl.textContent = "🎉 Happy Independence Day! 🇮🇳";
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    countdownEl.textContent = `${d}d ${h}h ${m}m ${s}s`;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Form submit
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (!name) return;
    confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
    confettiHolder.textContent = "🎊";
    setTimeout(() => {
      window.location.href = `certificate.html?name=${encodeURIComponent(name)}`;
    }, 1500);
  });
});
