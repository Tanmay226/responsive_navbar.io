const mobile_nav = document.querySelector(".icons");
const navbar = document.querySelector(".navbar");


const toggleNav =()=>{
    // alert("follow me!")

    navbar.classList.toggle("active")

}





mobile_nav.addEventListener("click" , ()=> toggleNav());