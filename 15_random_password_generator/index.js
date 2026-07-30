// random password generator

function generatePassword(length, 
                        includeLowerCase,
                         includeUpperCase, 
                         includeNumbers, 
                         includeSymbols){

    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCase : "";
    allowedChars += includeUpperCase ? upperCase : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    console.log(allowedChars);

    if (length <= 0){
        return 'the length must be at least 1';
    }

    if (allowedChars.length === 0){
        return 'At least one charater type must be selected';
    }

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                includeLowerCase,
                                 includeUpperCase, 
                                 includeNumbers, 
                                 includeSymbols);

console.log(`Generate Password: ${password}`);

