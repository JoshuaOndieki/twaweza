function showHideBar(x) {
    x.classList.toggle("change");
    openNav()
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}
