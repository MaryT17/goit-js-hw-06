const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const isValid =
    validationInput.value.length === +validationInput.dataset.length;

  validationInput.classList.add(isValid ? 'valid' : 'invalid');
  validationInput.classList.remove(isValid ? 'invalid' : 'valid');
});
