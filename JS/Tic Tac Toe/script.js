class Board {
  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.turn = "X";
  }

  play(row, col) {
    if (this.board[row][col] === "") {
      this.board[row][col] = this.turn;
      this.turn = this.turn === "X" ? "O" : "X";
    }

    const data = document.createElement("p");
    data.innerText = this.board[row][col];
    const cell = document.getElementById(row * 3 + col);

    if (cell.children.length === 0) {
      cell.append(data);
    }

    cell.style.pointerEvents = "none";
  }

  checkWinner() {
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] === this.board[i][1] &&
        this.board[i][0] === this.board[i][2] &&
        this.board[i][0] !== ""
      ) {
        return this.board[i][0];
      }
      if (
        this.board[0][i] === this.board[1][i] &&
        this.board[0][i] === this.board[2][i] &&
        this.board[0][i] !== ""
      ) {
        return this.board[0][i];
      }
    }
    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2] &&
      this.board[0][0] !== ""
    ) {
      return this.board[0][0];
    }
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[0][2] === this.board[2][0] &&
      this.board[0][2] !== ""
    ) {
      return this.board[0][2];
    }
    return null;
  }
}

game = new Board();
const board = document.getElementsByClassName("board")[0];
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = i;
  cell.addEventListener("click", () => {
    const row = Math.floor(i / 3);
    const col = i % 3;

    game.play(row, col);

    const winner = game.checkWinner();
    if (winner) {
      alert(`${winner} wins!`);
    } else {
      let isDraw = true;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (game.board[i][j] === "") {
            isDraw = false;
          }
        }
      }
      if (isDraw) {
        alert("It's a draw!");
      }
    }
  });
  board.append(cell);
}

const replay = document.getElementsByClassName("replay-button")[0];
replay.addEventListener("click", () => {
  game = new Board();
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
});
