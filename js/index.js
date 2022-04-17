let myLibrary = [];

function Book(attrs) {
  this.title = attrs.title;
  this.author = attrs.author;
  this.pages = attrs.pages;
  this.read = attrs.read;

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
  const rowContainer = document.createElement('div');
  rowContainer.classList.add('container');

  const row = document.createElement('div');
  row.classList.add('row') ;
  rowContainer.append(row);

  myLibrary.forEach(book => {
    const column = document.createElement('div');
    column.classList.add('col', 'd-flex', 'justify-content-center', 'mb-2');

    row.appendChild(column);

    const card = buildBookCard(book);
    column.appendChild(card);
  });

  document.getElementById('book-collection').appendChild(rowContainer);
}

function reRenderBooks() {
  document.getElementById('book-collection').innerHTML = '';
  renderBooks();
}

renderBooks();

// New Book toggle

const newBookButton = document.getElementById('new-book-toggle');
newBookButton.addEventListener('click', () => {
  document.getElementById('new-book-form').classList.toggle('d-none')
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

