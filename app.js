const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const navBottom = document.querySelector(".navBottom");
    navBottom.addEventListener("click", (e)=>{
        switch (e.target.innerText) {
            case "Jordan":
                wrapper.style.transform = "translateX(-100vw)";
                break;
            case "Blazer":
                wrapper.style.transform = "translateX(-200vw)";
                break;
            case "Crater":
                wrapper.style.transform = "translateX(-300vw)";
                break;
            case "Hippie":
                wrapper.style.transform = "translateX(-400vw)";
                break;                          
        
            default:
                wrapper.style.transform = "translateX(0vw)";
        }
    })