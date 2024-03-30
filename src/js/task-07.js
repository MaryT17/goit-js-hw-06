const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

function updateTextFontSize() {
  textSpan.style.fontSize = fontSizeControl.value + 'px';
}

fontSizeControl.addEventListener('input', updateTextFontSize);

updateTextFontSize();
