let copybtn = document.getElementById("copy-btn");
let link = document.getElementById("link");


copybtn.onclick = function (params) {
    navigator.clipboard.writeText(link.innerHTML);

    copybtn.innerHTML = "Copied";

    setTimeout(function (){
copybtn.innerHTML = "copied"
    },2000)
    
}