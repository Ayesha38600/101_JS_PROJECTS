// let arr = [1 , 2, 3 ];
// let clutter = ""  //by default if let clutter ; only chor dety to undefined milta isliye string k 7 khali chora
// arr.forEach(function (val) {
//     //array sixe is 3 so ye loop 3 bar chlega
//     // console.log(val);
// clutter = clutter + " hello"  //3 times hello
// // clutter = clutter + val;  //123
    
// })

// console.log(clutter);






let arr = [

    //array of objects
    {dp: "https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" , story: "https://images.unsplash.com/photo-1542027959157-98e6745f4ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" },
    {dp: "https://images.unsplash.com/photo-1522767131594-6b7e96848fba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" , story: "https://images.unsplash.com/photo-1516029637308-3adce832dbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" },
    {dp: "https://images.unsplash.com/photo-1563987219716-dac41f2d0b3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" , story: "https://images.unsplash.com/photo-1600107215508-1886e6e49c11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" },
    {dp: "https://images.unsplash.com/photo-1522765438697-bbbcc76e8614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" , story: "https://images.unsplash.com/photo-1531847940878-66b8fa862eeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" },
    {dp: "https://images.unsplash.com/photo-1558888522-a0172835ccd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" , story: "https://plus.unsplash.com/premium_photo-1672202091539-91082aef28d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" },



];

let clutter = ""
arr.forEach(function (val , index) {
    // console.log(val.story);
    // console.log(val , index);
    clutter += `<div class="story">
    <img id="${index}" src="${val.dp}" alt="">
</div>`
    
})

console.log(clutter);
document.getElementById("storiyan").innerHTML = clutter;


document.getElementById("storiyan").addEventListener("click" ,function name(details) {
    // console.log("a");

    // console.log(details);
    // console.log(details.target.id); //ids basically array k index ki tra h thats why nichy dekho yehi kam kia
    // console.log(arr[details.target.id]);
    // console.log(arr[details.target.id].story);



    // arr[details.target.id].story  golden value


   document.querySelector(".full-screen").style.display = "block" ;
   document.querySelector(".full-screen").style.backgroundImage = `url(${arr[details.target.id].story})`

setTimeout(() => {
    document.querySelector(".full-screen").style.display = "none" ;
}, 3000);

})


