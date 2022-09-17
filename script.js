const firstName = document.querySelector('[name="first_name"]');
const lastName = document.querySelector('[name="last_name"]');
const email = document.querySelector('[name="email"]');
const phone = document.querySelector('[name="phone_number"]');
const password = document.querySelector('[name="password"]');
const confirmPassword = document.querySelector('[name="confirm_pwd"]');
const submit = document.querySelector('button');

const passwordError = document.getElementById("passwordError");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");

const formFields = document.querySelectorAll('input');

const myForm = document.querySelector('form');
myForm.noValidate = true;

myForm.addEventListener('submit', validateForm);

formFields.forEach(field => {
  field.addEventListener('blur', () => {
    field.classList.remove('invalid');
    field.nextElementSibling.classList.remove('visible');
  })

});

function validateForm(e) {
  const form = e.target;
  const fields = Array.from(form.elements);
 
  fields.forEach(field => {
    field.setCustomValidity('');
    field.classList.remove('invalid');
    field.nextElementSibling.classList.remove('visible');
  })

  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopImmediatePropagation();

    fields.forEach(field => {
      if (!field.checkValidity()) {
        field.classList.add('invalid');
        field.nextElementSibling.classList.add('visible');
      }

    });
  } 


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