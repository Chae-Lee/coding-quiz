//Pseudocoding Code Quiz Challenge
/*
Criteria of the overall Quiz
- timed (countdown)
- multiple choice questions (min 5 questions)
- stores high scores (local storage)

1) Display start button 
2) When 'START' button is clicked (addEventListener to the Start button) - FUNCTION for start of the quiz
  -> timer starts (timers interval - 'setInterval')
  -> clear the initial start-screen 
  -> first question with the multiple choice answers appear ('addEventListener' - IF 'Start button' is 'CLICKED' display first question)
  (click event - pull the first question from the document.querySelector/getElementByID)
3) Questions (add questions into the HTML file from JS)
-> these actions can be applied to the parent element (click, timer)
-> if/else statement needs to be written for individual questions. (to identify which answer is correct)
  -> contains buttons for each answer (addEventListener)
  -> when answer is 'CLICKED' the next question appears (If/else statement)
    -> display message "Correct Answer"
  -> when incorrect answer is 'CLICKED' the time 'SUBTRACTS' from the timer. (setInterval & If/Else statement)
    -> display message "Wrong Answer"
4) Quiz ends 
  -> If all the answers are answered (If/else statement)
  -> OR Timer reaches 0 (If/else statement)
    -> display message "You ran out of time!"
5) End of Game 
  -> Display player's score (need to pull remaining time from the page as a score)
  -> Give user the ability to save their initials and their score
  (Use Data Storage 'data-*' so that the user input is stored unless 'Clear High Scores' button is pressed)
  -> separate highscores HTML file is used for this action
  -> when 'Clear High Scores' button is pressed (addEventListener for when this button is clicked, clear the score display)
*/

//Array of objects - Questions & Answers
var quiz = [
  {
    question:"Commonly used data types DO NOT include: ", 
    choices: ['strings', 'boolean', 'numbers', 'alerts'],
    correctAnswer:'alerts',
    },
  {
    question: "The condition in an if/else statement is enclosed within _____. ", 
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'], 
    correctAnswer: 'parentheses',
    },
  {
    question: "Arrays in JavaScript can be used to store____. ", 
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: 'all of the above',
    },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.", 
    choices: ['commas', 'curly brackets', 'quotes', 'parenthese'], 
    correctAnswer: 'quotes',
    },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:  ",
    choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
    correctAnswer: 'console.log',
    }]
var results = 0;

// console.log (quiz);
// console.log (quiz[0].question);
// console.log (quiz[0].choices);
// console.log (quiz[0].correctAnswer);
// console.log (quiz.length);

// Timer function variables
var countDownEl = document.getElementById ('time');
var secondsLeft = 60;

// Global Variables
var startBtn = document.getElementById ('start');
var startScreenEl = document.getElementById ('start-screen');
var questionsEl = document.getElementById ('questions');
var quizEl = document.getElementById ('question-title');
var choicesBtn = document.getElementById ('choices');
var feedbackEl = document.getElementById ('feedback');
var endScreenEl = document.getElementById ('end-screen');
var questionIndex = 0;
var timerInterval;


//Accessing the start button, adding function to startQuiz when button is clicked. 
startBtn.addEventListener ("click", startQuiz);

// Function to start the quiz: when btn is clicked the first question appears. 
function startQuiz (){
  startScreenEl.classList.add ('hide');
  setTime();
  displayQuestions ();
}

// Timer Function - countdown begins when the button is clicked 
function setTime (){
  timerInterval = setInterval (function(){
    secondsLeft--;
    countDownEl.textContent = secondsLeft 

    if (secondsLeft=== 0) {
      clearInterval(timerInterval);
      endScreenMsg();
    }
  }, 1000);
}

//Function to display questions
function displayQuestions (){
  if (questionIndex < quiz.length){
      questionsEl.classList.remove('hide');
      choicesBtn.classList.remove ('hide');

      var currentQuestion = quiz[questionIndex];
      quizEl.textContent = currentQuestion.question;
      choicesBtn.innerHTML = '';
    // Iterating through answer choices and creating buttons for each array of answers
      currentQuestion.choices.forEach (function(choice, i){
        console.log (choice);
        var buttonEl = document.createElement ('button');
        buttonEl.setAttribute ('value', choice);
        buttonEl.textContent = choice;
    // Adding a click function to the choice buttons 
        buttonEl.addEventListener ('click', function (){
          clickAnswer (choice);
        })
        choicesBtn.appendChild (buttonEl);
      });
    }
  }

// Function to iterate through questions & answers and respond appropriately when answer is clicked
function clickAnswer (selectedAnswer){
  console.log (selectedAnswer); //selectedAnswers are pulling the choices that are selected from the buttonEl click function
  if (selectedAnswer !== quiz[questionIndex].correctAnswer){
    secondsLeft = secondsLeft - 10;
    feedbackEl.classList.remove ('hide');
    feedbackEl.textContent = "Please try again!";
    countDownEl.textContent = secondsLeft; 
  } else {
    feedbackEl.classList.remove ('hide');
    feedbackEl.textContent = "Correct Answer!"; 
    questionIndex++
    displayQuestions ();
  }

  if (questionIndex >=  quiz.length){
    clearInterval (timerInterval);
    endScreenMsg ();
  } else {

  }
}
console.log (quiz[questionIndex].correctAnswer);

//End Screen message pop up
function endScreenMsg (){
questionsEl.classList.add ('hide');
choicesBtn.classList.add ('hide');
feedbackEl.classList.add ('hide');
endScreenEl.classList.remove ('hide');
var finalScoreEl = document.getElementById ('final-score');
finalScoreEl.textContent = "Your Final Score is " + secondsLeft;
}

var scoreLists = JSON.parse(localStorage.getItem('scores')) || [];

var initialEl = document.getElementById('initials');
var submitBtn = document.getElementById ('submit');
submitBtn.addEventListener ('click', function (){
  var scoreObj = {
    initials: initialEl.value,
    score: secondsLeft,
  }
  scoreLists.push (scoreObj);
  localStorage.setItem("scores", JSON.stringify(scoreLists));
  location.href = "highscores.html";
})