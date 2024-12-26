function Book(iTitle, iAuthor, iPages, iRead) {
  this.title = iTitle;
  this.author = iAuthor;
  this.pages = iPages;
  this.read = iRead;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());

function Person(iName) {
  this.name = iName;
}

Person.prototype.greet = function() {
  return `Hello, ${this.name}!`;
}

function Player(iName, iMarker) {
  this.name = iName;
  this.marker = iMarker;
}

Object.setPrototypeOf(Player.prototype, Person.prototype);

const player1 = new Player("John", "X");
const player2 = new Player("Jane", "O");

console.log(player1.greet());
