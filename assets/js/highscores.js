//Highscores JS file 

var olEl = document.getElementById ('highscores');
var scoreLists = JSON.parse(localStorage.getItem('scores')) || [];
var clearBtn = document.getElementById ('clear');

for (let i=0; i < scoreLists.length; i++){
  var listEl = document.createElement ('li');
  listEl.textContent = 'Initials: '+ scoreLists[i].initials + ' Scores: ' + scoreLists[i].score;
  olEl.appendChild (listEl);
  console.log (listEl);
}
console.log (scoreLists);

clearBtn.addEventListener ('click', function (){
  localStorage.clear ('scores');
  olEl.innerHTML= "";
});

