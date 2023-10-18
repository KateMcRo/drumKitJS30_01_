// Function to play the sound on related keydowns
function playSound(e) {
  // Variable associating the key code from the keydown to an audio file
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // Variable used to add/remove classes for button animation
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // If there is no audio associated with the key code, stop the function
  if (!audio) return;
  // Reset the audio file so that it plays from the start each time the key is pressed
  audio.currentTime = 0;
  audio.play();
  // Adding this class is what enables the button animation
  key.classList.add("playing");
}

// Function to remove transition effect
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

// Listens for all keys
const keys = document.querySelectorAll(".key");
// Loops over all elements and attatches event listener
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// Added event listener for keydowns
window.addEventListener("keydown", playSound);
