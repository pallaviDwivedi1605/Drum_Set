for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var valueOfButton = this.innerHTML;
    checkButton(valueOfButton);
    buttonAnimation(valueOfButton);
  });

  // adding listener to button
  document.addEventListener("keypress", function (event) {
    checkButton(event.key);
    buttonAnimation(event.key);
  });
}

//to play audio of given link
function playAudio(audioLink) {
  this.audioLink = audioLink;
  var audio = new Audio(audioLink);
  audio.play();
}

//adding sound to key
function checkButton(valueOfButton) {
  switch (valueOfButton) {
    case "w":
      playAudio("./Sounds/tom-1.mp3");
      break;
    case "a":
      playAudio("./Sounds/tom-2.mp3");
      break;
    case "s":
      playAudio("./Sounds/tom-3.mp3");
      break;
    case "d":
      playAudio("./Sounds/tom-4.mp3");
      break;
    case "j":
      playAudio("./Sounds/snare.mp3");
      break;
    case "k":
      playAudio("./Sounds/crash.mp3");
      break;
    case "l":
      playAudio("./Sounds/kick-bass.mp3");
      break;
    default:
      console.log(valueOfButton);
      break;
  }
}

//applying animation to key
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
