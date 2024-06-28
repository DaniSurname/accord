function updatePerfumeInfo(index) {
  let name = perfumes[index].name.toUpperCase();
  let brand = perfumes[index].brand;
  let type = perfumes[index].type;
  let scent = perfumes[index].scent;
  let longevity = perfumes[index].longevity;
  let size = perfumes[index].size;
  let impression = perfumes[index].impression;

  // Updates page with query result
  let resultElement = document.querySelector(".name-result-container");
  resultElement.innerHTML = `
          <div class="name-result-sub-container">
          <div class="title-text">${name}</div>
          <div class="mid-text">by ${brand}</div>
          <br />
          <div class="mid-text">${type.toUpperCase()}</div>
          <br />
          <div class="caption-text"><em>Expected longevity: <br / >${longevity}</em></div>
        </div>
        <hr />
        <div class="name-result-sub-container">
          <div class="mid-text">${scent}</div>
          <br />
          <div><em>${impression}</em></div>
          </div>
          <hr />
          <div class="name-result-sub-container">
          <div>${size} size in collection.</div>
          <a href="https://google.com">
            <button id="google-button">
            <a href="https://google.com/search?q=${perfumes[index].name} by ${
    perfumes[index].brand
  }">
            Search on Google</a></button>
          </a>
        </div>
        </div>
`;
}

function getPerfumeID(perfumeFinder) {
  let index = perfumes.findIndex((item) => item.finder.includes(perfumeFinder));
  updatePerfumeInfo(index);
}

function getFinder(input) {
  window.localStorage.setItem("savedQuery", "");
  perfumeFinder = input
    .toUpperCase()
    .replaceAll(".", "")
    .replaceAll("'", "")
    .replaceAll(" ", "");
  getPerfumeID(perfumeFinder);
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
  updatePerfumeInfo(Math.floor(Math.random() * 52) + 1);
}
