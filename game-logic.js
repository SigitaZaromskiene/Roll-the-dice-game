const player1Points = document.querySelector(".player-points-0");
const player2Points = document.querySelector(".player-points-1");
const player0Current = document.querySelector(".player-current-0");
const player1Current = document.querySelector(".player-current-1");
const containerLeft = document.querySelector(".left");
const containerRight = document.querySelector(".right");
const containerHidden = document.querySelector(".hidden");
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
let playing = true;

btnRoll.addEventListener("click", function () {
  if (playing) {
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
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    document.querySelector(`.player-points-${activePlayer}`).textContent =
      scores[activePlayer] += currentScore;
    document.querySelector(`.player-current-${activePlayer}`).textContent = 0;
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.container--${activePlayer}`)
        .classList.add("container3");
      document.querySelector(`.player-${activePlayer}`).textContent =
        "Winner!!!";
      document
        .querySelector(`.container--${activePlayer}`)
        .classList.remove("active");
    }
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
