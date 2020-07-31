document.querySelector(".btn").onclick = function() {
  Random()
};
document.querySelector(".slider").onclick = function() {
  displayMode()
};

function Random() {
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 You Won! 🎊";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Shrijak Won! 🎊";
  } else {
    document.querySelector("h1").innerHTML = "Draw !! 🎉🎊";
  }
  document.querySelector(".btn").innerHTML = "Play Again!";
}

function displayMode() {
  document.querySelector("body").classList.toggle("darkmode");
}
