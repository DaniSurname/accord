let dropdownButton = document.querySelector(".dropdown-button");
let dropdownArrow = document.querySelector(".arrow");
let dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", () => {
  dropdownArrow.classList.toggle("arrow-rotate");
  dropdownButton.classList.toggle("menu-open");
  dropdownContent.classList.toggle("menu-open");
});
