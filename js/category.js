const filter = document.querySelector(".content .filter");
const filterButtonOpen = document.querySelector(
  ".content .category .filter-icon"
);
const filterButtonClose = document.querySelector(".filter .close-icon");

filterButtonOpen.addEventListener("click", () => {
  filter.classList.add("active");
});

filterButtonClose.addEventListener("click", () => {
  filter.classList.remove("active");
});
