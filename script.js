//Pseudocoding Code Quiz Challenge
/*
- timed (countdown)
- multiple choice questions (min 5 questions)
- stores high scores (local storage)

1) Display start button 
2) When 'START' button is clicked (addEventListener to the Start button)
  - timer starts (timers interval - 'setInterval')
  - first question appears ('addEventListener' - IF 'Start button' is 'CLICKED' display first question)
  (click event - pull the first question from the document.querySelector/getElementByID)
3) Questions (add questions into the HTML file)
- these actions can be applied to the parent element (click, timer)
  - contains buttons for each answer (addEventListener)
  - when answer is 'CLICKED' the next question appears (If/else statement)
    - display message "Correct Answer"
  - when incorrect answer is 'CLICKED' the time 'SUBTRACTS' from the timer. (setInterval & If/Else statement)
    - display message "Wrong Answer"
4) Quiz ends 
  - If all the answers are answered (If/else statement)
  - OR Timer reaches 0 (If/else statement)
    - display message "You ran out of time!"
5) End of Game 
  - Display player's score (need to pull remaining time from the page as a score)
  - Give user the ability to save their initials and their score
  (Use Data Storage 'data-*' so that the user input is stored unless 'Clear High Scores' button is pressed)
  - separate highscores HTML file is used for this action
  - when 'Clear High Scores' button is pressed (addEventListener for when this button is clicked, clear the score display)
*/