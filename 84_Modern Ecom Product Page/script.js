let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let img = document.querySelector("#img");


one.addEventListener("click" , function name(params) {
    img.src = `https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhbmRzb21lJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60`
    two.style.backgroundColor= "black" 
    one.style.backgroundColor= "white"
three.style.backgroundColor= "black"
} )
two.addEventListener("click" , function name(params) {
    img.src = `https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbmRzb21lJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60`
    two.style.backgroundColor= "white" 
    one.style.backgroundColor= "black"
three.style.backgroundColor= "black"

} )
three.addEventListener("click" , function name(params) {
    img.src = `https://images.unsplash.com/photo-1558487631-b3fa86228b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbmRzb21lJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60`
    two.style.backgroundColor= "black" 
    one.style.backgroundColor= "black"
three.style.backgroundColor= "white"

} )