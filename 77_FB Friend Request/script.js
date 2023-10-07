let button = document.getElementById("btn");
let butto = document.getElementById("btnn");
let small = document.querySelector("small");

button.addEventListener("click" , function (params) {
    small.style.display = "block"
    button.style.display = "none"

    
})
butto.addEventListener("click" , function (params) {
   
    butto.innerHTML = "Resquest is deleted "
    button.style.display = "none"
    small.style.display = "none"
    butto.style.backgroundColor = "pink"
    butto.style.border = "none"
    
})

