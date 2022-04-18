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
