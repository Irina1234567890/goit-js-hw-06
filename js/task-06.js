
const inputEl = document.querySelector('#validation-input');
const lengthEl = document.querySelector('input[data-length]');
let inputLength =lengthEl.dataset.length;
inputLength = Number(inputLength);


function onInputBlur(event) {
  if (event.currentTarget.value.length === inputLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
      } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
      }
      
}
inputEl.addEventListener('blur', onInputBlur);

