import 'animate.css';

const aboutSection = document.querySelector('a[href="#about-section"]');
const contactSection = document.querySelector('a[href="#contact-section"]');
const supportSection = document.querySelector('a[href="#support-section"]');
const readmorebtn = document.querySelector('#readmore-btn');
const readlessbtn = document.querySelector('#readless-btn');
const readmoretxt = document.querySelector('.read-more');
const readlesstxt = document.querySelector('.read-less');

// Smoothly scrolling to sections when user clicks on a nav btn
aboutSection.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#about-section').scrollIntoView();
});

contactSection.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#contact-section').scrollIntoView();
});

supportSection.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#supportme-section').scrollIntoView();
});

// Read More and Read Less btn
readmorebtn.addEventListener('click', function() {
  readmorebtn.classList.add('hidden');
  readlessbtn.classList.remove('hidden');
  readmoretxt.classList.remove('hidden');
  readlesstxt.classList.add('hidden');
});

readlessbtn.addEventListener('click', function() {
  readlessbtn.classList.add('hidden');
  readmorebtn.classList.remove('hidden');
  readlesstxt.classList.remove('hidden');
  readmoretxt.classList.add('hidden');
})

