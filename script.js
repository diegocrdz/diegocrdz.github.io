// Hide the html extension from the URL

if (window.location.pathname.endsWith('.html')) {
    window.history.replaceState(null, null, window.location.pathname.replace('.html', ''));
}

// Add header to the HTML file

document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });
});

// Show and hide the navigation menu

document.addEventListener("DOMContentLoaded", function ()
{
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".header nav ul");

    menuToggle.addEventListener("click", function ()
    {
        navLinks.classList.toggle("active");
    });
});