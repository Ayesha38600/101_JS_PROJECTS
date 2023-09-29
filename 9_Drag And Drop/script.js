let  list = document.querySelectorAll(".list");
let rightBox = document.querySelector(".right")
let leftBox = document.querySelector(".left")

for(listItem of list){

listItem.addEventListener("dragstart" , function(e) {
    // console.log(e);
    let selected = e.target ;
    // console.log(selected);

rightBox.addEventListener("dragover" , function (e) {
    e.preventDefault();
    
})
  
rightBox.addEventListener("drop" , function (e) {
    rightBox.appendChild(selected);
    selected = ""
    
})





// 
leftBox.addEventListener("dragover" , function (e) {
    e.preventDefault();
    
})
  
leftBox.addEventListener("drop" , function (e) {
    leftBox.appendChild(selected);
    selected = ""
    
})


})

}
