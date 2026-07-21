// string slicing = creating a substring from a portion of another string

    let fullName = "Khairul Iman";

// slice(start, end)
// end is exclusive
// start is inclusive

/*
let firstName = fullName.slice(0, 7);
console.log(firstName);

let lastName = fullName.slice(8, 12);
console.log(lastName);

// you can also use negative index
let lastName2 = fullName.slice(-4);
console.log(lastName2);

// slice at the end
let firstName2 = fullName.slice(1, -5);
console.log(firstName2);
*/

const email = "khairuliman726@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);
