// let button = document.getElementById('btn');

// button.addEventListener('click', function(){
//     let word = document.getElementById('str').value;
//     let count = word.length;
//     let outputDiv = document.getElementById('output');

//     outputDiv.innerHTML = `<h1>${count}</h1>`
// });
// // 


let button = document.querySelector("button");
button.addEventListener("click" , function name(params) {
    let word = document.getElementById("str").value ;
    let count = word.length ;
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h1>${count}</h1>`
})