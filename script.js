document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn");
  const output = document.getElementById("output");

  let count = 0;

  button.addEventListener("click", () => {
    count++;
    output.textContent = `Button clicked ${count} time${count === 1 ? "" : "s"}!`;
  });
});