const player1Points = document.querySelector(".player-1-points");
const player2Points = document.querySelector(".player-2-points");
const player0Current = document.querySelector(".player-current-0");
const player1Current = document.querySelector(".player-current-1");
const containerLeft = document.querySelector(".left");
const containerRight = document.querySelector(".right");
const btnRoll = document.querySelector(".roll");
const btnNew = document.querySelector(".new");
const btnHold = document.querySelector(".hold");
const dicePic = document.querySelector(".dice");
const player1 = document.querySelector(".left");
const player2 = document.querySelector(".right");

player1Points.textContent = 0;
player2Points.textContent = 0;
dicePic.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  dicePic.classList.remove("hidden");
  dicePic.src = `./img/dice-${dice}.png`;

  if (dice !== 1) {
    document.querySelector(`.player-current-${activePlayer}`).textContent =
      currentScore += dice;
  } else {
    document.querySelector(`.player-current-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    containerLeft.classList.toggle("active");
    containerRight.classList.toggle("active");
  }
});
