const cards = document.querySelectorAll('.carousel-card');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let current = 1;
const total = cards.length; 

function getIndex(offset) {
  return (current + offset + total) % total;
}

function updateCarousel() {
  cards.forEach((card) => {
    card.className = 'carousel-card hidden';
  });
  cards[getIndex(-1)].className = 'carousel-card back-left';
  cards[current].className = 'carousel-card center';
  cards[getIndex(1)].className = 'carousel-card back-right';
}

nextBtn.addEventListener('click', () => {
  current = getIndex(1);
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  current = getIndex(-1);
  updateCarousel();
});

updateCarousel();

const tfCards = document.querySelectorAll('.taskflow-card');
const tfNextBtn = document.getElementById('tfNextBtn');
const tfPrevBtn = document.getElementById('tfPrevBtn');

let tfCurrent = 1;
const tfTotal = tfCards.length;

function getTfIndex(offset) {
  return (tfCurrent + offset + tfTotal) % tfTotal;
}

function updateTaskflowCarousel() {
  tfCards.forEach((card) => {
    card.className = 'taskflow-card hidden';
  });
  tfCards[getTfIndex(-1)].className = 'taskflow-card back-left';
  tfCards[tfCurrent].className = 'taskflow-card center';
  tfCards[getTfIndex(1)].className = 'taskflow-card back-right';
}

tfNextBtn.addEventListener('click', () => {
  tfCurrent = getTfIndex(1);
  updateTaskflowCarousel();
});

tfPrevBtn.addEventListener('click', () => {
  tfCurrent = getTfIndex(-1);
  updateTaskflowCarousel();
});

updateTaskflowCarousel();