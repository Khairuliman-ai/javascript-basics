/*
forEach() = method used to iterate over the elements
            of an array and apply a specified function (callback) 
            to each element

            array.forEach(callback)
*/

let fruits = ["orange", "banana", "pineapple", "coconut", "apple"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){

    array[index] = element.toUpperCase();

}

function display(element){

    console.log(element);

}
