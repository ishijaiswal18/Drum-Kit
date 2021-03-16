
var buttons = Array.from(document.getElementsByTagName('button'));

//here buttons is array of all buttons

buttons.forEach(function (element) {
  element.addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

document.addEventListener('keydown', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key) {
  switch (key) {
    case 'w':
      var crash = new Audio('sounds\\crash.mp3');
      crash.play();
      break;
    case 'a':
      var kick = new Audio('sounds\\kick-bass.mp3');
      kick.play();
      break;
    case 's':
      var snare = new Audio('sounds\\snare.mp3');
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio('sounds\\tom-1.mp3');
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio('sounds\\tom-2.mp3');
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio('sounds\\tom-3.mp3');
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio('sounds\\tom-4.mp3');
      tom4.play();
      break;
    default:

  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector('.' + currentkey);
  activeButton.classList.add('pressed');
  setTimeout(function () {
    activeButton.classList.remove('pressed');
  });
}

//then we ran a loop for each element when you click we add a event listener it worked
