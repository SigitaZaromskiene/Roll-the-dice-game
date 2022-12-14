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

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  player1Points.textContent = 0;
  player2Points.textContent = 0;
  dicePic.classList.add("hidden");
  player0Current.textContent = 0;
  player1Current.textContent = 0;
  player1.classList.remove("container3");
  player2.classList.remove("container3");
  player1.classList.add("active");
  player2.classList.remove("active");
};
init();

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    dicePic.classList.remove("hidden");
    dicePic.src = `./img/dice-${dice}.png`;

    if (dice !== 1) {
      console.log("currentScore", currentScore);
      currentScore += dice;
      document.querySelector(`.player-current-${activePlayer}`).textContent =
        currentScore;
    } else {
      document.querySelector(`.player-current-${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      containerLeft.classList.toggle("active");
      containerRight.classList.toggle("active");
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.player-points-${activePlayer}`).textContent =
      scores[activePlayer];

    document.querySelector(`.player-current-${activePlayer}`).textContent = 0;

    if (scores[activePlayer] >= 100) {
      playing = false;
      dicePic.classList.add("hidden");
      document
        .querySelector(`.container--${activePlayer}`)
        .classList.add("container3");

      document
        .querySelector(`.container--${activePlayer}`)
        .classList.remove("active");
    }

    document.querySelector(`.player-current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    containerLeft.classList.toggle("active");
    containerRight.classList.toggle("active");
  }
});

btnNew.addEventListener("click", init);
