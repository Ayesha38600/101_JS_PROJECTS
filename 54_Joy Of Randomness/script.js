let btn = document.querySelector("#emoji");
let emojis =[
    "😀",
    "😃",
    "😄",
    "😁" ,
    "😆" ,
    "😅" ,
    "🤣" ,
    "😂" ,
    "🙂" ,
    "🙃"
];


btn.addEventListener("mouseover" , () =>{
    btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]
})