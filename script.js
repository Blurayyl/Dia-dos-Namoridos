// Cria e adiciona o modal no body
document.addEventListener("DOMContentLoaded", () => {
  const modalHTML = `
    <div id="surpriseModal">
      <div class="modal-content">
        <button class="close-btn" aria-label="Fechar modal">&times;</button>
        <h2>🎉 Surpresa!</h2>
        <p>Você clicou e liberou uma chuva de confetes!</p>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('surpriseModal');
  const closeBtn = modal.querySelector('.close-btn');
  let confettiActive = false;

  function randomColor() {
    const colors = ['#ff4d8a', '#ffb3c6', '#f50057', '#ff99cc', '#e60073'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function createConfetti(x, y) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    confetti.style.backgroundColor = randomColor();
    confetti.style.width = confetti.style.height = Math.random() * 8 + 6 + 'px';
    document.body.appendChild(confetti);

    confetti.addEventListener('animationend', () => confetti.remove());
  }

  function showConfetti() {
    for (let i = 0; i < 60; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight / 2;
      createConfetti(x, y);
    }
  }

  document.body.addEventListener('click', () => {
    if (!confettiActive) {
      modal.style.display = 'flex';
      showConfetti();
      confettiActive = true;
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
