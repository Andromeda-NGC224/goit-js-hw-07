`use strict`;

const loginForm = document.querySelector(`.login-form`);

loginForm.addEventListener(`submit`, handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formEmail = form.elements.email.value.trim();
  const formPass = form.elements.password.value.trim();

  if (formEmail === `` || formPass === ``) {
    return alert("All form fields must be filled in");
  }
  const formData = {
    email: formEmail,
    password: formPass,
  };
  console.log(formData);
  form.reset();
}
