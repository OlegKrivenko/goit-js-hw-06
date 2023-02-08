const inputRange = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

const changeFontSize = event => {
  textSpan.style.fontSize = `${event.currentTarget.value}px`;
};

inputRange.addEventListener('input', changeFontSize);
