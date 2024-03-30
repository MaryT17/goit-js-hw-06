const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

function changeBackgroundColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener('click', changeBackgroundColor);
