function openName() {
  // Sends user to Name page
  window.location.href = "name.html";
}

function saveQuery() {
  // Collects the ID of the 🔍 button clicked
  let query = event.srcElement.id;
  // Records ID in local storage
  window.localStorage.setItem("savedQuery", query);
  // Triggers switch page function
  openName();
}

function displayScentResults(list, query) {
  // Sets variable to collect HTML code in
  let resultHtml = "";

  list.forEach(function (item) {
    // Sets variables for each data type for each filtered array item
    let name = item.name.toUpperCase();

    // Constructs HTML to display for each filtered array item
    resultHtml =
      resultHtml +
      `<div class="list-results-container">
        <div class="result-item-container">
        <div class="result-item name">
            <p class="mid-text link-text" onclick="saveQuery()" id="${name}">${name}</p>
            <p class="caption-text">by ${item.brand}</p>
        </div>
        <div class="result-item tags">
          <p class="tag-box">${item.longevity}</p>
          <p class="tag-box scent">${item.firstScent}</p>
          <p class="tag-box scent">${item.secondScent}</p>
        </div>
        </div>
    </div>`;
  });

  // Updates page with collect HTML for filtered results
  let resultElement = document.querySelector("#list-results");
  resultElement.innerHTML = resultHtml;
  // Updates counter element with filtered list length
  let counterElement = document.querySelector("#counter");
  counterElement.innerHTML = `${list.length} result(s) found for ${query}:`;
}

function displayScentInfo(scents, query) {
  let index = scents.findIndex((item) => item.scent.includes(query));
  let about = scents[index].about;
  let composition = scents[index].composition;

  let infoElement = document.querySelector("#scent-info");
  infoElement.innerHTML = `
  <div class="further-info-title">${about.toUpperCase()}</div>
  <div class="further-info-about">${composition}</div>
  `;
}

function filterPerfumes(perfumes, query) {
  let updatedQuery = query.toLowerCase();
  console.log(updatedQuery);
  // Filters 'perfumes' array by scent query
  let list = perfumes.filter((element) => element.tags.includes(updatedQuery));
  // Sends results to display function
  displayScentResults(list, query);
  displayScentInfo(scents, query);
}

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

function getScent() {
  // Closes dropdown menu before proceeding
  toggleDropdown();
  // Records chosen scent as 'query'
  let query = event.srcElement.id;
  // Sends query to filter function
  filterPerfumes(perfumes, query);
}

// Locates dropdown menu button and triggers open/close function
let dropdownButton = document.querySelector(".dropdown-button");
dropdownButton.addEventListener("click", toggleDropdown);
