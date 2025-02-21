function toggleDropdown() {
  // Toggles between dropdown arrow's open/closed styling
  let dropdownArrow = document.querySelector(".arrow");
  dropdownArrow.classList.toggle("arrow-rotate");
  // Toggles between dropdown button's open/closed styling
  let dropdownButton = document.querySelector(".dropdown-button");
  dropdownButton.classList.toggle("menu-open");
  // Toggles between dropdown menu's open/closed styling
  let dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("menu-open");
}

// Locates dropdown menu button and triggers open/close function
let dropdownButton = document.querySelector(".dropdown-button");
dropdownButton.addEventListener("click", toggleDropdown);
