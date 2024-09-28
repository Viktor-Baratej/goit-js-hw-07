// Знаходимо елементи input і span
const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

// Додаємо обробник події input
inputElement.addEventListener("input", (event) => {
  // Отримуємо поточне значення інпуту і очищаємо його від пробілів на краях
  const inputValue = event.target.value.trim();

  // Якщо інпут порожній або містить лише пробіли, підставляємо "Anonymous"
  outputElement.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
