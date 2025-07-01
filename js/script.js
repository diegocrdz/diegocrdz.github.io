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

        // Dark/light mode toggle
        const modeToggle = document.querySelector("#mode-btn");
        const body = document.body;

        // Get saved mode from localStorage or default to dark
        const savedMode = localStorage.getItem('theme-mode') || 'dark';
        
        // Apply the saved mode
        if (savedMode === 'dark') {
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
        } else {
            body.classList.add("light-mode");
            body.classList.remove("dark-mode");
        }

        modeToggle.addEventListener("click", (event) => {
            event.preventDefault();

            body.classList.toggle("dark-mode");
            body.classList.toggle("light-mode");

            // Save the current mode to localStorage
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem('theme-mode', 'dark');
            } else {
                localStorage.setItem('theme-mode', 'light');
            }
        });
    });
});