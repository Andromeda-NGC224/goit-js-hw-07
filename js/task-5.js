`use strict`;

const widget = document.querySelector(`.widget`);
const changeBtn = document.querySelector(`.change-color`);
const spanColor = document.querySelector(`.color`);
const body = document.querySelector(`body`);

changeBtn.addEventListener(`click`, handleClick);

function handleClick(event) {
  spanColor.textContent = "- ";
  spanColor.insertAdjacentHTML("beforeend", getRandomHexColor());
  body.style.background = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
