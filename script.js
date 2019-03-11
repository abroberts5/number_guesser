var max = 100
var min = 1
var anwser = randomNumber(max, min)
var submit = document.querySelector('.submit')
var clear = document.querySelector('.clear')
var reset = document.querySelector('.reset')
var updateRange = document.querySelector('.change-range')
// create variables to event listener when user clicks on page, put at the top
// to show how it will be used throughout the code.

submit.addEventListener('click', submitGuess)
clear.addEventListener('click', clearField)
updateRange.addEventListener('click',editRange)

function randomNumber(max, min) {
  return Math.floor(Math.random() * max) + min
}
// use random function to choose number between variable floor min and max

function submitGuess() {
  var guess = document.querySelector('.guess').value;
  reset.removeAttribute('disabled', true);
  clear.removeAttribute('disabled', true);
  feedback()
}
// identify user input from guess class and change background color, returns feedback function

function clearField() {
  document.querySelector('.guess').value = ' ';
}
// resets the field back to blank response

function feedback(){
  var guess = document.querySelector('.guess').value
  document.querySelector('.previous-guess').innerHTML = "Your previous guess was " + guess
  if (guess > anwser && guess <= max){
  document.querySelector('.feedback').innerHTML = "That is too high"
  }
  else if (guess < anwser && guess >= min ){
    document.querySelector('.feedback').innerHTML = "That is too low"
  }
  else if (guess > max || guess < min){
    document.querySelector('.feedback').innerHTML = "That is out of the range"
  }
  else if (guess == anwser) {
    document.querySelector('.feedback').innerHTML = "BOOM!"
    levelUp()
  }
  else {
    document.querySelector('.previous-guess').innerHTML = "Your previous guess was not a number "
    document.querySelector('.feedback').innerHTML = "invalid input"
  }
}
// used "if" statements to respond to user input, seems like the best way to
// respond dynamically to input and reset if incorrect guess. Using ES5 functions
// because it's more readable.

function editRange(){
  var newMax = document.querySelector('.new-max').value
  var newMin = document.querySelector('.new-min').value
  if (newMax > max) {
    max = newMax
  }
  if (newMin < min) {
    min = newMin
  }
}
// part 3 of the instructions to set new max and min if response recorded correctly

function levelUp(){
  max = max +10;
  min = min -10;
  anwser = randomNumber(max, min);
  document.querySelector('.level-up').innerHTML = "You have guessed correct. The range has increased by 10 on each side of the range. "
}
// function used at the end of correct statement
