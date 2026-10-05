const content = document.querySelector(".content");
const textUp = document.createElement("div");
const text = document.createElement("p");
const input = document.createElement("button");
const container = document.createElement("div");
const downBtn = document.createElement("div");
const btnRainbowColor = document.createElement("button");
const btnReload = document.createElement("button");
const btnNormalColor = document.createElement("button");

textUp.classList = "textUp";
text.textContent = "Project Etch a Sketch";
input.textContent = "Input number";

textUp.appendChild(text);
textUp.appendChild(input);
content.appendChild(textUp);

container.classList = "container";
content.appendChild(container);

btnReload.textContent = "Reload";
btnNormalColor.textContent = "Normal";
btnRainbowColor.textContent = "Rainbow";

let normal = false;
let rainbow = false;

btnNormalColor.addEventListener("click", () => {
  normal = true;
  rainbow = false;
});

btnReload.addEventListener("click", () => {
  location.reload();
});


btnRainbowColor.addEventListener("click", () => {
  rainbow = true;
});

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

downBtn.classList = "downBtn";
content.appendChild(downBtn);
downBtn.appendChild(btnNormalColor);
downBtn.appendChild(btnReload);
downBtn.appendChild(btnRainbowColor);

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
});

