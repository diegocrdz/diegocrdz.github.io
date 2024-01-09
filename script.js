document.addEventListener("DOMContentLoaded", function ()
{
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function ()
    {
        navLinks.classList.toggle("active");
    });

    window.addEventListener("scroll", function ()
    {
        const inicioSection = document.querySelector("#inicio");
        const inicioSectionHeight = inicioSection.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition < inicioSectionHeight * 0.20)
        {
            document.querySelector("header").style.transition = "background-color 0.3s ease";
            document.querySelector("header").style.backgroundColor = "transparent";
        } else
        {
            document.querySelector("header").style.transition = "background-color 0.3s ease";
            document.querySelector("header").style.backgroundColor = "#313131";
        }
    });
});
