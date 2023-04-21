console.log("Hello from Nerdbord!");

const colors = ["red", "green", "blue", "yellow"];

const box = document.querySelector(".box");

let i = 0;

setInterval(() => {
  box.style.borderColor = colors[i];
  i = (i + 1) % colors.length;
}, 3000);
