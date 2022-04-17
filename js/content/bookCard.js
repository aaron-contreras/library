function buildDiv() {
  return document.createElement('div');
}

function deleteBook(book) {
  bookIndex = myLibrary.indexOf(book);
  myLibrary.splice(bookIndex, 1);
}

function buildBookCard(book) {

  // Card container v2
  const bookContainer = buildDiv();
  bookContainer.classList.add('book-container');

  // Front cover
  const frontCover = buildDiv();
  frontCover.classList.add(
    'front-cover', 'bg-book-cover', 'bg-gradient',
    'gray-border', 'text-light', 'd-flex', 'flex-column',
    'justify-content-evenly'
  );

  // Title
  const title = document.createElement('p');
  title.classList.add('text-center', 'display-3', 'px-3', 'book-title');
  title.textContent = book.title;

  // Details
  const details = buildDiv();
  details.classList.add('container', 'px-3');

  // Author
  const author = document.createElement('h3');
  author.classList.add('book-author');
  author.textContent = book.author;

  // Pages
  const pages = document.createElement('h4');
  pages.classList.add('book-pages');
  pages.textContent = `${book.pages} pages`

  details.append(author);
  details.append(pages);

  frontCover.append(title);
  frontCover.append(details);

  // Control container

  const controlContainer = buildDiv();
  controlContainer.classList.add(
    'control-container', 'container', 'text-dark'
  );

  const readToggleRow = buildDiv();
  readToggleRow.classList.add('row', 'pt-2', 'pb-1', 'bg-light-blue');

  const readColumn = buildDiv();
  readColumn.classList.add('col', 'h4', 'd-flex', 'align-items-center', 'justify-content-center', 'mb-0');

  // Read toggle
  const readToggleId = `has-read-${myLibrary.indexOf(book)}`
  const readToggleContainer = buildDiv();
  readToggleContainer.classList.add('form-check', 'form-switch', 'control-container-fs');

  const readToggleInput = document.createElement('input');
  readToggleInput.setAttribute('type', 'checkbox');
  readToggleInput.setAttribute('role', 'switch');
  readToggleInput.classList.add('form-check-input');
  readToggleInput.setAttribute('id', readToggleId);
  readToggleInput.checked = book.read;

  const readToggleLabel = document.createElement('label');
  readToggleLabel.setAttribute('for', readToggleId);
  readToggleLabel.classList.add('form-check-label', 'control-container-fs');
  readToggleLabel.textContent = 'Read?'

  readToggleContainer.appendChild(readToggleInput);
  readToggleContainer.appendChild(readToggleLabel);

  // Attach handler for read toggle

  readToggleInput.addEventListener('click', (e) => {
    book.read = !book.read
    // readToggleInput.checked = book.read;
    reRenderBooks();
  });

  readColumn.append(readToggleContainer);

  // Button column
  const buttonRow = buildDiv();
  buttonRow.classList.add('row');
  // const buttonColumn = buildDiv();
  // buttonColumn.classList.add('col', 'text-center');

  // Delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'btn-danger', 'w-100', 'control-container-fs');
  const trashIcon = document.createElement('i');
  trashIcon.classList.add('bi', 'bi-trash');
  deleteButton.append(trashIcon);
  deleteButton.addEventListener('click', () => {
    deleteBook(book)
    reRenderBooks();
    deleteButton.removeEventListener('click');
  })

  buttonRow.append(deleteButton)

  readToggleRow.append(readColumn);

  controlContainer.append(readToggleRow);
  controlContainer.append(buttonRow);

  frontCover.append(controlContainer);
  // Highlight

  const highlight = buildDiv();
  highlight.classList.add('highlight');

  frontCover.append(highlight);

  bookContainer.append(frontCover);
  // Top Pages

  const topPages = buildDiv();
  topPages.classList.add('top-pages', 'bg-light', 'gray-border');

  bookContainer.append(topPages);

  // Side pages
  const sidePages = buildDiv();
  sidePages.classList.add('side-pages', 'gray-border', 'bg-light');

  bookContainer.append(sidePages);

  // Back cover
  const backCover = buildDiv();
  backCover.classList.add('back-cover', 'bg-book-cover', 'gray-border');

  bookContainer.append(backCover);

  return bookContainer;
}