const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

let currentIndex = 0;

const moveToSlide = (track, currentIndex) => {
  const amountToMove = -slideWidth * currentIndex;
  track.style.transform = `translateX(${amountToMove}px)`;
};

rightArrow.addEventListener('click', () => {
  if (currentIndex < slides.length - 3) {
    currentIndex++;
    moveToSlide(track, currentIndex);
  }
});

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveToSlide(track, currentIndex);
  }
});

document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const paragraph = this.previousElementSibling;
    paragraph.classList.toggle("expanded");
    this.textContent = paragraph.classList.contains("expanded")
      ? "Read less"
      : "Read more";
  });
});