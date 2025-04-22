const menuIcon = document.querySelector(".menu i");
const slideMenuIcon = document.querySelector(".slide-menu .menu i");
const slideMenu = document.querySelector(".slide-menu");


menuIcon.addEventListener("click", ()=> {
    slideMenu.style.right = "0";
})

slideMenuIcon.addEventListener("click", ()=> {
    slideMenu.style.right = "-500px";
})

const slides = document.querySelectorAll(".slides img");
const contents = document.querySelectorAll(".content-group .content");
const prev = document.querySelector(".nav-buttons .prev");
const next = document.querySelector(".nav-buttons .next");



let index = 0;
next.addEventListener("click", ()=>  {
    contents.forEach(c => {
        c.style.marginTop = "-200px";
        c.style.opacity = "20%";
        c.style.transition = "all 300ms ease-out"
        
        setTimeout(()=> {
            c.style.display = "none";
        }, 305);

    })
    slides.forEach(slide => {
        setTimeout(()=> {
            if(slide.className === 'active') {
                slide.classList.remove("active");
            }
        }, 310);
        index++
    
        console.log(index);
        // setTimeout(()=> {
            slides[index].classList.add("active");
        // }, 310);
        // slide.classList.remove("active");
    })
})