function displayFooter() {
  let entries = perfumes.length;

  let brands = new Set(
    perfumes.map(function (entry) {
      return `${entry.brand}`;
    })
  );

  let footerElement = document.querySelector(".footer-container");
  footerElement.innerHTML = `
  <p>This database contains ${entries} perfumes, across ${brands.size} brands.</p>
    `;
}

function displayHeader() {
  let headerElement = document.querySelector(".header-container");
  headerElement.innerHTML = `
      <a href="index.html">
        <button class="navigation-button">Home</button>
      </a>
      <div>
        <a href="index.html">
          <h1>ACCORD</h1>
          <h2>a perfume database</h2>
        </a>
      </div>
      <button onclick="(history.back())" class="navigation-button">Back</button>
    `;
}

function injectProgressBars() {
  // Checks perfume entires for null values in firstScent and impression
  let missingScent = perfumes.filter(function (perfumes) {
    return perfumes.firstScent === null;
  });

  let missingImpression = perfumes.filter(function (perfumes) {
    return perfumes.impression === null;
  });

  let total = perfumes.length;
  let scents = missingScent.length;
  let impressions = missingImpression.length;

  let scentsPercent = Math.floor(((total - scents) / total) * 100) + "%";
  console.log(`${scentsPercent} of scent profiles complete`);
  let impressionsPercent =
    Math.floor(((total - impressions) / total) * 100) + "%";
  console.log(`${impressionsPercent} of impressions complete`);

  let progressBarElement = document.querySelector("#progress-bars-container");
  progressBarElement.innerHTML = `
        <p style="text-align: left">Of ${total} perfumes entered into the database:</p>
        <div class="meter">
          <span style="width: ${scentsPercent}" </span>
        </div>
        <p class="progress-text">${scents} entries need a scent profile recording.</p>
        <div class="meter">
          <span style="width: ${impressionsPercent}"></span>
        </div>
        <p class="progress-text">${impressions} entries need an impression recording.</p>
  `;
}

function checkPage() {
  if (document.querySelector("#progress-bars-container")) {
    injectProgressBars();
  }
}

checkPage();
displayHeader();
displayFooter();
