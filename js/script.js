// Add header to the HTML file

document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        // Después de que el header se ha cargado, añade los manejadores de eventos
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector("nav ul");

        menuToggle.addEventListener("click", function() {
            navLinks.classList.toggle("active");
        });
    });
});