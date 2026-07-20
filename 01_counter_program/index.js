// count program

let count = 0;
const countLabel = document.getElementById("countLabel");
const incrementButton = document.getElementById("increaseBtn");
const decrementButton = document.getElementById("decreaseBtn");
const resetButton = document.getElementById("resetBtn");

incrementButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decrementButton.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}