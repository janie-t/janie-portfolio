//first, print the letters that have been entered on the screen
function newNameProcess (){
  var firstLetter = document.newNameForm.firstLetter.value;
  var secondLetter = document.newNameForm.secondLetter.value;
  var thirdLetter = document.newNameForm.thirdLetter.value;
  var nameLetters = '<div>Using these letters: ' + " " + firstLetter + ", " + secondLetter + ", " + thirdLetter  + '</div>';
  document.getElementById('letters').innerHTML = nameLetters;
}
