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

  }

//When 'yes' button is clicked, then start the comparison of letters to names. Start with first letter of First name.
  function useLetters (){

  }
