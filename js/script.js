function openMenu(){

    let SideOpenMenu = document.getElementById('barra-menu')
    if(SideOpenMenu.style.width == "0px" ){
        SideOpenMenu.style.width = "12.5rem";
    }else{
        SideOpenMenu.style.width = "0px";
    }
}

function closeMenu(){
    let SideOpenMenu = document.getElementById('barra-menu')
    SideOpenMenu.style.width = "0px";
}


const btn = document.getElementById("btnTop")

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
}
)

window.addEventListener("scroll", ocultar)

function ocultar(){
    if(window.scrollY > 200){
        btn.style.display = "flex"
    }else{
        btn.style.display = "none"
    }
}

ocultar()


//Seção Cookies 
    let cookieModal = document.querySelector(".cookie-container")
    let cancelCookieBtn = document.querySelector(".button.cancel")
    let acceptCookieBtn = document.querySelector(".button.accept")

    cancelCookieBtn.addEventListener("click", function (){
        cookieModal.classList.remove("active")
    })

    acceptCookieBtn.addEventListener("click", function (){
        cookieModal.classList.remove("active")
        localStorage.setItem("cookieAccepted", "true")   
    })  

    setTimeout(function(){
        let cookieAccepted = localStorage.getItem("cookieAccepted")
        if(cookieAccepted != "true"){
            cookieModal.classList.add("active")
        }
    }, 2000)