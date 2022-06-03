const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let ingredient of ingredients) {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = `${ingredient}`;
  ingredientEl.classList.add('item');

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(ingredientEl);

console.log(ingredientsList);
};
// const ingredientsEl = document.querySelector('#ingredients');

// for (let ingredient of ingredients) {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = `${ingredient}`;
//   ingredientEl.classList.add('item');

// const ingredientsList = document.querySelector('#ingredients');
// ingredientsEl.appendChild(...ingredientsList);
// console.log(ingredientsList);
// };

// ingredientsEl.appendChild(...ingredientsList);
// console.log(ingredientsList);


// const ingredientsEl = document.querySelector('#ingredients');

// const makeIngredients = (options) => {
//   return options.map(option => {
//       const ingredientEl = document.createElement('li');
//       ingredientEl.textContent = `${ingredient}`;
//       ingredientEl.classList.add('item');

//       return ingredientEl;
//   });
// };

// const elements = makeIngredients(ingredients);
// ingredientsEl.append(...elements);


// const elements = ingredients.map(option => {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = `${ingredient}`;
//   ingredientEl.classList.add('item');

//   return ingredientEl;
// });
 
// ingredientsEl.appendChild(...elements);
// console.log(elements);



/*Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients.*/