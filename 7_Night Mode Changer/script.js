let icon = document.getElementById("icon");
icon.addEventListener("click" , function (params) {
    document.querySelector("body").classList.toggle("active");
    

    if (document.querySelector("body").className == "active") {
        icon.className = "fa-solid fa-sun"
        
    }else{
        icon.className = "fa-solid fa-moon"
    }
})