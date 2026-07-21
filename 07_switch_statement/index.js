// SWITCH =  CAN BE AN EFFICIENT REPLACEMENT TO LONG ELSE IF STATEMENTS

/*
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

*/

let testScore = 66;

switch (true) {
    case (testScore >= 90):
        console.log("A");
        break;
    case (testScore >= 80):
        console.log("B");
        break;
    case (testScore >= 70):
        console.log("C");
        break;
    case (testScore >= 60):
        console.log("D");
        break;
    default:
        console.log("F");
}
