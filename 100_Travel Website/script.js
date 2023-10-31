let slide = document.querySelectorAll(".reviewCard");

let count = 0;
slide.forEach(function name(slides , index) {
    // console.log(index);
    slides.style.left = `${index*100}%` 
    
});

function myFun(params) {
    slide.forEach(function name(currentVal) {
        currentVal.style.transform = `translate(-${count * 100}%)`
        
    })
    
}

setInterval(() => {
    count++;

    if (count == slide.length) {
        count=0
        
    }
    myFun();
}, 2000);



//for dark light mode

let bar = document.getElementById("bar");
let loginBtn = document.getElementById("loginBtn");
let dark = document.getElementById("dark");
let user = document.getElementById("user");



dark.addEventListener("click" , function name(params) {
    document.querySelector("body").classList.toggle("active");

    
    
})


user.addEventListener("click" , function name(params) {
    document.querySelector(".loginPage").classList.toggle("active2");


    
})
bar.addEventListener("click" , function name(params) {
    document.querySelector("ul").classList.toggle("ShowData");


    
})
loginBtn.addEventListener("click" , function name(params) {
    let email = document.getElementById("email");
    let pas = document.getElementById("pass");

    if (email.value == "" && pas.value =="") {
        alert("Enter Detail")
        
    }
    else{
        alert("You Loged In")
    }


    
})