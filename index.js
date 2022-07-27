"use strict";

const randomNumber1 = Math.floor(Math.random() * 6) + 1;

const randomDiceImage = "dice" + randomNumber1 + ".png";

const randomImagesource = "images/" + randomDiceImage;

const image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesource);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
