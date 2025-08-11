const nav = document.getElementById("nav")
const btnOpen = document.getElementById("btn-open")
const BtnClose = document.getElementById("btn-close");
const navLink = document.querySelectorAll(".nav-link ")

console.log(navLink)


btnOpen.addEventListener("click",()=>{
    nav.classList.add("visible")
})

BtnClose.addEventListener("click",()=>{
    nav.classList.remove("visible")
})

navLink.forEach(link =>{
    link.addEventListener("click",()=>{
        nav.classList.remove("visible")
    })
})
