function togglemenu() {
    var hamburger = document.getElementById("hamburger");
    if (hamburger.className === "responsive") {
        hamburger.className = "normal";
    } else {
        hamburger.className = "responsive";
    }
}