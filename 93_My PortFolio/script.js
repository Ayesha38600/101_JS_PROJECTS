// alert()
Shery.imageEffect("#back" , {style: 5 ,config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.93,"range":[-1,1]},"aspect":{"value":2.093922578157198},"gooey":{"value":true},"infiniteGooey":{"value":false},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.55,"range":[0,2]},"discard_threshold":{"value":0.85,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},  gooey : true})

let elems = document.querySelectorAll(".elem")
elems.forEach(function name(elem) {
    var h1s = elem.querySelectorAll("h1");
let index = 0;
let animating = false ;

document.querySelector("#main").addEventListener("click" , function name(params) {
if (!animating) {
    animating = true;
    gsap.to(h1s[index] , {
        top : "-=100%" ,
        ease : Expo.easeInOut ,
        duration: 1 , 
        onComplete : function name(params) {
            // alert()
            gsap.set(this._targets[0] , {top: "100%"})
            animating = false ;
        }
    });  
    index === h1s.length -1  ? (index = 0) : index ++ ;
    gsap.to(h1s[index] , {
        top : "-=100%" ,
        ease : Expo.easeInOut ,
        duration: 1
    }); 
} 

    
})
})



// 
Shery.imageEffect(".contact" , {style: 5 ,config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.93,"range":[-1,1]},"aspect":{"value":2.093922578157198},"gooey":{"value":true},"infiniteGooey":{"value":false},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.55,"range":[0,2]},"discard_threshold":{"value":0.85,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},  gooey : true})


