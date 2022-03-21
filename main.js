let decreaseButton = document.querySelector(".decrease");
let resetButton = document.querySelector(".reset");
let increaseButton = document.querySelector(".increase");
let currentNumber = document.querySelector("span");

let counter = 0;

resetButton.onclick = function () {
  counter = 0;
  currentNumber.innerText = counter;
};

decreaseButton.onclick = function () {
  --counter;
  currentNumber.innerText = counter;
};

increaseButton.onclick = function () {
  ++counter;
  currentNumber.innerText = counter;
};
