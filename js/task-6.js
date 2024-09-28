function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо елементи
const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

// Додаємо обробник події для кнопки Create
createBtn.addEventListener("click", handleCreateBoxes);

// Додаємо обробник події для кнопки Destroy
destroyBtn.addEventListener("click", handleDestroyBoxes);

// Функція-обробник для створення коробок
function handleCreateBoxes() {
  const amount = parseInt(input.value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100");
    input.value = ""; // очищаємо поле вводу
    return;
  }

  createBoxes(amount);
  input.value = ""; // очищаємо поле вводу після рендерингу
}

// Функція для створення колекції коробок
function createBoxes(amount) {
  // Очищаємо контейнер перед рендерингом нових елементів
  boxesContainer.innerHTML = "";

  let elementsHTML = "";

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; // збільшуємо розмір кожного елемента на 10px
    const color = getRandomHexColor();

    // Додаємо елементи у вигляді HTML-шаблону для більшої ефективності
    elementsHTML += `<div class="box" style="width:${size}px; height:${size}px; background-color:${color}; margin: 5px;"></div>`;
  }

  // Додаємо всі елементи за один раз
  boxesContainer.innerHTML = elementsHTML;
}

// Функція для очищення коробок
function handleDestroyBoxes() {
  boxesContainer.innerHTML = "";
}
