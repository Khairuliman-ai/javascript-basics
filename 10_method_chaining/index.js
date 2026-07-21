// method chaining = Calling one method after another in one continueous line of code.

//------------ no method chaining ---------

let userName = window.prompt("Enter your username:");

userName = userName.trim();
let firstLetter = userName.charAt(0);
firstLetter = firstLetter.toUpperCase();

let extraChar = userName.slice(1);
extraChar = extraChar.toLowerCase();

let fullName = firstLetter + extraChar;

console.log(`Hello ${fullName}`);




//------------  method chaining ------------

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(`Hello ${userName}`);