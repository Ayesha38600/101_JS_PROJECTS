
const foot =document.getElementById("foot");
const meter = document.getElementById("meter");

//foot
foot.addEventListener("input",function (params) {
    // console.log("yes");
    const f = this.value;
    // console.log(f);
    const m = f* 0.304;
    // console.log(m);
    meter.value=m.toFixed(5);

})

//meter f=m*3.28
meter.addEventListener("input", function (params) {
    // console.log("yes ayesha");
    const m =this.value;
    // console.log(m);
    const f = m* 3.28;
    // console.log(f);
    foot.value=f.toFixed(5);
    
})