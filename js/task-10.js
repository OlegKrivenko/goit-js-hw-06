function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxDiv = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  const number = Number(input.value);
  boxDiv.append(...createBoxes(number));
});

btnDestroy.addEventListener('click', () => (boxDiv.textContent = ''));

function createBoxes(amount) {
  let array = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = `${getRandomHexColor()}`;
    array.push(div);
  }

  return array;
}
