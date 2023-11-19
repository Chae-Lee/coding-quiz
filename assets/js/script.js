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

// Timer function variables
var countDownEl = document.getElementById ('time');
var secondsLeft = 100;

// Variables
var startBtn = document.getElementById ('start');
var startScreenEl = document.getElementById ('start-screen');
var questionsEl = document.getElementById ('questions');
var quizEl = document.getElementById ('question-title');
var choicesBtn = document.getElementById ('choices');
var feedbackEl = document.getElementById ('feedback');
var questionIndex = 0;


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
  var timerInterval = setInterval (function(){
    secondsLeft--;
    countDownEl.textContent = secondsLeft 

    if (secondsLeft=== 0) {
      clearInterval(timerInterval);
      endScreenMsg();
    }
  }, 1000);
}

//Function to call questions 
function displayQuestions (){
  questionsEl.classList.remove('hide');
  choicesBtn.classList.remove ('hide');

  var currentQuestion = quiz[questionIndex];
  quizEl.textContent = currentQuestion.question;
  choicesBtn.innerHTML = '';

  currentQuestion.choices.forEach (function(choice, i){
    console.log (choice);
    var buttonEl = document.createElement ('button');
    buttonEl.setAttribute ('value', choice);
    buttonEl.textContent = choice;
    buttonEl.addEventListener ('click', function (){
      clickAnswer (choice);
    })
    choicesBtn.appendChild (buttonEl);
  })

}

// Correct Answer Function 

function clickAnswer (selectedAnswer){
  if (selectedAnswer !== quiz[questionIndex].correctAnswer){
    secondsLeft -= 10; // shorthand secondsLeft -= 10; secondsLeft =secondsLeft - 10; 
    feedbackEl.classList.remove ('hide');
    feedbackEl.textContent = "Please try again!";
    countDownEl.textContent = secondsLeft; 
  } else {
    feedbackEl.classList.remove ('hide');
    feedbackEl.textContent = "Correct Answer!"; // This message is not showing 
    // figure out why it's reducing time
    questionIndex++
    displayQuestions ();
  }
}
console.log (quiz[questionIndex].correctAnswer);



  // //call function to display first question  & display array of answers 
  // for (var i = 0; i<quiz.length ; i++){
  //   console.log (quiz[i].question);
  //   changeText.textContent = quiz[i].question;
  //   quizEl.textContent = quiz.choices;
  //   answerEl.textContent = quiz.choices;
  //   console.log (answerEl);

  //     for (var i=0; i<quiz.length; i++){ //for loop for the answers
  //       answerEl.textContent = quiz.choices;
  //       console.log (answerEl);
  //     }}



// REMEMBER to append buttonEl to div/id= choices

/*
something to display this to the page 
for loop of the choices 
choices make them into the button .setAttribute('type', 'button');
if/else within that for loop of choices to the correctAnswer 
*/



// //End Screen message pop up
// function endScreenMsg (){


// }

// //if/else statement - using array location eg. if questionOne[1] is the right answer then move onto next question 
// // else -> then subtract 10 seconds from the total time. 

// // Function to clear the previous question and show the next question + answers when the right answer is clicked 
