// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

/* function happyBirthday(username, age) {
   console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday, dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old!`);
}

happyBirthday("Ali", 25);
happyBirthday("Aiman", 20);
happyBirthday("Khairul", 18);
*/
function add(x, y){
    return x + y;
}

function substract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){
    if (number % 2 === 0){
        return true;
    }
    else{
        return false
    }
}

function isValidEmail(email){

    return email.includes("@")? true:false;
}

let total1 = add(5, 10);
let total2 = substract(5, 10);
let total3 = multiply(5, 10);
let total4 = divide(5, 10);
let number = 21;

console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);
console.log(`is ${number} is even? ${isEven(number)}`);
console.log(isValidEmail("khairuliman@gmail.com"));
console.log(isValidEmail("khairulimangmail.com"));