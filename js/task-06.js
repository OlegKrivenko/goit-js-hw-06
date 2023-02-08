const textInput = document.querySelector('#validation-input');
const lengthInput = Number(textInput.dataset.length);

const validationInput = () => {
  if (textInput.value.split('').length === lengthInput) {
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
  }
};

const resetValidationClass = () => {
  textInput.classList.remove('valid');
  textInput.classList.remove('invalid');
};

textInput.addEventListener('blur', validationInput);
textInput.addEventListener('focus', resetClass);
