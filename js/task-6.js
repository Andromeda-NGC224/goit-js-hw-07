`use strict`;

const controls = document.querySelector(`#controls`);
const boxes = document.querySelector(`#boxes`);
const btnCreate = document.querySelector(`.btn-create`);
const btnDestroy = document.querySelector(`.btn-destroy`);
const input = document.querySelector(`.numb-input`);

btnCreate.addEventListener(`click`, createBoxes);
btnDestroy.addEventListener(`click`, destroyBoxes);

function createBoxes(amount) {
  amount = input.value;
  if (amount < 1 || amount > 100) {
    return alert("Введіть значення від 1 до 100");
  }
  for (let i = 1; i <= amount; i++) {
    const newBox = document.createElement("div");
    newBox.className = `box`;
    newBox.style.background = getRandomHexColor();
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    boxes.insertAdjacentElement(`beforeend`, newBox);
    input.value = "";
  }
}

function destroyBoxes() {
  boxes.innerHTML = ``;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
