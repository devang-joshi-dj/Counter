"use strict";

const counter = document.querySelector('#counter');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const resetBtn = document.querySelector('#reset');

window.onload = () => {
    counter.innerHTML = 0;
    downBtn.addEventListener('click', downBtnAction);
    upBtn.addEventListener('click', upBtnAction);
    resetBtn.addEventListener('click', resetBtnAction);
}

const downBtnAction = () => {
    counter.innerHTML--;
}

const upBtnAction = () => {
    counter.innerHTML++;
}

const resetBtnAction = () => {
    counter.innerHTML = 0;
}

document.addEventListener('keyup', (event) => {
    // Events which will happen if a specific key is pressed Up
    // Events refers to highlight of specific key when that specific key is pressed on keyboard
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