var nameInput = document.querySelector("#name-input");
var submitBtn = document.querySelector(".button");
var finalScore = document.querySelector("score");
var highScoreEl = document.querySelector("#highScore");
var finalCelebration = document.querySelector("#celebration");

if (localStorage.getItem("usersHighScores") === null) {
  localStorage.setItem("usersHighScores", JSON.stringify([]));
}

var highScore = localStorage.getItem("finalScore");

highScoreEl.textContent = highScore;

submitBtn.addEventListener("click", function () {
  var userID = nameInput.value;

  console.log(highScore);
  var readScores = JSON.parse(localStorage.getItem("usersHighScores"));
  readScores.push(highScore + " " + userID);

  localStorage.setItem("usersHighScores", JSON.stringify(readScores));
  displayScore();
});

function displayScore() {
  var readScores = JSON.parse(localStorage.getItem("usersHighScores"));
  for (let i = 0; i < readScores.length; i++) {
    finalCelebration.innerHTML += "<p>" + readScores[i] + "</p>";
  }
}

//User Score should be pulled and displayed on screen

//Input field card for user's name to track high scores

//clicking submit puts the user's score and name into localStorage

//displays list of all users' scores contained in localStorage, in value order highest -> lowest
