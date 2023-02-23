
const inputEl = document.querySelector('#font-size-control');

const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', changeFontSize);


let fontMinSize = parseInt(inputEl.getAttribute('min'));




function changeFontSize(event) {
    
    fontMinSize += 1;
    console.log(fontMinSize);
    spanEl.style.fontSize = `${fontMinSize} px`;
    console.log(spanEl);
    // console.log(event.currentTarget.style.fontSize = '24px');
    

}