let access_key = "veTkYmZlTGrHf0NdioWCgYxbpDGV4vNohB5-saigm_M";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let showData = document.querySelector(".showData")
let load = document.getElementById("load");
let page =1;

let getData =async (searchValue) =>{
    let fetching =await fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&per_Page=28&P=1 age&client_id=${access_key}`);


showData.innerHTML =""

    let jsonData = await fetching.json();
    console.log(jsonData.results[0]);
    // console.log(fetching);

    jsonData.results.forEach(function (data) {
        console.log(data.urls.full);


        let div = document.createElement("div");
        div.classList.add("card");
        showData.appendChild(div);

        div.innerHTML= `
        <img src="${data.urls.full}" alt="">
        <a href="${data.links.html}" target="_blank">${data.alt_description}</a>
        
        `
        //target="_blank" for open in new window
        
    })
}
// getData();


searchBtn.addEventListener("click" , function name(params) {
    let searchValue = searchInput.value ;
    getData(searchValue);
    
})


load.addEventListener("click" , function name(params) {
    let searchValue = searchInput.value ;
    getData(searchValue);
    
})