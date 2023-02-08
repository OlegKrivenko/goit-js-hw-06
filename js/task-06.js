const textInput = document.querySelector('#validation-input');
const lengthInput = Number(textInput.dataset.length);

function validationInput() {
  if (textInput.value.split('').length === lengthInput) {
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
  }
}

function resetValidationClass() {
  textInput.classList.remove('valid');
  textInput.classList.remove('invalid');
  textInput.value = '';
}

textInput.addEventListener('focus', resetValidationClass);
textInput.addEventListener('blur', validationInput);
