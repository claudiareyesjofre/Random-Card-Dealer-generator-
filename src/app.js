/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#card").innerHTML = generateRandomNumber();
  });
  console.log();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suit = ["♦", "♥", "♠", "♣"];

  let indexnumbers = Math.floor(Math.random() * numbers.length);
  let indexsuit = Math.floor(Math.random() * suit.length);
  return suit[indexsuit] + numbers[indexnumbers] + suit[indexsuit];
};
