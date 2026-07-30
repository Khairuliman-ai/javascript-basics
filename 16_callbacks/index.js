/*
callback = a function that is passed as an argument 
to another function.
*/

function sum(callback, x, y) {

    let result = x + y;
    callback(result);
}

function result(result) {

    console.log(`The result is : ${result}`);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 1, 2);