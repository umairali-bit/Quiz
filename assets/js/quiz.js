var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      question:
        "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
    {
      question:
      "Arrays in JavaScript can be used to store:",
      choices: ["numbers and strings", "other arrays","booleans", "all of the above" ],
      answer:"numbers and strings"
    },
    {
     question:
     "If a loop does not contain within itself a way to terminate, it is called a(n) ____.",
     choices: ["while loop", "do-while loop", "for loop", "infinite loop"],
     answer: "infinite loop",
    }
  ];
  
  var introEl = document.querySelector("intro");
  var introHeadingEl = document.querySelector("intro-heading");
  var intropEl = document.querySelector("intro-p");
  var buttonEl = document.querySelector("button");
  var buttonStEl = document.getElementById("button-start");
  var timerEl = document.querySelector("#timer");
  var questionEl = document.querySelector("#question");
  var optionListEl = document.querySelector("#option-list");
  var questionResultEl = document.querySelector("#question-result");
  var timerEl = document.querySelector("#timer");

  function timer() {
    var time = 75;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // As long as the `time` is greater than 1
      if (time > 0) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = 'Time: ' + time;
        // Decrement `time` by 1
        time--;
      
      } else if (time === 0){
        // Once `time` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        
      }
    }, 1000);
  }

  buttonStEl.onclick = timer;
  


  