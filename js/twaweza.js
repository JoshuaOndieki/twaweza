function showHideBar(x) {
    x.classList.toggle("change");
    openNav()
}

function openNav() {
    document.getElementById("sidebar").style.width = "18%";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    x = document.getElementById("showhidebar");
    x.classList.toggle("change");
}

setTimeout(function(){
    document.getElementById("thisismyKenya").play();
}, 5000);
