// let elem1 = document.getElementById("elem1");
// let elem1Image = document.getElementById("elem1img");


// elem1.addEventListener("mousemove" , function (details) {
   
//     elem1Image.style.left = details.x + "px" 
//     elem1Image.style.top = details.y +"px" 
//     //  console.log(details);
//     // console.log("aa");
    
// })
// elem1.addEventListener("mouseenter" , function (details) {
   
//     elem1Image.style.opacity = 1;
    
// })
// elem1.addEventListener("mouseleave" , function (details) {
   
//     elem1Image.style.opacity = 0;
    
// })






let elem = document.querySelectorAll(".elem");
let img = document.querySelectorAll("img")
// console.log(elem);

elem.forEach(function (val) {
    console.log(val.childNodes[3]);
    // console.log("a");
    val.addEventListener("mouseenter" , function (params) {
        // console.log("enter");
        // val.style.backgroundColor = "pink";
        val.childNodes[3].style.opacity = 1;
        
        
    })
    val.addEventListener("mouseleave" , function (params) {
        // console.log("leave");
        // val.style.backgroundColor = "transparent";
        val.childNodes[3].style.opacity = 0;
    })


    val.addEventListener("mousemove" , function (details) {
   
        val.childNodes[3].style.left = details.x + "px" 
        val.childNodes[3].style.top = details.y +"px" 
    //  console.log(details);
    // console.log("aa");
    
})
 
    
})