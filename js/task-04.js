let counterValue = 0;

const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

btnInc.addEventListener("click", function add() {
  counterValue += 1;
  value.textContent = counterValue;
});

btnDec.addEventListener("click", function () {
  counterValue -= 1;
  value.textContent = counterValue;
});
