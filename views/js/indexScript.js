/*butter.init({
    wrapperId: 'butter',
    cancelOnTouch: true,
    wrapperDamper: 0.07
})*/

function changeMenu() {
    if (document.getElementById("navbar-toggler").getAttribute('aria-expanded') == 'true') {
        document.getElementById("container-fluid").style.backgroundColor = "white";
        /*if (screen.width > 800) {
            document.getElementById("logo-text").textContent = "Tsumatrah";
        }*/
    } else {
        changeNav();
        document.getElementById("container-fluid").style.backgroundColor = "transparent";
    }
}

if (screen.width <= 800) {
    document.getElementById("logo-text").textContent = "";
}

setFooter();

function setFooter() {
    var diff = window.screen.height - document.getElementById("butter").offsetHeight;
    if (diff > 0) {
        document.getElementById("footer").style.position = "absolute";
        document.getElementById("footer").style.bottom = "0"
    }
}
