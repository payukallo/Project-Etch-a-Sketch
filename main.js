const content = document.querySelector(".content");
const container = document.createElement("div");
const btnRainbowColor = document.createElement("button");
const btnReload = document.createElement("button");
const btnNormalColor = document.createElement("button");
const downBtn = document.createElement("div");
const textUp = document.createElement("div");
const text = document.createElement("p");
const input = document.createElement("input");

textUp.classList = "textUp";
text.textContent = "Inset number from 1 - 100";

textUp.appendChild(text);
textUp.appendChild(input);
content.appendChild(textUp);

let normal = false;

btnNormalColor.addEventListener("click", () => {
  normal = true;
  rainbow = false;
});

btnReload.addEventListener("click", () => {
  location.reload();
});

btnReload.textContent = "Reload";
btnNormalColor.textContent = "Normal";
btnRainbowColor.textContent = "Rainbow";

let rainbow = false;

btnRainbowColor.addEventListener("click", () => {
  rainbow = true;
});

container.classList = "container";
content.appendChild(container);

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 1; i <= 16; i++) {
  const divs = document.createElement("div");
  for (let i = 1; i <= 16; i++) {
    const divs2 = document.createElement("div");
    divs2.classList = "divs2";
    divs.appendChild(divs2);

    divs2.addEventListener("mouseover", () => {
      if (rainbow) {
        divs2.style.backgroundColor = randomColor();
      } else if (normal) {
        divs2.style.backgroundColor = "black";
      } else {
        divs2.style.backgroundColor = "black";
      }
    });
  }
  divs.classList = "divs";
  container.appendChild(divs);
}

downBtn.classList = "downBtn";

content.appendChild(downBtn);

downBtn.appendChild(btnNormalColor);
downBtn.appendChild(btnReload);
downBtn.appendChild(btnRainbowColor);
