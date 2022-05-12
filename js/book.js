class Book {
  // Properties
  #title;
  #author;
  #pages;
  #read;
  #coverColor;

  constructor(attrs) {
    this.#title = attrs.title;
    this.#author = attrs.author;
    this.#pages = attrs.pages;
    this.#read = attrs.read;
    this.#coverColor = bookCoverColors[Math.floor(Math.random() * bookCoverColors.length)];
  }

  // Getters
  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get pages() {
    return this.#pages;
  }

  get read() {
    return this.#read;
  }
  
  get coverColor() {
    return this.#coverColor;
  }

  // Methods
  toggleRead() {
    this.#read = !this.#read;
  }

  // Not used in UI
  info() {
    readStatus = this.read ? 'read' : 'not read yet';
    
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  }
  // Not used in UI
}