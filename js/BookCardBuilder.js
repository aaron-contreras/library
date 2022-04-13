function buildDiv() {
  return document.createElement('div');
}

function deleteBook(book) {
  bookIndex = myLibrary.indexOf(book);
  myLibrary.splice(bookIndex, 1);
}

function buildBookCard(book) {
  // Card container
  const cardElement = buildDiv();
  cardElement.classList.add('card', 'my-3');

  // Read-status Card Header
  const readStatusCardHeader = buildDiv();
  readStatusCardHeader.classList.add('card-header');
  const readStatusText = book['read'] ? 'Read' : 'Pending to read';
  readStatusCardHeader.innerText = readStatusText;
  cardElement.appendChild(readStatusCardHeader);

  // Pages Card Header
  const pagesCardHeader = buildDiv();
  pagesCardHeader.classList.add('card-header');
  pagesCardHeader.innerText = `${book['pages']} pages`;
  cardElement.appendChild(pagesCardHeader);

  // Card Body
  const cardBody = buildDiv();
  cardBody.classList.add('card-body');
  cardElement.appendChild(cardBody);

  // Card Content
  // Title
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerText = book['title'];

  // Author
  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerText = `Authored by: ${book['author']}`;

  // Delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'btn-danger');
  deleteButton.innerText = 'Delete book';
  deleteButton.addEventListener('click', () => {
    deleteBook(book)
    reRenderBooks();
    deleteButton.removeEventListener('click');
  })

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(deleteButton);

  return cardElement;
}