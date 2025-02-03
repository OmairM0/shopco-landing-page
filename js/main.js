const menu = document.querySelector(".menu");
const menuButtonOpen = document.querySelector(".menu-icon");
const menuButtonClose = document.querySelector(".menu .close");

menuButtonOpen.addEventListener("click", () => {
  menu.classList.add("active");
});

menuButtonClose.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Testimonials Navigation
const testimonials = document.querySelectorAll(".testimonials .boxes .box");
const leftArrow = document.querySelector(".testimonials .left");
const rightArrow = document.querySelector(".testimonials .right");

let translateIndex = 0;
let testimonialsCount = testimonials.length;
let index = 0;

leftArrow.addEventListener("click", () => {
  console.log(translateIndex);

  console.log(testimonialsCount);
  console.log(index);
  if (index === 0) {
    return;
  }
  translateIndex += testimonials[0].offsetWidth + 10;
  testimonials.forEach((box) => {
    box.style.transform = `translateX(${translateIndex}px)`;
    console.log("-------");
  });
  index -= 1;
});

rightArrow.addEventListener("click", () => {
  if (index === testimonialsCount - 1) return;
  translateIndex -= testimonials[0].offsetWidth + 10;

  testimonials.forEach((box) => {
    box.style.transform = `translateX(${translateIndex}px)`;
  });
  index += 1;
  console.log(translateIndex);

  console.log(testimonialsCount);
  console.log(index);
});
