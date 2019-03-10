var max = 100
var min = 1
var anwser = randomNumber(max, min)
var submit = document.querySelector('.submit')
var clear = document.querySelector('.clear')
var reset = document.querySelector('.reset')
var updateRange = document.querySelector('.change-range')


submit.addEventListener('click', submitGuess)
clear.addEventListener('click', clearField)
updateRange.addEventListener('click',editRange)

function randomNumber(max, min) {
  return Math.floor(Math.random() * max) + min
}



function submitGuess() {
  var guess = document.querySelector('.guess').value;
  reset.removeAttribute('disabled', true);
  clear.removeAttribute('disabled', true);
  feedback()
}

function clearField() {
  document.querySelector('.guess').value = ' ';
}

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

function levelUp(){
  max = max +10;
  min = min -10;
  anwser = randomNumber(max, min);
  document.querySelector('.level-up').innerHTML = "You have guessed correct. The range has increased by 10 on each side of the range. "
}
