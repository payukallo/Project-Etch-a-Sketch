const content = document.querySelector(".content");
const textUp = document.createElement("div");
const text = document.createElement("p");
const text2 = document.createElement("p");
const input = document.createElement("button");
const container = document.createElement("div");
const downBtn = document.createElement("div");
const btnRainbowColor = document.createElement("button");
const btnDefaultColor = document.createElement("button");
const btnReload = document.createElement("button");

textUp.classList = "textUp";
text.textContent = "Etch a Sketch";
input.textContent = "Input number";
text2.textContent = "16 * 16";

textUp.appendChild(text);
textUp.appendChild(text2);
textUp.appendChild(input);
content.appendChild(textUp);

container.classList = "container";
content.appendChild(container);

btnRainbowColor.textContent = "Rainbow";
btnDefaultColor.textContent = "Default";
btnReload.textContent = "Reload";

let rainbow = false;
let normal = false;

btnRainbowColor.addEventListener("click", () => {
  rainbow = true;
});

btnDefaultColor.addEventListener("click", () => {
  normal = true;
  rainbow = false;
});

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

downBtn.classList = "downBtn";
content.appendChild(downBtn);
downBtn.appendChild(btnRainbowColor);
downBtn.appendChild(btnDefaultColor);
downBtn.appendChild(btnReload);

let userInput = 16;

input.value = userInput;

function createGrid() {
  container.innerHTML = "";

  for (let i = 1; i <= userInput; i++) {
    const divs = document.createElement("div");
    for (let j = 1; j <= userInput; j++) {
      const divs2 = document.createElement("div");
      divs2.classList = "divs2";
      divs.appendChild(divs2);

      divs2.addEventListener("mouseover", () => {
        if (rainbow) {
          divs2.style.backgroundColor = randomColor();
        } else {
          divs2.style.backgroundColor = "black";
        }
        btnReload.addEventListener("click", () => {
          divs2.style.backgroundColor = "bisque";
        });
      });
    }
    divs.classList = "divs";
    container.appendChild(divs);
  }
}

createGrid();

input.addEventListener("click", () => {
  const value = Number(prompt("Input number of squares from 1 - 100."));
  if (value >= 1 && value <= 100) {
    userInput = value;

    input.value = userInput;
    createGrid();
  }
  text2.textContent = `${value} * ${value}`;
});
