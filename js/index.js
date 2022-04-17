let myLibrary = [];

function Book(attrs) {
  this.title = attrs.title;
  this.author = attrs.author;
  this.pages = attrs.pages;
  this.read = attrs.read;
  this.coverColor = bookCoverColors[Math.floor(Math.random() * bookCoverColors.length)];

  this.info = function() {
    readStatus = this.read ? 'read' : 'not read yet';
    
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  }

  this.toggleRead = () => {
    this.read = !this.read;
  }
}

function addBookToLibrary(bookAttributes) {
  const newBook = new Book(bookAttributes);

  myLibrary.unshift(newBook);
};

sampleBooks.forEach(bookAttributes => {
  addBookToLibrary(bookAttributes);
});

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

renderBooks();

// New Book toggle

const newBookButton = document.getElementById('new-book-toggle');
newBookButton.addEventListener('click', () => {
  document.getElementById('new-book-form').classList.toggle('d-none');
  newBookButton.textContent = newBookButton.textContent === 'Add a book' ? 'Close form' : 'Add a book'
  newBookButton.classList.toggle('bg-dark');
  // newBookButton.classList.toggle('mb-5');
});

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

