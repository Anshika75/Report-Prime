var nav=document.getElementById("navsec");


function showNav(){
    if (nav.classList.contains("d-block")) {
    nav.classList.remove("d-block")
    nav.classList.add("d-none");}
    else{
        nav.classList.remove("d-none")
    nav.classList.add("d-block");
    }
}