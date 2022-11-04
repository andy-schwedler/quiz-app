console.clear();

const bookmark = document.querySelector('[data-js="bookmark-button"]');
const bookmarkContainer = document.querySelector('[data-js="bookmark-button"]');

bookmarkContainer.addEventListener("click", (event) => {
  bookmark.classList.toggle("question-card--container__bookmark--clicked");
});
