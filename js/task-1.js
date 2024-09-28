// Знаходимо список категорій
const categories = document.querySelectorAll("#categories .item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Проходимо по кожній категорії
categories.forEach((category) => {
  // Знаходимо заголовок h2
  const title = category.querySelector("h2").textContent;

  // Знаходимо всі елементи li в поточній категорії
  const itemsCount = category.querySelectorAll("ul li").length;

  // Виводимо заголовок і кількість елементів у категорії
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
