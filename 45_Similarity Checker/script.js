let text1Input = document.getElementById("text1");
let text2Input = document.getElementById("text2");
let resultElement = document.getElementById("result");

let calculateButton = document.getElementById("calculateButton");

let calculateSimilarity =(text1 , text2) =>{
    //split of input text
    let token1 = text1.split(" ");
    let token2 = text2.split(" ");

     // console.log(token1);
     let set1 = new Set(token1); //set duplicate ko remove krta
     let set2 = new Set(token2);
    //  console.log(set1);

    //intersection of sets
    let intersection = new Set ([...set1].filter((x) => set2.has(x)));
    // console.log(intersection);

    //union of sets

    let union = new Set([...set1 , ...set2]);
    // console.log(union);


    //calculate jaccard similarty
    let similarty = (intersection.size / union.size) * 100 ;
    return similarty;


}

calculateButton.addEventListener("click" , () =>{
    let text1 = text1Input.value;
    let text2 = text2Input.value;

   let similarty = calculateSimilarity(text1 , text2)


   resultElement.textContent = similarty.toFixed(2);
   
})