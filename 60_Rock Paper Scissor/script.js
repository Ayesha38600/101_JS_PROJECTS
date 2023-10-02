// let a = Math.random();
// let b = Math.floor(a*3);
// console.log(b);


let myScore = document.getElementById("myScore").innerHTML;
let comp = document.getElementById("comp").innerHTML;



function myFun1(params) {
    let a = Math.random();
    let b = Math.floor(a*3);
    console.log(b);


   let rocks = document.getElementById("userImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx8cBMvxWDOR2_QivyyQkQx1WySIUfU0BFQ&usqp=CAU"


   if (b==0) {
    
   let rock = document.getElementById("compImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx8cBMvxWDOR2_QivyyQkQx1WySIUfU0BFQ&usqp=CAU"

   if (rocks && rock) {
    document.getElementById("result").innerHTML ="Game Draw!"
    
   }
    
   }





   if (b==1) {
    
    let paper = document.getElementById("compImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijr47Aq0vysuQgkruPFw4yEb3M0l2Uhue2Q&usqp=CAU"
 
    if (rocks && paper) {
     document.getElementById("result").innerHTML ="User Loss"
     comp++;
     document.getElementById("comp").innerHTML = comp;
     
    }
     
    }




    if (b==2) {
    
        let scissor = document.getElementById("compImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYp0r2xv1x2cQ3kc67ZTkudJaw7uzmZlGlOw&usqp=CAU"
     
        if (rocks && scissor) {
         document.getElementById("result").innerHTML ="User Win!"
         myScore++;
         document.getElementById("myScore").innerHTML = myScore;
         
        }
         
        }
    
}
function myFun2(params) {
    let a = Math.random();
    let b = Math.floor(a*3);
    console.log(b);


   let papers =  document.getElementById("userImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijr47Aq0vysuQgkruPFw4yEb3M0l2Uhue2Q&usqp=CAU"


   if (b==0) {
    
   let rock = document.getElementById("compImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx8cBMvxWDOR2_QivyyQkQx1WySIUfU0BFQ&usqp=CAU"

   if (papers && rock) {
    document.getElementById("result").innerHTML ="User Win!"
    myScore++;
         document.getElementById("myScore").innerHTML = myScore;
    
   }
    
   }





   if (c==1) {
    
    let paper = document.getElementById("compImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijr47Aq0vysuQgkruPFw4yEb3M0l2Uhue2Q&usqp=CAU"
 
    if (papers && paper) {
     document.getElementById("result").innerHTML ="Game Draw!"
     
    }
     
    }




    if (b==2) {
    
        let scissor = document.getElementById("compImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYp0r2xv1x2cQ3kc67ZTkudJaw7uzmZlGlOw&usqp=CAU"
     
        if (papers && scissor) {
         document.getElementById("result").innerHTML ="User Loss"
         comp++;
         document.getElementById("comp").innerHTML = comp;
         
        }
         
        }





   
    
}
function myFun3(params) {
    let a = Math.random();
    let b = Math.floor(a*3);
    console.log(b);


   let scissors = document.getElementById("userImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYp0r2xv1x2cQ3kc67ZTkudJaw7uzmZlGlOw&usqp=CAU"


   if (b==0) {
    
   let rock = document.getElementById("compImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtx8cBMvxWDOR2_QivyyQkQx1WySIUfU0BFQ&usqp=CAU"

   if (scissors && rock) {
    document.getElementById("result").innerHTML ="User Loss!"
    comp++;
    document.getElementById("comp").innerHTML = comp;
    
   }
    
   }





   if (c==1) {
    
    let paper = document.getElementById("compImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijr47Aq0vysuQgkruPFw4yEb3M0l2Uhue2Q&usqp=CAU"
 
    if (scissors && paper) {
     document.getElementById("result").innerHTML ="User Win"
     myScore++;
         document.getElementById("myScore").innerHTML = myScore;
     
    }
     
    }




    if (b==2) {
    
        let scissor = document.getElementById("compImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYp0r2xv1x2cQ3kc67ZTkudJaw7uzmZlGlOw&usqp=CAU"
     
        if (scissors && scissor) {
         document.getElementById("result").innerHTML ="Game Draw!"
         
        }
         
        }





    
}