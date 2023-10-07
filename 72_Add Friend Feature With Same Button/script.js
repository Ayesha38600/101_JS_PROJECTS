let add = document.getElementById("add");
// let remove = document.getElementById("remove");
let heading = document.querySelector("h5");
var flag = 0;

add.addEventListener("click" , function (params) {
if (flag==0) {
    heading.innerHTML = "Friend!"
    heading.style.color = "green"
    add.innerHTML ="Remove Friend";
    
    flag =1;
    
}else{
    heading.innerHTML = "Vampire"
    heading.style.color = "red"
    add.innerHTML ="Add Friend"
    flag =0;
}

    
})
// remove.addEventListener("click" , function (params) {
//     heading.innerHTML = "Vampire"
//     heading.style.color = "red"
    
// })