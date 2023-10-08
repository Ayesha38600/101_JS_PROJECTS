// ek rectangle banao and  jb mouse center py ho to rectangle v center py ho , jab mouse left jana strt ho to rectangle v left jana strt ho  , jab jaise jaise mouse left jaye to rectangle ki speed left jate jate slow hojaye  same happens with RHS AS WELL;


window.addEventListener("mousemove" , function name(details) {
    let rect = this.document.querySelector(".rect")
//mapRange sy hum mapping krty h ...yhn hum left screen ka left sy 0 value h right sy 100 let kro , to mai 0 ko map krna chahty ho 20px yyani jo half rectangle bahir jara screen sy wo 20 etc jo v tum lena chaho wo andr hi ruk jy screen k 20px so humny left mai 0 ko 20px sy map krdya , right mai 100px ko 80px sy map krdya ..... mapRange(minInput =0 , MaxInput =100 , minOutput = 20 , maxOutput=80 ) .....yehi cheez nichy apply kry 


//window.innerWidth ....q k hamy ni malom screen kitni bdi hogy so jitni v bdi hogy ye le lega

// 100 + rect.getBoundingClientRect().width / 2  ... 100 shows sreen k andr hona card ka... rect.getBoundingClientRect().width / 2  --->ye card ko adha andr kra h 

let xValue = gsap.utils.mapRange(0 , window.innerWidth , 100 + rect.getBoundingClientRect().width / 2 , window.innerWidth - (100  + rect.getBoundingClientRect().width / 2 ), details.clientX);






    // console.log(details.clientX);
    
    // hmay 2 cheezy krni hogy ek rectangle half bahir na rhy  last ki boundry sy 2nd kuch kam fasly py hi fix hojy 
    
    gsap.to(".rect" , {  //is sy jhn mouse jy ga whn rectangle moive krega
        // left : details.clientX + "px",
        left : xValue  ,
        ease : Power3,
    })
    
})