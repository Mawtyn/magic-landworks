document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for the navigation menu
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname;

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.dataset.target;
      const targetElement = document.querySelector(targetId);

      if (currentPage === '/' && targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Initialize the 'Get Instant Quote' form
  const quoteForm = document.querySelector('#quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', e => {
      e.preventDefault();
      const squareFeet = parseFloat(quoteForm.squareFeet.value);
      const sodType = quoteForm.sodType.value;

      // Perform your quote calculation here, using squareFeet and sodType

      const quoteValue = yourCalculationFunction(squareFeet, sodType);

      // Display the calculated quote
      const quoteResult = document.querySelector('#quote-result');
      quoteResult.textContent = `Your estimated cost: $${quoteValue.toFixed(2)}`;
    });
  }
});

// Get all the service cards
const serviceCards = document.querySelectorAll('.service-card');

// Loop through each service card and add a click event listener
serviceCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    const imagePath = card.dataset.imagePath;
    openModal(imagePath);
  });
});

// Modal functionality
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeButton = document.getElementsByClassName('close')[0];

function openModal(imagePath) {
  modal.style.display = 'block';
  modalImage.src = imagePath;
}

closeButton.onclick = function () {
  modal.style.display = 'none';
};

modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

$(document).ready(function () {
  $('.slick').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
  });
});
