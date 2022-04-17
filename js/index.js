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
}

function addBookToLibrary(bookAttributes) {
  const newBook = new Book(bookAttributes);

  myLibrary.unshift(newBook);
};

// Sample addition to library

const sampleBooks = [
  {
    title: 'People We Meet on Vacation',
    author: 'Emily Henry',
    pages: 364,
    read: false
  },
  {
    title: 'The Love Hypothesis',
    author: 'Ali Hazelwood',
    pages: 384,
    read: false
  },
  {
    title: 'Head First Java',
    author: 'Katy Sierra',
    pages: 688,
    read: true
  },
  {
    title: 'Forward the Foundation',
    author: 'Isaac Asimov',
    pages: 434,
    read: false
  },
  {
    title: "Foundation's Edge",
    author: 'Isaac Asimov',
    pages: 449,
    read: false
  },
  {
    title: 'Prelude to Foundation',
    author: 'Isaac Asimov',
    pages: 493,
    read: false
  },
  {
    title: 'Second Foundation',
    author: 'Isaac Asimov',
    pages: 256,
    read: false
  },
  {
    title: 'Mark Zuckerbeg - In His Own Words',
    author: 'George Beahm',
    pages: 215,
    read: true
  },
  {
    title: 'Scar Island',
    author: 'Dan Gemeinhart',
    pages: 249,
    read: true
  },
]

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
    // document.getElementById('main-container').appendChild(card);
  });

  // row.append(paddingColumn);
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

