
const inputEl = document.querySelector('#font-size-control');

const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', changeFontSize);

let fontSize = inputEl.getAttribute('min');
console.log(fontSize);

function changeFontSize(event) {
    fontSize += 1;
    console.log(fontSize);
    spanEl.style.fontSize = fontSize;

}