let boxes = document.querySelectorAll(".btn");

let turnO = true; //playerX, playerO
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      //playerO
      btn.innerText = "O";
      turnO = false;
    } else {
      //playerX
      btn.innerText = "X";
      turnO = true;
    }
    btn.disabled = true;
    count++;
}
)
});


const disableBoxes = () => {
  for (let btn of boxes) {
    btn.disabled = true;
  }
};

const enableBoxes = () => {
  for (let btn of boxes) {
    btn.disabled = false;
    btn.innerText = "";
  }
};
