"use strict";

// variables declaration to be used in the code
const counter = document.querySelector('#counter');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const resetBtn = document.querySelector('#reset');

window.onload = () => {
    // functions to be executed when page is loaded

    counter.innerHTML = 0;
    downBtn.addEventListener('click', downBtnAction);
    upBtn.addEventListener('click', upBtnAction);
    resetBtn.addEventListener('click', resetBtnAction);
}

const downBtnAction = () => {
    // function responsible for manipulating the value of counter to the negative side
    counter.innerHTML--;
}

const upBtnAction = () => {
    // function responsible for manipulating the value of counter to the positive side
    counter.innerHTML++;
}

const resetBtnAction = () => {
    // function responsible for manipulating the value of counter by resetting it
    counter.innerHTML = 0;
}

document.addEventListener('keyup', (event) => {
    // Events which will happen if a specific key is pressed Up
    const e = event.which;
    switch (e) {
        case 32:
            event.preventDefault();
            upBtn.click();
            break;
        case 17:
            event.preventDefault();
            downBtn.click();
            break;
        case 18:
            event.preventDefault();
            resetBtn.click();
            break;
        default:
            break;
    }
});