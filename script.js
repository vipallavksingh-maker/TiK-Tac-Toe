
const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");

let player = "X";
let gameOver = false;

const win = [
 [0,1,2], [3,4,5], [6,7,8],
 [0,3,6], [1,4,7], [2,5,8],
 [0,4,8], [2,4,6]
];

const makeMove = (i) => {
 if (cells[i].innerText || gameOver) return;

 cells[i].innerText = player;

 if (win.some(([a,b,c]) =>
 cells[a].innerText === player &&
 cells[b].innerText === player &&
 cells[c].innerText === player
 )) {
   status.innerText = `Player ${player} Wins!`;
   gameOver = true;
 } 
 else if ([...cells].every(c => c.innerText)) {
   status.innerText = "It's a Draw!";
   gameOver = true;
 } 
 else {
   player = player === "X" ? "O" : "X";
   status.innerText = `Player ${player}'s Turn`;
 }
};
