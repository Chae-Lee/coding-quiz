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

// Timer function variables
var timeEl = document.getElementsByClassName('timer')
var countDownEl = document.getElementById ('time');
var secondsLeft = 60;

//Accessing the start button, adding function to startQuiz when button is clicked. 
var startBtn = document.getElementById ('start');
startBtn.addEventListener ("click", startQuiz);

// Function to start the quiz: when btn is clicked the first question appears. 
function startQuiz (event){

  setTime();

  //call function to display first question  & display array of answers 
  for (var i = 0; i<quiz.length ; i++){
    console.log (quiz[i].question);
    var quizEl = document.getElementById ('questions');
    document.textContent = 'quizEl';
    console.log (quizEl);
      for (var i=0; i<quiz.choices.length; i++){
        var answerEl = document.getElementById ('choices');
    
      }}

// need to clear the current text and display the question and answers 

}

/*
something to display this to the page 
for loop of the choices 
choices make them into the button .setAttribute('type', 'button');
if/else within that for loop of choices to the correctAnswer 
*/


// Function to make all the array of answers buttons 
//or addEventListener for 'class= choices' from HTML as a clickable button 
function makeButtons(button){
  for (var i = 0 ; i<button.length; i++){

  }
}


//Function to call questions 
function displayingQuestions (){
  for (var i = 0; i< questions.length; i++){
    // get rid of the previous question 
  document.textContent = questions.questionOne;
  var qOne = answer.answerOne
  // this if/else statement needs to go into a function for the first question (repeat for all 5 questions)
  if (qOne === correctAnswer.answer1) {
    // move onto the next question 
  } else {
    //10 seconds reduction on the timer 
  }  }
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

//End Screen message pop up
function endScreenMsg (){

}

//if/else statement - using array location eg. if questionOne[1] is the right answer then move onto next question 
// else -> then subtract 10 seconds from the total time. 

// Function to clear the previous question and show the next question + answers when the right answer is clicked 
