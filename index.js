var randomNumber1 = Math.floor(Math.random() * 6);
var leftPics = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var randomPics1 = leftPics[randomNumber1];
document.querySelector("img.img1").setAttribute("src", randomPics1);



var randomNumber2 = Math.floor(Math.random() * 6);
var randomPics2 = leftPics[randomNumber2];
document.querySelector("img.img2").setAttribute("src", randomPics2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩PLAYER 1 WINS!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS!🚩";
}
else {
  document.querySelector("h1").innerHTML = "DRAW!";
}
