let lowerData = "abcdefghijklmnopqrstuvwxyz";
let upperData = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numData = "1234567890";
let symData = "!@#$%^&*()";


let passwordInput = document.getElementById("passwordInput");
let passwordLength = document.getElementById("passwordLength");
let upper= document.getElementById("upper");
let lower = document.getElementById("lower");
let num = document.getElementById("num");
let sym = document.getElementById("sym");


function generateNumber(data) {
    // console.log(data[Math.floor(Math.random() * data.length)]);
   return (data[Math.floor(Math.random() * data.length)]);
    
}
generateNumber(upperData);

function generate(password = "") {
    if (upper.checked) {
       password += generateNumber(upperData)
        
    }
    if (lower.checked) {
       password += generateNumber(lowerData)
        
    }
    if (num.checked) {
       password += generateNumber(numData)
        
    }
    if (sym.checked) {
       password += generateNumber(symData)
        
    }
    if (password.length < passwordLength.value) {
     return generate(password)
      
    }
    passwordInput.value = password;
    console.log(password);
    
}
function myFun(params) {

    generate();
    
}

function copied(params) {
   alert("Aysh Text Is Copied!")
   
}