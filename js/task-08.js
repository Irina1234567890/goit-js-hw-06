// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const submitForm = document.querySelector('.login-form');
// const mailEl = document.querySelector('email');
// const pasEl = document.querySelector('password');
// const btnEl = document.querySelector('submit');

const submitButton = document.querySelector('button');
const emailField = document.querySelector('input[type="email"]').value;
const passwordField = document.querySelector('input[type="password"]').value;


// formEl.addEventListener('submit', handleSubmit);
// console.log(formEl);
// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;
//   if (login.value === "" || password.value === "") {
//     alert('All fields must be filled!');
//   }
//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

let user = {
  email: '',
  password: '',
};

submitForm.addEventListener('submit', () => {
  if(emailField || passwordField === '') {
    alert('All fields must be filled!!!');
  } else {
    user.email = emailField;
    user.password = passwordField;
  }
  document.querySelector('.login-form').requestFullscreen();
    return user;
    
});
