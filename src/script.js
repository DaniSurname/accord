console.log(perfumes[3].Name);

function updatePerfumeInfo(index) {
  // event.preventDefault();

  let perfumeName = document.querySelector("#perfume-name");
  let name = perfumes[index].name;
  perfumeName.innerHTML = name.toUpperCase();

  let perfumeBrand = document.querySelector("#perfume-brand");
  let brand = perfumes[index].brand;
  perfumeBrand.innerHTML = `by ${brand}`;

  let perfumeType = document.querySelector("#perfume-type");
  let type = perfumes[index].type;
  perfumeType.innerHTML = type.toUpperCase();

  let perfumeScent = document.querySelector("#perfume-scent");
  let scent = perfumes[index].scent;
  perfumeScent.innerHTML = scent;

  let perfumeLongevity = document.querySelector("#perfume-longevity");
  let longevity = perfumes[index].longevity;
  perfumeLongevity.innerHTML = `<em>An ${type} has an expected longevity of approx. ${longevity}.</em>`;

  // let perfumeImpression = document.querySelector("#perfume-impression");
  // let impression = perfumes[index].impression;
  // perfumeImpression.innerHTML = `<em>${impression}</em>`;

  let perfumeSize = document.querySelector("#perfume-size");
  let size = perfumes[index].size;
  perfumeSize.innerHTML = `${size} size in collection.`;

  let GoogleButton = document.querySelector("#googleButton");
  GoogleButton.innerHTML = `<a href="https://google.com/search?q=
  ${perfumes[index].name} by ${perfumes[index].brand}">
  Search on Google</a>`;
}

function getPerfumeID(perfumeFinder) {
  let index = perfumes.findIndex((item) => item.finder === perfumeFinder);
  updatePerfumeInfo(index);
}

function getFinder(input) {
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

getPerfumeID("CLASSIQUE");
