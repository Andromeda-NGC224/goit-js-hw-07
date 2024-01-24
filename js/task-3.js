`use strict`;

const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

nameInput.addEventListener(`input`, (event) => {
  const noSpace = nameInput.value.trim();
  if (noSpace === ``) {
    nameOutput.textContent = `Anonymous`;
  } else {
    nameOutput.textContent = noSpace;
  }
});
