const decreBtn = document.querySelector('[data-action="decrement"]');
const increBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

let counterValue = 0;

const decreClick = () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
};

const increClick = () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
};

decreBtn.addEventListener('click', decreClick);
increBtn.addEventListener('click', increClick);
