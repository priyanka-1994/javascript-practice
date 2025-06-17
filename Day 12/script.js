const slides = document.querySelectorAll('.slide');
const preBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
const totalSlide = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active")); 
  slides[index].classList.add("active");  
  }
  
nextBtn.addEventListener('click' , () => {
  currentSlide = (currentSlide + 1) % totalSlide;
  showSlide(currentSlide);
});

preBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlide) % totalSlide;
  showSlide(currentSlide);
});

setInterval(() => {
  currentSlide = (currentSlide+1)%totalSlide;
  showSlide(currentSlide);
}, 1000);
