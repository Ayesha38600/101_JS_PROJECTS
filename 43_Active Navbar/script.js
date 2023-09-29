let sections = document.querySelectorAll("section")
console.log(sections);
let navLinks = document.querySelectorAll("header nav a");
console.log(navLinks);


window.onscroll = () =>{    //onscroll js code ko scrolling py executable bnata h
    sections.forEach(sec => {
        let top = window.scrollY;
        //scrolly.. document currently kitny pixels scroll hua wa h
        let offset = sec.offsetTop;   //offset top of the section sy jo element hoga div etc whn tak ka distance deta h
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");


        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id +  ']').classList.add("active");

            })
        }
    })
}