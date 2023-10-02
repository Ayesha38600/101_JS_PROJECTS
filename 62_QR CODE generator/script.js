let input = document.getElementById("inp");
let img = document.getElementById("img");


function myFun(params) {
    let value = input.value ;

    if(value){
        img.style.border = "1px solid white"
        img.style.padding = "8px"
        img.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value} `
    }
    
}