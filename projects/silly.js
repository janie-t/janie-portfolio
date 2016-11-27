window.addEventListener("DOMContentLoaded", function() {
  document.getElementById('yes').style.visibility='hidden';
  document.getElementById('name').style.visibility='hidden';
}, false);

//first, print the letters that have been entered on the screen
  function newNameProcess (){
    var firstLetter = document.newNameForm.first.value;
    var secondLetter = document.newNameForm.second.value;
    var thirdLetter = document.newNameForm.third.value;
    var nameLetters = '<div>Using these letters?: ' + " " + firstLetter + ", " + secondLetter + ", " + thirdLetter  + '</div>';
    document.getElementById('letters').innerHTML = nameLetters;
    document.getElementById('yes').style.visibility='visible';

  }

//When 'yes' button is clicked, then start the comparison of letters to names. Start with first letter of First name.
  function useLetters (){

    document.getElementById('name').style.visibility='visible';

    var firstLetter = document.newNameForm.first.value;
    var secondLetter = document.newNameForm.second.value;
    var thirdLetter = document.newNameForm.third.value;

    var firstName;

    switch (firstLetter) {
      case "a":
        firstName="Stinky";
        break;
      case "b":
        firstName="Lumpy";
        break;
      case "c":
        firstName="Buttercup";
        break;
      case "d":
        firstName="Gidget";
        break;
      case "e":
        firstName="Crusty";
        break;
      case "f":
        firstName="Greasy";
        break;
      case "g":
        firstName="Fluffy";
        break;
      case "h":
        firstName="Cheeseball";
        break;
      case "i":
        firstName="Chim-chim";
        break;
      case "j":
        firstName="Poopsie";
        break;
      case "k":
        firstName="Flunky";
        break;
      case "l":
        firstName="Booger";
        break;
      case "m":
        firstName="Pinky";
        break;
      case "n":
        firstName="Zippy";
        break;
      case "o":
        firstName="Goober";
        break;
      case "p":
        firstName="Doofus";
        break;
      case "q":
        firstName="Slimy";
        break;
      case "r":
        firstName="Loopy";
        break;
      case "s":
        firstName="Snotty";
        break;
      case "t":
        firstName="Falafel";
        break;
      case "u":
        firstName="Dorky";
        break;
      case "v":
        firstName="Squeezit";
        break;
      case "w":
        firstName="Oprah";
        break;
      case "x":
        firstName="Skipper";
        break;
      case "y":
        firstName="Dinky";
        break;
      case "z":
        firstName="Zsa-zsa";
        break;
      default:
        alert ("Please enter a lowercase letter");
    }
    document.getElementById('newName').innerHTML=firstName + " ";


    var secondName;

    switch (secondLetter) {
      case "a":
        secondName="Diaper";
        break;
      case "b":
        secondName="Toilet";
        break;
      case "c":
        secondName="Giggle";
        break;
      case "d":
        secondName="Bubble";
        break;
      case "e":
        secondName="Girdle";
        break;
      case "f":
        secondName="Barf";
        break;
      case "g":
        secondName="Lizard";
        break;
      case "h":
        secondName="Cheeseball";
        break;
      case "i":
        secondName="Waffle";
        break;
      case "j":
        secondName="Monkey";
        break;
      case "k":
        secondName="Potty";
        break;
      case "l":
        secondName="Liver";
        break;
      case "m":
        secondName="Banana";
        break;
      case "n":
        secondName="Rhino";
        break;
      case "o":
        secondName="Burger";
        break;
      case "p":
        secondName="Hamster";
        break;
      case "q":
        secondName="Toad";
        break;
      case "r":
        secondName="Gizzard";
        break;
      case "s":
        secondName="Pizza";
        break;
      case "t":
        secondName="Gerbil";
        break;
      case "u":
        secondName="Chicken";
        break;
      case "v":
        secondName="Pickle";
        break;
      case "w":
        secondName="Chuckle";
        break;
      case "x":
        secondName="Tofu";
        break;
      case "y":
        secondName="Gorilla";
        break;
      case "z":
        secondName="Stinker";
        break;
      default:
        alert ("Please enter a lowercase letter");
    }
    document.getElementById('newName').innerHTML+=secondName;







  }
