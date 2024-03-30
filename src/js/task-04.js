const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

function updateValueDisplay() {
  valueEl.textContent = counterValue;
}

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  updateValueDisplay();
});

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateValueDisplay();
});
