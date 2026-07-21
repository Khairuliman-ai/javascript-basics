// string methods = allow you to manipulate and work with text (strings)

let userName = "Khairul Iman";

let userName1 = userName.charAt(0);
console.log(`${userName} first charactor is ${userName1}`);

let userName2 = userName.length;
console.log(`${userName} length is ${userName2}`);

let userName3 = userName.trim();
console.log(`${userName} after trim is ${userName3}`);

let userName4 = userName.toLocaleLowerCase();
console.log(`${userName} after toLowerCase is ${userName4}`);

let userName5 = userName.toLocaleUpperCase();
console.log(`${userName} after toUpperCase is ${userName5}`);

let userName6 = userName.includes("Iman");
console.log(`${userName} after includes is ${userName6}`);

let userName7 = userName.replace("Iman", "Khairul")
console.log(`${userName} after replace is ${userName7}`);

let userName8 = userName.repeat(5);
console.log(`${userName} after repeat is ${userName8}`);

let userName9 = userName.slice(0, 6);
console.log(`${userName} after slice is ${userName9}`);

let userName10 = userName.split(" ");
console.log(`${userName} after split is ${userName10}`);
let userName11 = userName.replaceAll(" ", "");
console.log(`${userName} after replaceAll is ${userName11}`);