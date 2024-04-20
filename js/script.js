//Burger-menu
const burgerIcon = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__menu");
const burgerLink = document.querySelectorAll(".header__link");
const body = document.querySelector("#body");

burgerIcon.addEventListener("click", (event) => {
  burgerIcon.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  body.classList.toggle("lock");
});

burgerLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    burgerIcon.classList.remove("active");
    burgerMenu.classList.remove("active");
    body.classList.remove("lock");
  });
});

//Slider
const prevButton = document.querySelector(".about__button_previous");
const nextButton = document.querySelector(".about__button_next");
const content = document.querySelectorAll(".about__img");
let currentSlide = 0;
let intervalId = null;
let isVisible = true;

const observer = new IntersectionObserver((entries) => {
  isVisible = entries.some((entry) => entry.isIntersecting);
  resetAutoSlide();
});

content.forEach((img) => observer.observe(img));

function showSlide() {
  content.forEach((img) => img.classList.remove("about__img_active"));
  content[currentSlide].classList.add("about__img_active");
}

function changeSlide(delta) {
  currentSlide = (currentSlide + delta + content.length) % content.length;
  showSlide();
}

function autoNextSlide() {
  if (isVisible) {
    changeSlide(1);
  }
}

function startAutoSlide() {
  intervalId = setInterval(autoNextSlide, 8000);
}

function resetAutoSlide() {
  clearInterval(intervalId);
  startAutoSlide();
}

startAutoSlide();

prevButton.addEventListener("click", () => {
  resetAutoSlide();
  changeSlide(-1);
});

nextButton.addEventListener("click", () => {
  resetAutoSlide();
  changeSlide(1);
});
