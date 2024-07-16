let player = "x";
const boxes = document.querySelectorAll(".box");

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      boxes[a].textContent &&
      boxes[a].textContent === boxes[b].textContent &&
      boxes[a].textContent === boxes[c].textContent
    ) {
      return boxes[a].textContent;
    }
  }

  return null;
}

function checkDraw() {
  return [...boxes].every((box) => box.textContent);
}

boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    const boxElement = event.target;
    if (!boxElement.textContent) {
      const h2 = document.createElement("h2");
      h2.classList.add("player");
      if (player === "x") {
        h2.textContent = "X";
        player = "o";
      } else {
        h2.textContent = "O";
        player = "x";
      }

      boxElement.appendChild(h2);

      const result = checkWin();
      if (result) {
        const winner = document.querySelector("#winner");
        winner.textContent = `The winner is ${result}`;
      } else if (checkDraw()) {
        const winner = document.querySelector("#winner");
        winner.textContent = "It's a draw!";
      }
    }
  });
});

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerHTML = ""; 
  });
  document.querySelector("#winner").textContent = ""; 
  player = "x"; 
});
