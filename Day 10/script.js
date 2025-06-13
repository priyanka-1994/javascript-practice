function changeRandomColor() {
  const hex = getRadomHexColor()
  document.body.style.setProperty('--bg-color',hex);
  document.getElementById('colorCode').textContent = hex;
}
function setColor(hex) {
  document.body.style.setProperty('--bg-color',hex);
  document.getElementById('colorCode').textContent = hex;
}
function getRadomHexColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return '#' + randomColor.padStart(6,'0');
}
