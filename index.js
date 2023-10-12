function restart() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceimage1 = "dice" + randomNumber1 + ".png";
  var randomImagesource1 = "images/" + randomDiceimage1;

  document.querySelector(".img1").setAttribute("src", randomImagesource1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceimage2 = "dice" + randomNumber2 + ".png";
  var randomImagesource2 = "images/" + randomDiceimage2;

  document.querySelector(".img2").setAttribute("src", randomImagesource2);
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player - 1 Wins 🏆";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player - 2 Wins 🏆";
  } else {
    document.querySelector("h1").textContent = "Draw !";
  }
}
