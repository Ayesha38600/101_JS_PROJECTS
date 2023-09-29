// console.log("hy");
function calculator() {
    // alert("hy")
    const firstInput = parseInt(document.getElementById("firstInput").value);
    const SECONDInput = parseInt(document.getElementById("SECONDInput").value);
    const options = (document.getElementById("options").value);
    console.log(firstInput);
    console.log(SECONDInput);
    console.log(options);
    

    if (options=== "+") {
        var RESULT =  firstInput + SECONDInput ;
        
    }
    if (options=== "-") {
        var RESULT =  firstInput - SECONDInput ;
        
    }
    if (options=== "*") {
        var RESULT =  firstInput * SECONDInput ;
        
    }
    if (options=== "/") {
        var RESULT =  firstInput / SECONDInput ;
        
    }
    document.getElementById('RESULT').value =RESULT;
}