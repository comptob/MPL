
function countdownTimer() {
  const countDate = new Date('September 1, 2025 00:00:00').getTime();
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML =
      `<h3>${days}d ${hours}h ${minutes}m ${seconds}s until Season 3!</h3>`;
    if (distance < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "Season 3 is live!";
    }
  }, 1000);
}
document.addEventListener("DOMContentLoaded", countdownTimer);
