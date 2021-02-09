var initials = document.querySelector(".initials");
var submitBtn = document.querySelector("submit");
var score = document.querySelector("score");

var userID = {
  User: initials.value.trim(),
  Grade: score.value.trim(),
};

localStorage.setItem("userID", JSON.stringify(userID));
