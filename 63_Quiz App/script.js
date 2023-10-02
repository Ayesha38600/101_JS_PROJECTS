let data = [
    {
        Q: "Q : The largest island in the world is?" ,
        a: "Green Lan" ,
        b: "Blue Lan" ,
        c: "Purple Lan" ,
        d: "Queen Lan" ,
        ans : "ans1"
    },
    {
        Q: "Q : Agra is situated on which river bank?" ,
        a: "himaliya" ,
        b: "Pune" ,
        c: "Yamuna" ,
        d: "Sahara" ,
        ans : "ans3"
    },
    {
        Q: "Q : Which is the most widely spoken language in the world?" ,
        a: "English" ,
        b: "Mandarin" ,
        c: "Spanish" ,
        d: "Japaneese" ,
        ans : "ans2"
    },
    {
        Q: "Q : What’s the number of bones there in a newborn baby?" ,
        a: "300" ,
        b: "400" ,
        c: "500" ,
        d: "600" ,
        ans : "ans1"
    },
];

let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");
let answers = document.querySelectorAll(".options");
let myScore = document.querySelector(".myScore");
let nextBtn = document.getElementById("next");


let num = 0;
let score = 0;
question.innerHTML = data[num].Q;
option1.innerHTML = data[num].a;
option2.innerHTML = data[num].b;
option3.innerHTML = data[num].c;
option4.innerHTML = data[num].d;




function checkAns(params) {
    let ans ;
    answers.forEach((curElement) =>{
        if (curElement.checked ) {
            ans = curElement.id;
            console.log(ans);
            
        }

    })
    return ans;
    
}

function disSelect(params) {  // bcz ye fn ye krega k iff phly q py humny select to dusry q py v wohi wala option select hora ta is sy ye prblm solv
    answers.forEach((curElement)=>{
        curElement.checked = false;
    })
    
}


function next(params) {
let checkedAns = checkAns();


if (checkedAns ==  data[num].ans) {
    score++;
    
}
disSelect();
 num++;

if (num< data.length) {
    
    question.innerHTML = data[num].Q;
    option1.innerHTML = data[num].a;
    option2.innerHTML = data[num].b;
    option3.innerHTML = data[num].c;
    option4.innerHTML = data[num].d;
}else {
myScore.innerHTML = `Your Score is ${score} / ${data.length} <br/>  <br/> 
<button onclick="location.reload()">Play Again!</button>

`;
nextBtn.style.display = "none"


}


}