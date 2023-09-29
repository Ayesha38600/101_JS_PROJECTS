let password = document.getElementById("password");
let backgroundImg = document.querySelector(".bg-img");

password.addEventListener("input" , (e) =>{
    let input = e.target.value ;
    let length = input.length;
    let blurness = 20 -length *2;
    backgroundImg.style.filter = `blur(${blurness}px)`
})