function openName() {
  window.location.href = "name.html";
}

function saveQuery() {
  let query = event.srcElement.id;
  window.localStorage.setItem("savedQuery", query);
  openName();
}

function displayScentResults(list, query) {
  let resultHtml = "";

  list.forEach(function (item) {
    let name = item.name.toUpperCase();
    let brand = item.brand;
    let scent = item.scent;
    let longevity = item.longevity;

    resultHtml =
      resultHtml +
      `<div class="list-result-container">
        <div class="result">
        <div class="result-item">
            <p class="mid-text">${name}</p>
            <p class="caption-text">by ${brand}</p>
        </div>
        <div>
            <p class="mid-text">${scent}</p>
            <p class="caption-text">${longevity}</p>
        </div>
        <div>
        <button onclick="saveQuery()" id="${name}">🔍</button>
        </div>
        </div>
    </div>`;
  });

  let resultElement = document.querySelector("#results");
  resultElement.innerHTML = resultHtml;
  let counterElement = document.querySelector("#counter");
  counterElement.innerHTML = `${list.length} result(s) found for ${query}:`;
}

function filterPerfumes(perfumes, query) {
  let list = perfumes.filter((element) => element.scent.includes(query));
  displayScentResults(list, query);
}

function getScent() {
  let query = event.srcElement.id;
  filterPerfumes(perfumes, query);
}
