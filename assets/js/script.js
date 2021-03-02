
var question = document.getElementById("question");

var startButton = document.getElementById("start-button"); 
var quiz = document.getElementById("quiz");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");

var runningQuestion = 0;

var scoreBox = document.getElementById("score-box");
var rightOrWrong = document.getElementById("right-or-wrong")

var score = document.getElementById("score"); 
var score = 0;  

var timer; 
var timerElement = document.getElementById("timer-count");
var timerCount = 60; 

var highscoreList = document.getElementById("highscore-list");
var scoreList = document.getElementById("highscores");

quiz.style.display = "none";
timerElement.style.display = "none";
scoreBox.style.display = "none"; 
highscoreList.style.display = "none";
 

var questions = [

    {
      question: "The logical operator that represents 'or' is _______.",
        choiceA: "&&",
        choiceB: "==",
        choiceC: "||", 
        correct: "C"
    }, {
      question: "The condition of an if/else statement is enclosed within ________.",
        choiceA: "curly brackets",
        choiceB: "quotes",
        choiceC: "parentheses",
        correct: "C"
    }, {
      question: "Primitive data types DO NOT include _______.",
        choiceA: "symbols",
        choiceB: "alerts",
        choiceC: "booleans",
        correct: "B"
    }, {
      question: "String values must be enclosed within _________ when being assigned to variables.",
        choiceA: "quotes",
        choiceB: "parentheses",
        choiceC: "square brackets", 
        correct: "A"
    }, {
      question: "Math.random() returns ______.",
        choiceA: "A number between 1 and 9",
        choiceB: "A number between 0 and 99",
        choiceC: "A number between 0 and 1",
        correct: "C"
    }, {
      question: "Which of these functions can remove or replace an existing element of an array?",
        choiceA: ".sort()",
        choiceB: ".splice()",
        choiceC: ".merge()",
        correct: "B"
    }, {
      question: "What does DOM stand for?",
        choiceA: "'Display Object Management",
        choiceB: "'Desktop Oriented Mode",
        choiceC: "'Document Object Model'", 
        correct: "C"
    }, {
      question: "How do you write 'Hello' in an alert?",
        choiceA: "alert('Hello')",
        choiceB: "(alert(Hello))",
        choiceC: "alert(Hello)",
        correct: "A"
    }, {
      question: "What is string concatenation?",
        choiceA: "Changing the value of a string",
        choiceB: "Joining strings together",
        choiceC: "Printing strings to the console",
        correct: "B"
    }, {
      question: "What element in HTML contains the visible page content?",
        choiceA: "<head>",
        choiceB: "<html>",
        choiceC: "<body>", 
        correct: "C"
    }, {
      question: "Which of these is not a way to declare a variable?",
        choiceA: "const",
        choiceB: "var",
        choiceC: "set",
        correct: "C"
    }, {
      question: "Which built-in method adds one or more elements to the end of an array?",
        choiceA: ".pop()",
        choiceB: ".push()",
        choiceC: ".put()",
        correct: "B"
    }
  ];

// Displays time remaining 
function displayTime(timeToDisplay) {
  timerElement.textContent = timeToDisplay + " seconds remaining"; 
}

// Start timer
function startTimer() {
    // Set and display timer 
    displayTime(timerCount); 
    timer = setInterval(function() {
        timerCount--;
        displayTime(timerCount); 
        // Stop quiz when no time remaining 
        if (timerCount <= 0) {
            clearInterval(timer);
            endQuiz(); 
            // Start timer at 60 seconds 
            timerCount = 60; 
        }
    }, 1000)
}

