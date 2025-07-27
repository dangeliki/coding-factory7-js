let counter = 0;

const btnDecr = document.getElementById('btnDecr')
const btnReset = document.getElementById('btnReset')
const btnIncr = document.getElementById('btnIncr')
let counterDOM = document.getElementById('counter')

btnDecr.addEventListener('click',function() {
    counter--;
    counterDOM.innerHTML = counter
})

btnReset.addEventListener('click' , function() {
    counter = 0;
    counterDOM.innerHTML = counter
})

btnIncr.addEventListener('click' , function () {
    counter++;
    counterDOM.innerHTML = counter
})