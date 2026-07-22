// spread operator = ... allows an iterable(boleh diulang) such as as an arrray
//                   or string to be expended into seperate elements
//                   (unpacks the elements)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let maximumNum = Math.max(...numbers);
let minimumNum = Math.min(...numbers);

console.log(maximumNum);
console.log(minimumNum);

let username = "Khairul Iman";
let letters = [...username];

console.log(letters);

let fruits = ["apple", "banana", "orange", "mango"];
let vegetables = ["carrot", "broccoli", "spinach"];
let combinedFood = [...fruits, ...vegetables];

console.log(combinedFood);  
