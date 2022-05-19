const changeColor = document.getElementById("change-button");
const indicaTor = document.getElementById("indicaTor");
const body = document.body;

function Colorgen() {
  return Math.floor(Math.random() * 255);
}

changeColor.addEventListener("click", Generate);

function Generate() {
  const color1 = Colorgen();
  const color2 = Colorgen();
  const color3 = Colorgen();
  const rgb = `rgb(${color1}, ${color2}, ${color3})`;
  body.style.background = rgb;
  indicaTor.innerText = rgb;
}
