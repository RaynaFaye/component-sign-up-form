const form = document.querySelector('.container__form-box');
const tooltipFirst = document.querySelector('.tooltip-first');
const tooltipLast = document.querySelector('.tooltip-last');
const tooltipEmail = document.querySelector('.tooltip-email');
const tooltipPassword = document.querySelector('.tooltip-password');
const errorFirst = document.querySelector('.error-first');
const errorLast = document.querySelector('.error-last');
const errorEmail = document.querySelector('.error-email');
const errorPassword = document.querySelector('.error-password');
const border = '1px solid hsl(246, 25%, 77%)';
const borderError = '2px solid hsl(0, 100%, 74%)';
const color = 'hsl(249, 10%, 26%)';
const colorError = 'hsl(0, 100%, 74%)';

//Version that does all validation on form submit
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  const firstName = form.firstname.value;
  const lastName = form.lastname.value;
  const email = form.email.value;
  const password = form.password.value;
  if (firstName.trim().length === 0) {
    tooltipFirst.style.display = 'block';
    errorFirst.style.display = 'block';
    form.firstname.style.border = borderError;
    form.firstname.style.color = colorError;
  } else {
    tooltipFirst.style.display = 'none';
    errorFirst.style.display = 'none';
    form.firstname.style.border = border;
    form.firstname.style.color = color;
  }
  if (lastName.trim().length === 0) {
    tooltipLast.style.display = 'block';
    errorLast.style.display = 'block';
    form.lastname.style.border = borderError;
    form.lastname.style.color = colorError;
  } else {
    tooltipLast.style.display = 'none';
    errorLast.style.display = 'none';
    form.lastname.style.border = border;
    form.lastname.style.color = color;
  }
  if (email.trim().length === 0 || !regexEmail.test(email)) {
    tooltipEmail.style.display = 'block';
    errorEmail.style.display = 'block';
    form.email.style.border = borderError;
    form.email.style.color = colorError;
  } else {
    tooltipEmail.style.display = 'none';
    errorEmail.style.display = 'none';
    form.email.style.border = border;
    form.email.style.color = color;
  }
  if (password.trim().length === 0) {
    tooltipPassword.style.display = 'block';
    errorPassword.style.display = 'block';
    form.password.style.border = borderError;
    form.password.style.color = colorError;
  } else {
    tooltipPassword.style.display = 'none';
    errorPassword.style.display = 'none';
    form.password.style.border = border;
    form.password.style.color = color;
  }
  if (
    firstName.trim().length !== 0 &&
    lastName.trim().length !== 0 &&
    email.trim().length !== 0 &&
    regexEmail.test(email) &&
    password.trim().length !== 0
  ) {
    form.reset();
  }
});
