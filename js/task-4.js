// Знаходимо форму
const loginForm = document.querySelector(".login-form");

// Додаємо обробник події submit
loginForm.addEventListener("submit", (event) => {
  // Запобігаємо перезавантаженню сторінки
  event.preventDefault();

  // Отримуємо значення полів форми через властивість elements
  const { email, password } = event.target.elements;

  // Очищаємо значення від пробілів
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Перевірка, чи всі поля заповнені
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  // Створюємо об'єкт з даними форми
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Виводимо об'єкт в консоль
  console.log(formData);

  // Очищаємо форму
  loginForm.reset();
});
