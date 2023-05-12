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