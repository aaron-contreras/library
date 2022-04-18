let myLibrary = [];

function addBookToLibrary(bookAttributes) {
  const newBook = new Book(bookAttributes);

  myLibrary.unshift(newBook);
};

sampleBooks.forEach(bookAttributes => {
  addBookToLibrary(bookAttributes);
});

renderBooks();

// New Book toggle
const newBookButton = document.getElementById('new-book-toggle');
newBookButton.addEventListener('click', () => {
  document.getElementById('new-book-form').classList.toggle('d-none');
  const newBookButtonTextTag = newBookButton.getElementsByTagName('span')[0];
  const newBookButtonIconTag = newBookButton.getElementsByTagName('i')[0];


  newBookButtonTextTag.textContent = newBookButtonTextTag.textContent === 'Add a book' ? 'Close form' : 'Add a book'
  newBookButtonIconTag.classList.toggle('bi-plus-square-fill');
  newBookButtonIconTag.classList.toggle('bi-x-square-fill');

  newBookButton.classList.toggle('bg-dark');
  // newBookButton.classList.toggle('mb-5');
});

// New Book form
const newBookForm = document.getElementById('new-book-form');
newBookForm.addEventListener('submit', (event) => {
  // Handle form validation
  event.preventDefault();

  newBookForm.checkValidity();
  newBookForm.reportValidity();

  const title = document.getElementById('name').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('has-read').checked;
  const bookAttributes = {
    title,
    author,
    pages,
    read
  };

  addBookToLibrary(bookAttributes);
  reRenderBooks();

  // Reset form
  newBookForm.reset();
});

