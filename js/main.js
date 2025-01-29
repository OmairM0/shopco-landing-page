const menu = document.querySelector(".menu");
const menuButtonOpen = document.querySelector(".menu-icon");
const menuButtonClose = document.querySelector(".menu .close");

menuButtonOpen.addEventListener("click", () => {
  menu.classList.add("active");
});

menuButtonClose.addEventListener("click", () => {
  menu.classList.remove("active");
});
