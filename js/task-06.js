
const inputEl = document.querySelector('#validation-input');
const lengthEl = document.querySelector('input[data-length]');
const inputLength =lengthEl.dataset.length;

inputEl.addEventListener('blur', (event) => {
  if (event.currentTarget.value.length == inputLength) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
});