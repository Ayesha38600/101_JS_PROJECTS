let value1 = document.querySelector(".first input").value ;
let sec= document.querySelector(".sec textarea").value ;
document.querySelector(".addNotes p i").addEventListener("click" , function () {
    document.querySelector(".addNotes").style.opacity = 0   
})
document.querySelector(".smalldiv p i").addEventListener("click" , function () {
    document.querySelector(".addNotes").style.opacity = 1   
})





document.getElementById("btn").addEventListener("click" , function name(params) {
  let div = document.createElement("div");
div.classList.add("newClass");
div.innerHTML= `
  <h3>${document.getElementById("inp1").value}</h3>
  <p>${document.getElementById("inp2").value}</p>
  <button id ="btnn">Delete</button>
`;
document.getElementById("inp1").value = ""
document.getElementById("inp2").value = ""
document.querySelector(".adding").appendChild(div);


div.querySelector("button").addEventListener("click" , function name(params) {
  div.remove ()
  
})
  
})








