var random1 = (Math.floor(Math.random() * 6)) + 1;
var random2 = (Math.floor(Math.random() * 6)) + 1;

var randomDiceImage1 = "images/dice" + random1 + ".png";
var randomDiceImage2 = "images/dice" + random2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImage1);
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (random1 > random2) {
    document.querySelector("h1").innerHTML = " 🚩Player 1 wins";
}
else if (random2 > random1) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else {
    document.querySelector("h1").innerHTML = "DRAW !";
}