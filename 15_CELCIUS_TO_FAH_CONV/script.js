const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
//celcius f= c*9/5 + 32
celcius.addEventListener("input", function () {
    // console.log("ayesha");
    const c= this.value;
    // console.log(c);
    const f= (c*1.8) + 32;
    console.log(f);
    fahrenheit.value = f.toFixed(5);

    
})
//fahrenheit c= 5/9(f-32)
fahrenheit.addEventListener("input",function (params) {
    // console.log("hy");
    const f = this.value;
    // console.log(f);
    const c = 0.6*(f-32);
    console.log(c);
    celcius.value= c.toFixed(5);

    
})