var startButton = document.querySelector("#startbtn");
var questionContainerElement = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerButtonElement = document.querySelector("#answer-buttons");
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;
var currentQuestion = 0;
var Score = 1;
var userScore = document.querySelector(".userScore");

startButton.addEventListener("click", startGame);

function startGame() {
  startTimer();
  timerCount = 100;
  nextQuestion();
  startButton.style.display = "none";
}

function startTimer() {
  timer = setInterval(() => {
    timerCount--;
    timerElement.textContent = timerCount;
    console.log(timerElement.textContent);
    if (timerCount <= 0) {
      clearInterval(timer);
      alert("Time has run out!");
    }
  }, 1000);
}

function nextQuestion() {
  if (currentQuestion >= questions.length) {
    return endGame();
  } else answerButtonElement.innerHTML = "";
  var firstQuestion = questions[currentQuestion];
  questionElement.textContent = firstQuestion.question;
  for (let index = 0; index < firstQuestion.answers.length; index++) {
    var newButtonElement = document.createElement("button");
    newButtonElement.classList = ["btn", "bg-primary", "border-dark"];
    const element = firstQuestion.answers[index];
    newButtonElement.textContent = element.text;
    newButtonElement.addEventListener("click", function () {
      console.log("index", index);
      selectAnswer(index);
    });
    answerButtonElement.appendChild(newButtonElement);
  }
}

function selectAnswer(selected) {
  var answerStatus = questions[currentQuestion].answers[selected].correct;
  if (answerStatus === true) {
    userScore.textContent = Score;
    Score++;
    console.log(Score);
  } else {
    timerCount -= 10;
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endGame();
  } else {
    nextQuestion();
  }
}

function endGame() {
  clearInterval(timerCount);
  window.location.href = "highscores.html";
}

var questions = [
  {
    question: "Which of the following is not a mode?",
    answers: [
      { text: "Aeolian", correct: false },
      { text: "Ionian", correct: false },
      { text: "Lydian", correct: false },
      { text: "Phromian", correct: true },
    ],
  },
  {
    question: "How many forms does a minor scale have?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
    ],
  },
  {
    question: "What does a dot do to a note's value?",
    answers: [
      { text: "Extends the value by half", correct: true },
      { text: "Decreases the value by half", correct: false },
      { text: "Doubles the note's value", correct: false },
      { text: "Doesn't change the note's value at all.", correct: false },
    ],
  },
  {
    question: "How do we characterize a chord?",
    answers: [
      { text: "The number of notes in the chord.", correct: false },
      {
        text: "The distance between the notes within the chord.",
        correct: false,
      },
      {
        text:
          "The root of the chord structure and its relationship to placement within the chord.",
        correct: false,
      },
      { text: "All of the above.", correct: true },
    ],
  },
  {
    question:
      "What does the top number of a time signature tell the performer?",
    answers: [
      { text: "How many notes per measure.", correct: false },
      { text: "How many beats per measure.", correct: true },
      { text: "How many beats per minute.", correct: false },
      { text: "The type of note that gets the beat.", correct: false },
    ],
  },
  {
    question:
      "What does the bottom number of a time signature tell the performer?",
    answers: [
      { text: "How many notes per measure.", correct: false },
      { text: "How many beats per measure.", correct: false },
      { text: "How many beats per minute.", correct: false },
      { text: "The type of note that gets the beat.", correct: true },
    ],
  },
];

localStorage.setItem("Final Score", JSON.stringify(Score);