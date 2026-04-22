const cards = document.querySelectorAll('.carousel-card');
let current = 1;
const total = cards.length;

function getIndex(offset) {
  return (current + offset + total) % total;
}

function updateCarousel() {
  cards.forEach(card => {
    card.className = 'carousel-card hidden';
  });
  cards[getIndex(-1)].className = 'carousel-card back-left';
  cards[current].className = 'carousel-card center';
  cards[getIndex(1)].className = 'carousel-card back-right';
}

document.getElementById('nextBtn').addEventListener('click', () => {
  current = getIndex(1);
  updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  current = getIndex(-1);
  updateCarousel();
});