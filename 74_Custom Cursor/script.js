let main = document.querySelector(".main")
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove" , function name(details) {
    // console.log(details.x);
    // console.log("a");
    // position = absolute must dena cursor py css mai  tabhi left kam krega
    
    cursor.style.left = details.x +"px"
    cursor.style.top = details.y +"px"

    
})