function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const btn = document.querySelector(".change-color");
let colorText = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomColor = getRandomHexColor()
  colorText.textContent = randomColor;
  body.style.backgroundColor = randomColor;
  
  
});