// Insert questions and answer choices into quiz 
function askQuestion() {
    var q = questions[runningQuestion];
    question.textContent = q.question; 
    choiceA.textContent = "A. " + q.choiceA;
    choiceB.textContent = "B. " + q.choiceB;
    choiceC.textContent = "C. " + q.choiceC;
    choiceA.textContent = "A. " + q.choiceA;
    choiceB.textContent = "B. " + q.choiceB;
    choiceC.textContent = "C. " + q.choiceC;
    choiceA.textContent = "A. " + q.choiceA;
    choiceB.textContent = "B. " + q.choiceB;
    choiceC.textContent = "C. " + q.choiceC;
    choiceA.textContent = "A. " + q.choiceA;
    choiceB.textContent = "B. " + q.choiceB;
    choiceC.textContent = "C. " + q.choiceC;
} 

var lastQuestion = questions.length - 1;

// Start questions and timer
function startQuiz() {
    score = 0; 
    runningQuestion = [0]; 
    // Show active elements and hide inactive elements 
    timerElement.style.display = "block";
    startButton.style.display = "none";
    scoreBox.style.display = "none"; 
    quiz.style.display = "block";
    rightOrWrong.style.display = "block";
    rightOrWrong.textContent = "";
    highscoreList.style.display = "none";
    startTimer();
    askQuestion();   
}

// Start quiz when button is clicked 
startButton.addEventListener("click", startQuiz); 

// End quiz when timer reaches 0 
function endQuiz() {
    // Show active elements and hide inactive elements 
    quiz.style.display = "none";
    timerElement.style.display = "none";
    rightOrWrong.style.display = "none";
    startButton.style.display = "inline-block";
    scoreBox.style.display = "block"; 
}

// Check answer and moves to the next question
function checkAnswer(answer) {
    if(questions[runningQuestion].correct === answer) {
        // If answer is correct, increase score by 1 
        score++;
        console.log(score);
        correct();
        displayScore();
    } else {
        // If answer is wrong, subtract 9 seconds(+ 1 incremented by timer)
        incorrect(); 
        timerCount -= 9;
    }
    // If not on the last question, move to the next question
    if (runningQuestion < lastQuestion) {
        count = 0; 
        runningQuestion ++;
        askQuestion();
      // If on last question, end quiz 
    } else {
           endQuiz();
    }
  }

// Display answer is correct 
function correct() {
  document.getElementById("right-or-wrong").textContent = "Correct!"
}

// Display answer is incorrect 
function incorrect() {
  document.getElementById("right-or-wrong").textContent = "Incorrect!"
}

// Display score at the end of the game 
function displayScore() {
  document.getElementById("score").textContent = "You got " + score + " questions right!";
}

// Adds score to highscore list 
function addScore(userInput) {

  var input = document.getElementById("user-input").value;

  if (input) {
    var highScores = JSON.parse(localStorage.getItem("highscoreList")) || [];

    var finalScore = {
      Initials: input,
      Score: score
    }
      // Add newest score 
      highScores.push(finalScore);
      // Sort scores from highest to lowest 
      highScores.sort(function(val1, val2){
        return val2.Score - val1.Score; 
      })
      // Keep 10 highest scores 
      highScores = highScores.filter(function(score, index) {
        return index < 10; 
      })
      console.log(highScores);  
      // Store new highscore list in local storage 
      localStorage.setItem("highscoreList", JSON.stringify(highScores));
  }
    showScore();
}

document.getElementById("submit-button").addEventListener("click", addScore);

function showScore() {
  // Display highscore list 
  highscoreList.style.display = "block";
  scoreBox.style.display = "none"; 
  // Retrieve highscore list from local storage 
  var highScores = JSON.parse(localStorage.getItem("highscoreList")) || [];
  scoreList.innerHTML = "";
  for (var i =  0; i < highScores.length; i++) {
    var currentScore = highScores[i];
    console.log(i, currentScore);
    // Build highscore list 
    scoreList.innerHTML = scoreList.innerHTML + "<li>" + currentScore.Initials + ":" + currentScore.Score + "</li>"
  }
}

// Clears highscore list and local storage
function clearScore() {
  localStorage.clear();
  showScore();
}
document.getElementById("clear-scores").addEventListener("click", clearScore);