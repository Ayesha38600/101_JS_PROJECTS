// Q : hamay ek rectangle bnana h aur task ye h jab hum rectangle k center sy left mai move kry cursor ko to red color ki intensity high hojy center py 0 intensity ho and left of retangle k corner py maximum intensity ho and same jab right mai move kry center sy to blue color ki intensity increase hoty jy and right k corner py max blue color intensity ho .




// ye krny k liye 3 step follow krny hongy 

// 1: sabsy phly ye pta kro mouse rectangle py aya and move hua tabhi to color depaogy 
// 2: ab ye calculate kro k hum center sy left py h ya center sy right py h 
// 3: ab ye calculate kro k hum center sy kitna left py h utni intensity sy color lgao and vice versa



// step 1
let rect = document.getElementById("center");

rect.addEventListener("mousemove" , function (details) {
    // console.log("aysh");


    // 2nd step 
//  console.log(rect.getBoundingClientRect());
let rectangleLocation = rect.getBoundingClientRect();
    // console.log(details.clientX - rectangleLocation.left); //mouse ki loc sy rect k left sy minus ki to ye malom hua rect mai mouse kis point py h


    let insideRectVal = details.clientX - rectangleLocation.left;
    if (insideRectVal < rectangleLocation.width / 2) {
       let redColor= gsap.utils.mapRange(0 , rectangleLocation.width/2 ,255 , 0 , insideRectVal);


       gsap.to(rect , {
        backgroundColor: `rgb(${redColor} , 0 , 0)`  //0's for green and blue
        ,ease:Power4   //thora aram sy color chng ho
       })
        // console.log("mai left py ho");
    






    }

    else{
        // console.log("mai right py ho");

//center me blue color bilkul na ho hum ye chahty
        let blueColor= gsap.utils.mapRange( rectangleLocation.width/2 , rectangleLocation.width , 0 ,255, insideRectVal);


        gsap.to(rect , {
         backgroundColor: `rgb(0, 0 , ${blueColor} )`  //0's for green and blue
         ,ease:Power4   //thora aram sy color chng ho
        })
    }
   
})



rect.addEventListener("mouseleave", function name(params) {
    // console.log("aa");
    // rect.style.backgroundColor = "white"
    gsap.to(rect , {
        backgroundColor: "white"
    })
    
})
// console.log(gsap.utils.mapRange(0 , 250 ,255 , 0 , 23));  //231.54 exactly mouse yh h ye just sekhny k liye ta

