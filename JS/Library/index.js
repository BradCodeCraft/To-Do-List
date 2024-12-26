class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
  }

  card() {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const title = document.createElement("h2");
    title.textContent = this.title;

    const author = document.createElement("p");
    author.textContent = `Author: ${this.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${this.pages}`;

    const read = document.createElement("p");
    read.textContent = `Read: ${this.read ? "Yes" : "No"}`;

    const readButton = document.createElement("button");
    readButton.textContent = "Read";
    readButton.className = "read-button";
    readButton.onclick = () => {
      this.read = !this.read;
      read.textContent = `Read: ${this.read ? "Yes" : "No"}`;
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = () => {
      library.removeBook(this);
      card.remove();
    };

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(readButton);
    card.appendChild(deleteButton);

    return card;
  }
}

class Library {
  constructor() {
    this.books = new Set();
  }

  addBook(book) {
    this.books.add(book);
  }

  removeBook(book) {
    this.books.delete(book);
  }

  displayBooks() {
    document.getElementsByClassName("content-bottom")[0].innerHTML = "";
    this.books.forEach(book => {
      document.getElementsByClassName("content-bottom")[0].appendChild(book.card());
    });
  }
}

const library = new Library();

function submitForm(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const book = new Book(title, author, pages, read);

  if (library.books.has(book)) {
    alert("Book already exists in the library");
    return;
  } else {
    library.addBook(book);
  }

  library.displayBooks();
}

