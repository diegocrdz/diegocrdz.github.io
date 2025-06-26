// General script for the website

// Add header to the HTML file
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        // After the header is loaded, set up the menu toggle functionality
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector("nav ul");

        menuToggle.addEventListener("click", function() {
            navLinks.classList.toggle("active");
        });
    });
});