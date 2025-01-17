function updateEntryInfo(index) {
  if (index < perfumes.length - 1) {
    nextIndex = index + 1;
  } else {
    nextIndex = 0;
  }

  if (index > 0) {
    previousIndex = index - 1;
  } else {
    previousIndex = perfumes.length - 1;
  }

  let previous = perfumes[previousIndex].name.toUpperCase();
  let current = perfumes[index].name.toUpperCase();
  let next = perfumes[nextIndex].name.toUpperCase();

  if (window.innerWidth > 600) {
    cap = 20;
  } else {
    cap = 35;
  }

  if (previous.length > cap) {
    previous = previous.slice(0, cap).trim().concat("...");
  }
  if (current.length > cap) {
    current = current.slice(0, cap).trim().concat("...");
  }
  if (next.length > cap) {
    next = next.slice(0, cap).trim().concat("...");
  }

  let indexElement = document.querySelector(".result-index-container");
  indexElement.innerHTML = `
      <div class="result-index">
        <span class="index-title">Previous:</span><br />
        <a class="not-current" onclick="updatePerfumeInfo(${previousIndex})">
        ${previous}
        </a>
      </div>
      <div class="result-index current">
        <span class="index-title">Entry no. ${index}:</span><br />
        ${current}
      </div>
      <div class="result-index">
        <span class="index-title">Next:</span><br />
        <a class="not-current" onclick="updatePerfumeInfo(${nextIndex})">
        ${next}
        </a>
      </div>
  `;
}

function updateScentInfo(index) {
  // Reinstates Scent Info section if previously hidden
  document.querySelector("#scent-info").style.display = "block";
  // Selects Scent Info section to update
  let resultElement = document.querySelector("#scent-info");

  let firstScent = perfumes[index].firstScent;
  let secondScent = perfumes[index].secondScent;
  let impression = perfumes[index].impression;

  // Hide elements if Scent Profile or Impression returns null
  if (firstScent != null) {
    if (impression != null) {
      resultElement.innerHTML = `
  <div class="name-result-sub-container">
   <div class="max-text">${firstScent.toUpperCase()} AND ${secondScent.toUpperCase()}</div>
  </div>
  <hr />
  <div class="name-result-sub-container">
   <div><em>${impression}</em></div>
  </div> `;
    } else {
      resultElement.innerHTML = `
      <div class="name-result-sub-container">
     <div class="max-text">${firstScent.toUpperCase()} AND ${secondScent.toUpperCase()}</div>
    </div>
     `;
    }
  } else {
    document.querySelector("#scent-info").style.display = "none";
  }
}

function updatePerfumeInfo(index) {
  let name = perfumes[index].name;
  let brand = perfumes[index].brand;
  let type = perfumes[index].type;
  let longevity = perfumes[index].longevity;
  let size = perfumes[index].size;

  // Updates page with query result
  let resultElement = document.querySelector("#perfume-info");
  resultElement.innerHTML = `
    <div class="name-result-sub-container">
      <div class="title-text">${name.toUpperCase()}</div>
      <div class="mid-text">by ${brand}</div>
    </div>
    <hr />
    <div class="name-result-sub-container">
      <div class="mid-text">${type.toUpperCase()}</div>
      <div class="caption-text">${size} size in collection.</div>
    </div>
    <div class="name-result-sub-container"> 
      <div class="caption-text"><em>Expected longevity: <br / >${longevity}</em></div>
      </div>
    </div>
    <div class="name-result-sub-container">
      <button class="event-button">
      <a href="https://google.com/search?q=${name} by ${brand}">
      Search on Google
      </a>
      </button>
    </div>
`;

  updateScentInfo(index);
  updateEntryInfo(index);
}

function getPerfumeID(perfumeFinder, input) {
  let index = perfumes.findIndex((item) => item.finder.includes(perfumeFinder));
  if (index >= 0) {
    updatePerfumeInfo(index);
  } else {
    document.querySelector("#scent-info").style.display = "none";
    let resultElement = document.querySelector(".name-result-container");
    resultElement.innerHTML = `
    <div class="name-result-sub-container">
    <div class="mid-text">No results found for:</div>
    <div class="title-text">'${input.toUpperCase()}'</div>
    </div>
    <div class="name-result-sub-container">
    <button class="event-button" onclick="location.reload()">Reload Page</button>
    </div>
    `;
  }
}

function getFinder(input) {
  window.localStorage.setItem("savedQuery", "");
  perfumeFinder = input
    .toUpperCase()
    .replaceAll(".", "")
    .replaceAll("'", "")
    .replaceAll(" ", "");
  getPerfumeID(perfumeFinder, input);
}

function getPerfumeName() {
  event.preventDefault();
  // Recieves perfume input from the user
  let searchInput = document.querySelector("#search-input");
  // Sends perfume input to the getPerfumeID function
  getFinder(searchInput.value);
}

let searchBar = document.querySelector("#search-bar");
searchBar.addEventListener("submit", getPerfumeName);

let savedQuery = window.localStorage.getItem("savedQuery");
if (savedQuery !== "") {
  getFinder(savedQuery);
} else {
  updatePerfumeInfo(Math.floor(Math.random() * 52));
}
