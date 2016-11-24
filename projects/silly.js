window.addEventListener("DOMContentLoaded", function() {
  document.getElementById('yes').style.visibility='hidden';
  document.getElementById('name').style.visibility='hidden';
}, false);

//first, print the letters that have been entered on the screen
  function newNameProcess (){
    var firstLetter = document.newNameForm.firstLetter.value;
    var secondLetter = document.newNameForm.secondLetter.value;
    var thirdLetter = document.newNameForm.thirdLetter.value;
    var nameLetters = '<div>Using these letters?: ' + " " + firstLetter + ", " + secondLetter + ", " + thirdLetter  + '</div>';
    document.getElementById("letters").innerHTML = nameLetters;
    document.getElementById('yes').style.visibility='visible';
    document.getElementById('name').style.visibility='visible';
  }

//next, compare the letters to a list of names. Do letter one first.
//once finished, will come back and add a function to check if the input data is a letter or if not it will ask the user to try again with a letter between a and z
  function useLetters (){

  }
