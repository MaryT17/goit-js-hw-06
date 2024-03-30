const loginForm = document.querySelector('.login-form');

function handleFormSubmit(event) {
  event.preventDefault();

  const formElements = event.target.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (!email || !password) {
    alert('All fields must be filled in.');
  } else {
    const formData = { email, password };

    console.log(formData);

    loginForm.reset();
  }
}

loginForm.addEventListener('submit', handleFormSubmit);
