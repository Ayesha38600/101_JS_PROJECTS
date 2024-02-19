let randomText = document.getElementById("randomText");
let textInput = document.getElementById("textInput");
let result = document.getElementById("result");
let btn = document.getElementById("btn");



const data = [
    "Love is not just looking at each other, it's looking in the same direction. - Antoine de Saint-Exupéry",
    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine. - Maya Angelou",
    "The best thing to hold onto in life is each other",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
  ];

let randomNumber = Math.random() * data.length;
let randomData = Math.floor(randomNumber);
console.log(data[randomData]);




let startTime ;
let endTime ;
function myfun(params) {
    // console.log(textInput.value.split(" ").length);
    let wordLength = textInput.value.split(" ").length;
    console.log(wordLength);


    

    let date = new Date();
    endTime = date.getTime();
    let CompleteTime = Math.floor((endTime - startTime)/1000); 


    let speed = Math.floor((wordLength/CompleteTime) * 60) ;
    // console.log(endTime);
    console.log(CompleteTime);

    result.innerText = "you write " + wordLength + " word in " + CompleteTime + " seconds : so your typing speed is " + speed + " word per minute"


    
}


btn.addEventListener("click" , function name(params) {
   if ( btn.innerText == "Start") {


    let date = new Date();
   startTime = date.getTime();
    // console.log(startTime);



    btn.innerText = "Done"
    textInput.disabled = false;
    randomText.innerText = data[randomData];



    
   }
   else if(btn.innerText == "Done"){
    btn.innerText = "Start"
    textInput.disabled = true;
    myfun()
   }
    
})