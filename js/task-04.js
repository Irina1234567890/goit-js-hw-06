/*Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.*/

const counter = document.querySelector('#value');
let counterValue = 0;

const decrementEl = document.querySelector('button[data-action="decrement"]');
decrementEl.addEventListener('click', () => {
  counterValue -=1;
  counter.textContent = counterValue;
});

const incrementEl = document.querySelector('button[data-action="increment"]');
incrementEl.addEventListener('click', () => {
  counterValue +=1;
  counter.textContent = counterValue;
});






