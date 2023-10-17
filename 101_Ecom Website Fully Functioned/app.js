let trends = document.querySelectorAll(".trendsCard");
let count = 0;
trends.forEach(function (slide , index) {
    slide.style.left = `${index * 100}%` 
  
    
})
function myFun(params) {
    trends.forEach(function (currentValue) {
        currentValue.style.transform = `translateX(-${count * 100}%)`

        
    })
    
}


setInterval(function name(params) {
    myFun()
    count++;
    if (count==trends.length) {
        count = 0;
        
    }
},2000)



// .....
let card = document.querySelectorAll(".card");
card.forEach(function name(cards) {
    cards.addEventListener("click" , function name(params) {
        document.querySelector(".main").style.display = "none"
        document.querySelector("#women").style.display = "none"
        document.querySelector("#men").style.display = "none"
        document.querySelector("#trending").style.display = "none";
        // document.querySelector(".cardPage").appendChild(cards);
        document.querySelector(".cardImg").appendChild(cards);
        document.querySelector(".cardText").style.display = "block";



        
    })
    
})