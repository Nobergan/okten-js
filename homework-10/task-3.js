// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//     При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів
const arrayBlock = document.querySelector("#array");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

const array = [];

for (let i = 0; i < 100; i++) {
  array.push({
    name: `name ${i + 1}`,
    price: i * 100,
  });
}

let currentPage = 1;
const itemsPerPage = 10;
// For cyclic scrolling
// const totalPages = Math.ceil(array.length / itemsPerPage);

function renderPage(page) {
  arrayBlock.innerHTML = "";
  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;

  array.slice(start, end).map((item) => {
    arrayBlock.insertAdjacentHTML(
      "beforeend",
      `<div class="item">
    <p class="item-name">${item.name}</p>
    <p class="item-price">${item.price}</p>
  </div>`
    );
  });

  // For NOT cyclic scrolling
  prevButton.disabled = page === 1;
  nextButton.disabled = page === Math.ceil(array.length / itemsPerPage);
}

nextButton.addEventListener("click", () => {
  // For cyclic scrolling
  // currentPage = currentPage >= totalPages ? 1 : currentPage + 1;

  // For NOT cyclic scrolling
  currentPage++;

  renderPage(currentPage);
});

prevButton.addEventListener("click", () => {
  // For cyclic scrolling
  // currentPage = currentPage <= 1 ? totalPages : currentPage - 1;

  // For NOT cyclic scrolling
  currentPage--;

  renderPage(currentPage);
});

renderPage(currentPage);
