const form = document.querySelector('.login-form');

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const resultObject = {};
  resultObject.email = email.value;
  resultObject.password = password.value;
  console.log(resultObject);

  event.currentTarget.reset();
}
