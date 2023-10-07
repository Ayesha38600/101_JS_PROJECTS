let container = document.getElementById("container");
let i = document.querySelector("i");

// set timeout is a fn of browser 
    container.addEventListener("dblclick" , function (params) {
        i.style.transform = "translate(-50% , -50%)  scale(1)";
        // console.log("aa");
        i.style.opacity = 0.8;
setTimeout(() => {
    i.style.opacity = 0;
}, 1000);

        setTimeout(() => {
            i.style.transform = "translate(-50% , -50%)  scale(0)";
            // console.log("aa");
        }, 2000);
        
    })
    
