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

displayHeader();
displayFooter();
