
const myText = document.getElementById("myText");
const resultElement = document.getElementById("resultElement");
const myButton = document.getElementById("myButton");
let age = 0;

myButton.onclick = function () {
    age = myText.value;
    age = Number(age);

    if (age >= 50 && age <= 100) {
        resultElement.textContent = `${age} is Old`;

    }
    else if (age >= 18) {
        resultElement.textContent = `${age} is Adult`;
    }
    else {
        resultElement.textContent = `${age} is not Adult`;
    }
}
