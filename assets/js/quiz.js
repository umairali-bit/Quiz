var questions = [
  {
    question: "1. Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "2. The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question:
      "3. All Java Programming statements must end with a ____.",
    choices: ["semicolon", "colon", "period", "comma"],
    answer: "semicolon",
  },
  {
    question:
      "4. A boolean value variable can hold ____.",
    choices: ["any character", "any whole number", "any decimal number", "the value of true or false"],
    answer: "the value of true or false",
  },
  {
    question:
      "5. If a loop does not contain within itself a way to terminate, it is called a(n) ____.",
    choices: ["while loop", "do-while loop", "for loop", "infinite loop"],
    answer: "infinite loop",
  },

];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
var intialsEl = document.querySelector("#yourinitials");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#Start");
var questionIndex = 0;
var correctCount = 0;

var time = questions.length * 15;

function startQuiz() {
  timerEl.textContent = time;
  renderQuestion();
}

function hideStart() {
  var welcomeEl = document.querySelector("#Welcome");
  welcomeEl.style.display = 'none';
}


function endQuiz() {
  clearInterval(intervalId);
  var questionEl = document.getElementById("question");
  questionEl.style.display = 'none';

  var optionListEl = document.getElementById("option-list");
  optionListEl.style.display = 'none';

  var timerEl = document.getElementById("timer");
  timerEl.style.display = 'none';

  var questionResultEl = document.getElementById("question-result");
  questionResultEl.style.display = 'none';

  var finalscreenEL = document.getElementById("finalscreen");
  finalscreenEL.style.display = 'block';

  var finalscoreEl = document.getElementById("score");
  finalscoreEl.textContent = correctCount;


}

function updateTime() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

function renderQuestion() {

  if (time == 0) {
    updateTime();
    return;
  }
  updateTime.textContent = time;
  intervalId = setInterval(updateTime, 1000);
  var questionEl = document.getElementById("question");
  questionEl.style.display = 'block';
  questionEl.textContent = questions[questionIndex].question;

  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;

  for (var i = 0; i < choicesLength; i++) {
    var questionListItem = document.createElement("li");
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
  }
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex === questions.length) {
    time = 0;
  }
  renderQuestion();
}

function checkAnswer(event) {
  clearInterval(intervalId);
  if (event.target.matches("li")) {
    var answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContent = "Correct";
      correctCount++;
    } else {
      questionResultEl.textContent = "Incorrect";
      time = time - 15;
      timerEl.textContent = time;
    }
  }
  setTimeout(nextQuestion, 500);
}

function saveScore () {
  var initials = intialsEl.value.trim();
  if (initials !=="") {
      var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
      
      var currentScore = {
        score: correctCount,
        initials: initials
      };

      highscores.push(currentScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));

      window.location.href = "./highScore.html";

  }

}


optionListEl.addEventListener("click", checkAnswer);
startBtn.addEventListener("click", () => {
  hideStart();
  renderQuestion();
}
);

submitBtn.addEventListener("click", saveScore);
