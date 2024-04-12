function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read;
    this.printData = function() {
        return    (this.title + " was written by " + this.author + ` and has ${this.pages} pages.`)
    };
}

const theHobbit = new Book("The Hobbit", "Tolkien, J.R.R.", 387, true);
