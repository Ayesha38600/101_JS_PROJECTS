// ek div bnao aur uspy jab mouse chly to pic pop hojy aur phir chli jy 

// problem 1.....hamara mouse jab chlra h to kai bar chlra h jis ki wjha sy kai bar card creat hojy ga and wo hum ni chahty ...hum max 8 9 card bnana chahty h 

//solution ... mouse jitni bar chlra h cly lekin execution of fn max 8 chly ...>this is called throttling..kisi particular code ka execution kam krdena



// ...after throttleFunction  ....
// ye kro har bar ek div bnao ,
//  div ko absolute bnao ek width and hight do 
//  overflow hidden kro ,
//   div k andr image bnao and us image ko nichy push krdo,
//    image ko animated way me upr lao

 
    const throttleFunction=(func, delay)=>{
        let prev = 0; 
        return (...args) => {
          let now = new Date().getTime(); 
        if(now - prev> delay){ 
            prev = now;
            return func(...args);  
     }
     
    }
    }
    document.querySelector("#center").addEventListener("mousemove",  throttleFunction((dets)=>{   //is sy ye hua k fn 1.5s k gap sy chla delay sy chla

let div = document.createElement("div");
 div.classList.add("imagediv");
 div.style.left = dets.clientX + "px";  //jhn mouse h div whin bny
 div.style.top = dets.clientY + "px";




 let img = document.createElement("img");
 img.setAttribute("src" , "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwcGxhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"  ) ;

div.appendChild(img);  //is k bghir div kbhi mar k v ni dikhna........................



 document.body.appendChild(div);


gsap.to(img , {
    y: "0" ,    //y axis me 0 upr ajy
    ease: Power1 , 
    duration : 0.6
})
gsap.to(img , {
    y: "100%" , 
    delay:   .6,
    ease: Power2 , 
   
})



 setTimeout(() => {
    div.remove()        //2s k bad div ko hata dy
 }, 2000);
    //   console.log("chla ")
    }, 400));
    
