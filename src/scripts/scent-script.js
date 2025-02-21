// Functions to allow click thru to Name entry page:

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

// Functions to display filtered results:

function displayScentResults(list, query) {
  // Sets variable to collect HTML code in
  let resultHtml = "";

  // list.forEach(function (item) {
  //   // Sets variables for each data type for each filtered array item
  //   let name = item.name.toUpperCase();

  //   // Constructs HTML to display for each filtered array item
  //   resultHtml =
  //     resultHtml +
  //     `<div class="list-results-container">
  //       <div class="result-item-container">
  //       <div class="result-item name">
  //           <p class="mid-text link-text" onclick="saveQuery()" id="${name}">${name}</p>
  //           <p class="caption-text">by ${item.brand}</p>
  //       </div>
  //       <div class="result-item tags">
  //         <p class="tag-box">${item.longevity}</p>
  //         <p class="tag-box scent">${item.firstScent}</p>
  //         <p class="tag-box scent">${item.secondScent}</p>
  //       </div>
  //       </div>
  //   </div>`;
  // });

  list.forEach(function (item) {
    // Sets variables for each data type for each filtered array item
    let name = item.name.toUpperCase();
    let brand = item.brand;
    let longevity = item.longevity;
    let impression = item.impression;

    if (item.firstScent === null) {
      // Injects HTML for entries with no scent values
      resultHtml =
        resultHtml +
        `<div class="list-results-container">
        <div class="result-item-container">
        <div class="result-item name">
            <p class="mid-text link-text" onclick="saveQuery()" id="${name}">${name}</p>
            <p class="caption-text">by ${brand}</p>
        </div>
          <div class="result-item tags">
            <p class="tag-box">${longevity}</p>
        </div>
        </div>
        </div>`;
    } else if (item.impression === null) {
      // Injects HTML for entries with no impression
      resultHtml =
        resultHtml +
        `<div class="list-results-container">
        <div class="result-item-container">
        <div class="result-item name">
            <p class="mid-text link-text" onclick="saveQuery()" id="${name}">${name}</p>
            <p class="caption-text">by ${brand}</p>
        </div>
        <div class="result-item tags">
          <p class="tag-box">${longevity}</p>
          <p class="tag-box scent">${item.firstScent}</p>
          <p class="tag-box scent">${item.secondScent}</p>
        </div>
        </div>
    </div>`;
    } else {
      // Injects HTML for complete entries
      resultHtml =
        resultHtml +
        `<div class="list-results-container">
        <div class="result-item-container">
        <div class="result-item name">
            <p class="mid-text link-text" onclick="saveQuery()" id="${name}">${name}</p>
            <p class="caption-text">by ${brand}</p>
        </div>
        <div class="result-item tags">
          <p class="tag-box">${longevity}</p>
          <p class="tag-box scent">${item.firstScent}</p>
          <p class="tag-box scent">${item.secondScent}</p>
        </div>
        </div>
        <br >
        <div class="caption-text"><em>${impression}</em></div>
    </div>`;
    }
  });

  // Updates page with collect HTML for filtered results
  let resultElement = document.querySelector("#list-results");
  resultElement.innerHTML = resultHtml;
  // Updates counter element with filtered list length
  let counterElement = document.querySelector("#counter");
  counterElement.innerHTML = `${list.length} result(s) found for ${query}:`;
}

// function displayScentInfo(scents, query) {
//   let index = scents.findIndex((item) => item.accord.includes(query));
//   let about = scents[index].about;
//   let composition = scents[index].composition;

//   let infoElement = document.querySelector("#scent-info");
//   infoElement.innerHTML = `
//   <div class="further-info-title">${about.toUpperCase()}</div>
//   <div class="further-info-about">${composition}</div>
//   `;
// }

// Functions to filter perfume data by query:

function filterPerfumes(perfumes, query) {
  let updatedQuery = query.toLowerCase();

  // Filters 'perfumes' array by scent query
  let list = perfumes.filter((element) =>
    element.complete.includes(updatedQuery)
  );
  // Sends results to display function
  displayScentResults(list, query);
  // displayScentInfo(scents, query);
}

function getScent() {
  // Records chosen scent as 'query'
  let query = event.srcElement.id;
  // Sends query to filter function
  filterPerfumes(perfumes, query);

  console.log(`Clicked: ${query}`);
}

// Toggles button dropdowns

function checkDropdown() {
  // function to check if the menu is already open
  // if yes = close,  if no = proceed to toggleDropdown()

  let query = event.srcElement.id;
  let dropdownButton = document.querySelector(`#${query}`);
  let dropdownContent = document.querySelector(`#${query}-buttons`);

  if (dropdownButton.classList.contains("menu-open")) {
    dropdownButton.classList.remove("menu-open");
    dropdownContent.classList.remove("menu-open");
  } else {
    toggleDropdown();
  }
}

function toggleDropdown() {
  let query = event.srcElement.id;
  console.log(query);

  let dropdownOptions = document.querySelectorAll(
    ".dropdown-button,.dropdown-content"
  );

  dropdownOptions.forEach(function (item) {
    if (item.classList.contains("menu-open")) {
      item.classList.toggle("menu-open");
    }
  });

  let dropdownButton = document.querySelector(`#${query}`);
  dropdownButton.classList.toggle("menu-open");

  let dropdownContent = document.querySelector(`#${query}-buttons`);
  dropdownContent.classList.toggle("menu-open");
}

// Functions to inject page structure:

function injectButtons(scents, brands) {
  // Generates buttons for filtering by scent profile
  let scentButtonsHTML = "";
  let brandsButtonsHTML = "";

  scents.forEach(function (item) {
    let name = item.accord;

    scentButtonsHTML =
      scentButtonsHTML +
      `<button id="${name}" onclick="getScent()">${item.emoji} ${name}</button>`;
  });

  brands.forEach(function (item) {
    let name = item.brand;

    brandsButtonsHTML =
      brandsButtonsHTML +
      `<button id="${name}" onclick="getScent()">${name}</button>`;
  });

  let scentButtons = document.querySelector("#scent-dropdown-buttons");
  scentButtons.innerHTML = scentButtonsHTML;
  let brandButtons = document.querySelector("#brand-dropdown-buttons");
  brandButtons.innerHTML = brandsButtonsHTML;
}

injectButtons(scents, brands);
