// Disable default validation
const myForm = document.querySelector('form');
myForm.noValidate = true;

myForm.addEventListener('submit', validateForm);

function validateForm(e) {
  const password = document.querySelector('[name="password"]');
  const confirmPassword = document.querySelector('[name="confirm_pwd"]');
  const passwordError = document.getElementById("passwordError");
  const submit = document.querySelector('button');
  const form = e.target;
  const inputs = Array.from(form.elements);
 
  inputs.forEach(field => {
    field.setCustomValidity('');
    field.classList.remove('invalid');
    field.nextElementSibling.classList.remove('visible');
  })

  // Form validation
  
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopImmediatePropagation();

    inputs.forEach(field => {
      if (!field.checkValidity()) {
        field.classList.add('invalid');
        field.nextElementSibling.classList.add('visible');
      }
    });
  } 

  // Check if password match

  if (password.checkValidity() && password.value != confirmPassword.value) {
    e.preventDefault();
    passwordError.classList.add('visible');
    password.classList.add('invalid');
    confirmPassword.classList.add('invalid');
  }
  else if (password.checkValidity() && password.value == confirmPassword.value) {
    passwordError.classList.remove('visible');
    password.classList.remove('invalid');
    confirmPassword.classList.remove('invalid');
  }
}