let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    readStatus = this.read ? 'read' : 'not read yet';
    
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
};

// Sample addition to library

const sampleBooks = [
  ['People We Meet on Vacation', 'Emily Henry', 364, false],
  ['The Love Hypothesis', 'Ali Hazelwood', 384, false],
  ['Head First Java', 'Katy Sierra', 688, true]
]

sampleBooks.forEach(bookAttributes => {
  addBookToLibrary(...bookAttributes);
});

// Display books
myLibrary.forEach(book => {
  const card = buildBookCard(book);
  document.getElementById('main-container').appendChild(card);
});

// New Book toggle

const newBookButton = document.getElementById('new-book-toggle');
newBookButton.addEventListener('click', () => {
  document.getElementById('new-book-form').classList.toggle('d-none')
});
