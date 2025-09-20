// Dark mode toggle
const darkBtn = document.querySelector('.dark-mode');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('active');
  });
});

// Simple carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 3000);
