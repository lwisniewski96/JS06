const sizeReact = document.querySelector("#font-size-control");
const fontEl = document.querySelector("#text");
sizeReact.addEventListener("input", (react) => {
  fontEl.style.fontSize = `${react.currentTarget.value}px`;
});
