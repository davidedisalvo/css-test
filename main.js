
function showNav() {
    var hamburgerButton = document.getElementById("o-hamburger-active");
    var hamburgerNav = document.getElementById("o-hamburger-nav-active");
    var hamburgerImg = document.getElementById("o-hamburger-img-active");
    if (hamburgerButton.className === "o-hamburger") {
        hamburgerButton.className += " o-hamburger-active";
    } else {
        hamburgerButton.className = "o-hamburger";
    }
    if (hamburgerNav.style.display === "none") {
        hamburgerNav.style.display = "flex";
    } else {
        hamburgerNav.style.display = "none";
    }
    if (hamburgerImg.style.width === "3rem") {
        hamburgerImg.style.width = "2.5rem";
        hamburgerImg.style.marginTop = "0.25rem";
    } else {
        hamburgerImg.style.width = "3rem";
    }
}	
