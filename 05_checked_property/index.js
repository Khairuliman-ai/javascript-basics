// .checked = property that determines the checked state 
//            of an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const materCardBtn = document.getElementById("materCardBtn");
const paypalBtn = document.getElementById("paypalBtn");

const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are using Visa`;
    }
    else if(materCardBtn.checked){
        paymentResult.textContent = `You are using Mater Card`;
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are using PayPal`;
    }
    else{
        paymentResult.textContent = `Please select a payment method`;
    }

}
