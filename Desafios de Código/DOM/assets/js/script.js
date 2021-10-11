document.querySelector(".container > button").addEventListener("click", changeMode);

const main = document.querySelector(".container");
const footer = document.querySelector("body > footer");
const title = document.querySelector(".container > h1");
const button = document.querySelector(".container > button");

function ToggleMode() {
  footer.classList.toggle("dark");
  main.classList.toggle("dark");
}

function changeText() {
  if (main.classList.contains("dark")) {
    title.innerText = "Dark Mode ON";
    button.innerText = "Dark Mode";
    return
  }
  title.innerText = "Light Mode ON";
  button.innerText = "Light Mode";
  return;
};

function changeMode() {
  ToggleMode();
  changeText();
  return;
}