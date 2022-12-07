const player1Points = document.querySelector(".player-1-points");
const player2Points = document.querySelector(".player-2-points");
const player1Current = document.querySelector(".player-1-current");
const player2Current = document.querySelector(".player-1-current");
const containerLeft = document.querySelector(".left");
const containerRight = document.querySelector(".right");
const btnRoll = document.querySelector(".roll");
const btnNew = document.querySelector(".new");
const btnHold = document.querySelector(".hold");
const dicePic = document.querySelector(".dice");

player1Points.textContent = 0;
player2Points.textContent = 0;
dicePic.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  dicePic.classList.remove("hidden");
  dicePic.src = `./img/dice-${dice}.png`;
});
