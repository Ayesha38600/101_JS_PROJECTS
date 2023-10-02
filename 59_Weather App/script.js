
let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
// let input = document.getElementById("inp").value;
let input = document.getElementById("inp");
let API_key = "51c560602ed4a64767785ece9492fc9d";


let data = async function (search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=Metric`)
    // console.log(getData);
    let jsonData =await getData.json();
    // console.log(jsonData.weather);
    console.log(jsonData);
    
    // error 2 tra k hoty ... 400 and 404  ... 400 tab ata jab kuch enter na kro and search kro .. 404 tab ata h jab ghlt city etc enter krdo 

if (jsonData.cod == 400) {
    alert("Please Enter Location Name")
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLiaKXwYA63LHAfcvU0-dUXxg5OE8ID-0sad7ndIjj-uHJ_1papu_eGHsH3j0Aw72xsfc&usqp=CAU"


    city.innerHTML = search;  //undefined na ay isliye ye sab again paste krdya
 
}
if (jsonData.cod == 404) {
    alert("Please Enter Valid Location Name")
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySt7WcNYvhKKlth9PL83GACiqatOz8kqRnw&usqp=CAU"


    
    city.innerHTML = search;  //undefined na ay isliye ye sab again paste krdya
 
}



    

    city.innerHTML = jsonData.name;
    temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
    type.innerHTML = jsonData.weather[0].main;



    if (type.innerHTML == "Clouds") {
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvEwoYyFsVq4P7XPdVzCtO_H-wr5x_MmreQ&usqp=CAU"
        
    }
    else if (type.innerHTML =="Clear") {
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKr4zkv6Uuw1YG4KEYwxaVu0SRxckKmX_kVw&usqp=CAU"
    }
    else if (type.innerHTML == "Smoke") {
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihyvOCnZ9PH_sw7KKF8WeyYC5Cdysw3JYrQ&usqp=CAU"
        
    }
    else if (type.innerHTML == "Rain") {
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOd9Tm0PkmvMkhnVN2SnHPWl_we1RdiieUJA&usqp=CAU"
        
    }
    else if (type.innerHTML == "Snow") {
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOd9Tm0PkmvMkhnVN2SnHPWl_we1RdiieUJA&usqp=CAU"
        
    }
    else if (type.innerHTML == "Haze") {
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihyvOCnZ9PH_sw7KKF8WeyYC5Cdysw3JYrQ&usqp=CAU"
        
    }
    else if (type.innerHTML == "Storm") {
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHwJMR2JZ2mxvHlNkKnc1FNhGQix8fJqJMQ&usqp=CAU"
        
    }

    input.value = ""


    

}


function myFun(params) {
search = input.value;
    data(search);
    
}
