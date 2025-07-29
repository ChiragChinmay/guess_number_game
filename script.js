"use strict";

let secretNumber = Math.trunc(Math.random() * 6) + 1;
let score = 20;
let highscore = 0;
function resultMessage(message) {
  document.querySelector(".message").textContent = message;
}
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    resultMessage("No number selected");
  } else if (guess === secretNumber) {
    resultMessage("Correct Number selected");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.backgroundColor = "red";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (score !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "too high" : "too low";

      score -= 1;

      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;

      resultMessage("you lost!");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 6) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".secretNumber").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".secretNumber").style.width = "15rem";
  document.querySelector(".secretNumber").style.backgroundColor = "";
});
