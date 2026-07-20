// RANDOM NUMBER GENERATOR

// let randomNum = Math.floor(Math.random() * 16) + 5;

// console.log(randomNum);

const rollButton = document.getElementById("myButton");
const label = document.getElementById("myLabel");

maxNum = 100;
minNum = 1;

let randomNum;

rollButton.onclick = function () {
    randomNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    label.textContent = randomNum;
}