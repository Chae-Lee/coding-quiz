//Pseudocoding Code Quiz Challenge
/*
Criteria of the overall Quiz
- timed (countdown)
- multiple choice questions (min 5 questions)
- stores high scores (local storage)

1) Display start button 
2) When 'START' button is clicked (addEventListener to the Start button) - FUNCTION for start of the quiz
  -> timer starts (timers interval - 'setInterval')
  -> first question appears ('addEventListener' - IF 'Start button' is 'CLICKED' display first question)
  (click event - pull the first question from the document.querySelector/getElementByID)
3) Questions (add questions into the HTML file)
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

//Object/Array of Questions
var questions = {
  questionOne: "Commonly used data types DO NOT include: ", 
  questionTwo:"The condition in an if/else statement is enclosed within _____. ", 
  questionThree: "Arrays in JavaScript can be used to store____. ", 
  questionFour: "String values must be enclosed within ____ when being assigned to variables.", 
  questionFive: "A very useful tool used during development and debugging for printing content to the debugger is:  "
};

//Object/Array of Answers 
var answers = {
  answerOne:['strings', 'boolean', 'numbers', 'alerts'], 
  answerTwo : ['quotes', 'curly brackets', 'parentheses', 'square brackets'], 
  answerThree :['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
  answerFour: ['commas', 'curly brackets', 'quotes', 'parenthese'], 
  answerFive : ['JavaScript', 'terminal/bash', 'for loops', 'console.log']
};

var correctAnswer1 = answers.answerOne[3];
var correctAnswer2 = answers.answerTwo [2];
var correctAnswer3 = answers.answerThree[3];
var correctAnswer4 = answers.answerFour [2];
var correctAnswer5 = answers.answerFive [3];

if (correctAnswer1 === "alerts") {
  // move onto the next question 
} else {
  //10 seconds reduction on the timer 
}

//if/else statement - using array location eg. if questionOne[1] is the right answer then move onto next question 
// else -> then subtract 10 seconds from the total time. 

//Accessing the start button, adding function to startQuiz when button is clicked. 
var startBtn = document.getElementById ('start');
startBtn.addEventListener ("click", startQuiz);

// Function to start the quiz: when btn is clicked the first question appears. 
function startQuiz (event){
  console.log (event);
  if (startBtn)
}