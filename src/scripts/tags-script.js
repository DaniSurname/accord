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

function displaySearchResults(list, query) {
  // Sets variable to collect HTML code in
  let resultHtml = "";

  list.forEach(function (item) {
    // Sets variables for each data type for each filtered array item
    let name = item.name.toUpperCase();
    let brand = item.brand;
    let scent = `${item.firstScent} and ${item.secondScent}`;
    let longevity = item.longevity;
    let impression = item.impression;

    if (item.firstScent === null) {
      // Injects HTML for entries with no scent values

      resultHtml =
        resultHtml +
        `<div class="list-results-container">
        <div class="result-item-container">
        <div class="result-item">
            <p class="mid-text link-text" onclick="saveQuery()" id="${name}">${name}</p>
            <p class="caption-text">by ${brand}</p>
        </div>
        </div>
        </div>`;
    } else if (item.impression === null) {
      // Injects HTML for entries with no scent values

      resultHtml =
        resultHtml +
        `<div class="list-results-container">
        <div class="result-item-container">
        <div class="result-item">
            <p class="mid-text link-text" onclick="saveQuery()" id="${name}">${name}</p>
            <p class="caption-text">by ${brand}</p>
        </div>
        <div class="result-item-right button-container">
            <button>${item.firstScent}</button>
            <button>${item.secondScent}</button>
        </div>
        </div>
    </div>`;
    } else {
      resultHtml =
        resultHtml +
        `<div class="list-results-container">
        <div class="result-item-container">
        <div class="result-item">
            <p class="mid-text link-text" onclick="saveQuery()" id="${name}">${name}</p>
            <p class="caption-text">by ${brand}</p>
        </div>
        <div class="result-item-right button-container">
            <button>${item.firstScent}</button>
            <button>${item.secondScent}</button>
        </div>
        </div>
        <hr >
        <div class="caption-text"><em>${impression}</em></div>
    </div>`;
    }
  });

  // Updates page with collect HTML for filtered results
  let resultElement = document.querySelector("#list-results");
  resultElement.innerHTML = resultHtml;
}

function filterQuery(query) {
  let updatedQuery = query.toLowerCase();

  // Filters 'perfumes' array by query
  let list = perfumes.filter((element) => element.tags.includes(updatedQuery));

  // Sends results to display function

  displaySearchResults(list, query);
}

function getSearchInput() {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let query = searchInput.value;

  console.log(query);
  filterQuery(query);
}

let searchBar = document.querySelector("#search-bar");
searchBar.addEventListener("submit", getSearchInput);
