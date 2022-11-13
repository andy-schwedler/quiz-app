export function toggleBookmark() {
  bookmarkContainer.addEventListener("click", () => {
    bookmark.classList.toggle("question-card--container__bookmark--clicked");
  });
}
