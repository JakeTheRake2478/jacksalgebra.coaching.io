document.addEventListener("keydown", handleKeyPress);

let board = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];

function handleKeyPress(event) {
  if (event.key === "ArrowUp") {
    moveUp();
  } else if (event.key === "ArrowDown") {
    moveDown();
  } else if (event.key === "ArrowLeft") {
    moveLeft();
  } else if (event.key === "ArrowRight") {
    moveRight();
  }
}

function moveUp() {
  console.log("Move up");
  // Add logic to shift tiles up
}

function moveDown() {
  console.log("Move down");
  // Add logic to shift tiles down
}

function moveLeft() {
  console.log("Move left");
  // Add logic to shift tiles left
}

function moveRight() {
  console.log("Move right");
  // Add logic to shift tiles right
}

function updateBoard() {
  // Update the grid to match the board array
}

function generateNewTile() {
  // Add random 2 or 4 tile on an empty space
}

