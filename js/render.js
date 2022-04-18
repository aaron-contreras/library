// Display books
function renderBooks() {
  myLibrary.forEach(book => {
    const card = buildBookCard(book);
    document.getElementById('book-collection').append(card);
  });
}

function reRenderBooks() {
  document.getElementById('book-collection').innerHTML = '';
  renderBooks();
}