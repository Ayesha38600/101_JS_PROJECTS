let button = document.getElementById('share-btn')
let result = document.getElementById('result')


let data = {
    title : "Ayesha38600"
    ,url : "https://github.com/Ayesha38600",
    text : "My Github"

}

button.addEventListener("click" , function(params) {
    try {
        navigator.share(data);
        result.innerHTML = "Link Shared"
    } catch (error) {
        console.log(err);
        result.innerHTML = "Error in share"
    }
})