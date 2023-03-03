"use strict";
let random = Math.trunc(Math.random() * 20 + 1);
// Declaring variable for different classes
const questionMark = document.querySelector(".question-mark");
const container = document.querySelector(".container");
const spanScore = document.querySelector(".span-score");
const message = document.querySelector(".message");
const guess = document.querySelector(".guess");
const spanHighScore = document.querySelector(".span-highscore");
questionMark.style.cssText = `font-size: 5rem; font-family: "Press Start 2P", cursive; width: 11rem; height: 8rem; margin: auto; display: flex; justify-content: center; align-items: center; color: #000; background-color: rgb(230, 215, 197);`;

// Function for check! button
let val = 20;
document.querySelector(".check-btn").addEventListener("click", function () {
  const inputText = Number(document.querySelector("input").value);

  val = val - 1;
  spanScore.innerHTML = val;

  if (inputText === random) {
    questionMark.innerHTML = random;
    message.innerHTML = `Congratulation! You Won`;
    spanHighScore.innerHTML = val;
    container.style.backgroundColor = "green";
  } else if (inputText > random) {
    message.innerHTML = `Its too High`;
  } else {
    message.innerHTML = `Its too Low`;
  }

  if (val <= 0) {
    spanScore.innerHTML = "Try Again!!!";
    spanScore.style.cssText = "color: red;";
  }
});

// creating click function for again button
document.querySelector(".again-btn").addEventListener("click", function () {
  questionMark.innerHTML = "?";
  container.style.backgroundColor = "cadetblue";
  guess.value = " ";
  random = Math.trunc(Math.random() * 20 + 1);
  spanScore.innerHTML = 20;
  val = 20;
  message.innerHTML = "Starting Again!!";
});
