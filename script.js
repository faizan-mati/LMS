const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
  slideIndex = (slideIndex + 1) % 2;
  showSlide(slideIndex);
}, 1000);