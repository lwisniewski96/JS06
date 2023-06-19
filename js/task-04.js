let value = document.querySelector("#value");
let counterValue = 0;
const butDec = document.querySelector('[data-action="decrement"]');
const butInc = document.querySelector('[data-action="increment"]');
butDec.addEventListener("click", function () {
  counterValue -= 1;
  value.textContent = counterValue;
});
butInc.addEventListener("click", function () {
  counterValue += 1;
  value.textContent = counterValue;
});
