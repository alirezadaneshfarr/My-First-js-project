let display = document.querySelector(".num-show");
let numPad = document.querySelectorAll(".number");

function numShow(event) {
    let num = event.target.innerText;
    if (display.innerHTML == 0) {
        return display.innerHTML = num;
    } else {
        return display.innerHTML += num;
    }
}

function calculate() {
    let result = display.innerText;
    display.innerText = eval(result);
}

function allClear() {
    display.innerText = 0;
}

function clear() {
    let txt = display.innerText;
    if (txt.length === 1) {
        display.innerText = 0;
    } else {
        display.innerText = txt.substring(0, txt.length - 1);
    }
}
// its my first project



document.querySelector(".result").addEventListener("click", calculate);
document.querySelector(".all").addEventListener("click", allClear);
document.querySelector(".clear").addEventListener("click", clear);
numPad.forEach(item => {
    item.addEventListener("click", numShow);
})