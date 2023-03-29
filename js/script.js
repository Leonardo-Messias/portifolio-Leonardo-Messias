function openMenu(){

    let SideOpenMenu = document.getElementById('barra-menu')
    if(SideOpenMenu.style.width == "0px" ){
        SideOpenMenu.style.width = "12.5rem";
    }else{
        SideOpenMenu.style.width = "0px";
    }
}

