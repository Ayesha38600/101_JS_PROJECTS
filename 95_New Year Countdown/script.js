let countDownDate = new Date("1 jan, 2024 00:00:00").getTime();
let x= setInterval(() => {
 let now = new Date().getTime();
 let distance = countDownDate - now;
 
 let days = Math.floor(distance/(1000 * 60 * 60 * 24));
 let hours = Math.floor((distance %(1000 * 60 * 60 * 24)) / (1000 * 60 *60));
 let min = Math.floor((distance %(1000 * 60 * 60 )) / (1000 * 60 ));
 let sec = Math.floor((distance %(1000 * 60)) / 1000 );
 console.log(days);

 document.querySelector("#days").innerText = days; 
 document.querySelector("#hour").innerText = hours; 
 document.querySelector("#min").innerText = min; 
 document.querySelector("#sec").innerText = sec; 

} , 1000);
