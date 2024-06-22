function displayScentResults(list, query) {
  //   console.log(`${list.length} results found for the ${query} scent profile.`);
  let resultHtml = "";

  list.forEach(function (item) {
    // console.log(item.name);
    console.log(resultHtml);

    resultHtml =
      resultHtml +
      `<div class="result">
        <div>
            <p class="title-text">${item.name}</p>
            <p class="caption-text">by ${item.brand}</p>
        </div>
        <div>
            <p class="mid-text">${item.scent}</p>
            <p class="caption-text">${item.longevity}</p>
        </div>
    </div>`;
  });

  let resultElement = document.querySelector("#results");
  resultElement.innerHTML = resultHtml;
}

function filterPerfumes(perfumes, query) {
  let list = perfumes.filter((element) => element.scent.includes(query));
  displayScentResults(list, query);
}

function getScent() {
  let query = event.srcElement.id;
  filterPerfumes(perfumes, query);
}
