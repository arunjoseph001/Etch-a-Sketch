const md = () => document.createElement("div");
const game = document.getElementById("board");
const button = document.querySelector("button");
let currentSquare = "none";
let row = 15;

function makeBoard(container, rows) {
  let gameWidth = rows * 50 + 2;
  gameWidth = gameWidth + "px";
  game.style.width = gameWidth;
  let length = rows * rows;
  for (let i = 0; i < length; i++) {
    const row = md();
    // Array.from({ length }).forEach(() => row.appendChild(md()));
    container.appendChild(row);
  }
}

makeBoard(game,row);

game.addEventListener("click", changeColor);

function changeColor(event) {
  console.log(event.target);
  currentSquare = event.target;
  let id = event.target.id;
  if (id == "board") {
    // console.log("clicked on the board now");
    return;
  }
  currentSquare.style.backgroundColor = "yellow";
}

button.addEventListener("click", reset);

function reset() {
  let count = prompt("Enter the numberof rows:-");
  console.log(isNaN(+count));
  game.textContent = "";
  if (Number.isInteger(count)) {
    if (count < 50) {
      row = count;
    }
  }
  makeBoard(game, row);
}
