let addBtn =document.querySelector("#add")
let subBtn =document.querySelector("#sub")
let qty =document.querySelector("#qtyBox");

// console.log(addBtn,subBtn, qty);


addBtn.addEventListener("click" , function (params) {
    qty.value = parseInt(qty.value) + 1;
    
})
subBtn.addEventListener("click" , function (params) {
    qty.value = parseInt(qty.value) - 1;
    
})