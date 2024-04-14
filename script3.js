let input = document.getElementById("input");
let button = document.getElementById("button");
let reset = document.getElementById("reset");
let myh3 = document.getElementById("myh3");

let min = 1;
let max = 100;
let guess = Math.floor(Math.random() * (max - min + 1)) + min;

button.addEventListener("click", function() {
  let userGuess = input.value;

  if (userGuess == guess) {
    myh3.innerHTML = "Correct!";
  } else if (userGuess > guess) {
    myh3.innerHTML = "quess a lower number!";
  } else {
    myh3.innerHTML = "quess a higher number!";
  } 
});

reset.addEventListener("click", function() {
  input.value = "";
  myh3.innerHTML = "";
  guess = Math.floor(Math.random() * (max - min + 1)) + min;
});