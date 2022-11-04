console.clear();

const bookmark = document.querySelector('[data-js="bookmark-button"]');

bookmark.addEventListener("click", (event) => {
  console.log(event);
});
