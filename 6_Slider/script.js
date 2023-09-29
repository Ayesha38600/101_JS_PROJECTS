let slides = document.querySelectorAll(".slide");
let count = 0;
slides.forEach(function (slides , index) {
    slides.style.left = `${index * 100}%`
    
})

function next(){
    count++;
    if(count == slides.length){
        count = 0;
    }
    myFun();
}


function pre(){
    count--;
    if(count == -1){
        count = slides.length-1;
    }
    myFun();
}


function myFun(params) {
    slides.forEach(function(images){
        images.style.transform = `translateX(-${count * 100}%)`;

    })
    
}