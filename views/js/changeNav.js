var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    /*var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbars").style.top = "0";
    } else {
        document.getElementById("navbars").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos; */
    
    changeNav();
}

setFooter();

document.getElementById("logo-text").textContent = "";
document.getElementById("navbars").style.backgroundColor = "transparent";
document.getElementById("navbars").style.boxShadow = "none"

function changeNav() {
    if (screen.height * 0.4 < scrollY) {
        document.getElementById("navbars").style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        if (screen.width > 800) {
            document.getElementById("logo-text").textContent = " Tsumatrah";
        }
    } else {
        document.getElementById("logo-text").textContent = "";
        document.getElementById("navbars").style.backgroundColor = "transparent";
    }
    document.getElementById("navbars").style.transition = "0.4s";
}
