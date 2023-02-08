function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const nameColor = document.querySelector('.color');
const buttonChangeColor = document.querySelector('button.change-color');

buttonChangeColor.addEventListener('click', bodyChangeColor);

function bodyChangeColor() {
  const hexColor = getRandomHexColor();
  nameColor.textContent = hexColor;
  body.style.backgroundColor = `${hexColor}`;
}
