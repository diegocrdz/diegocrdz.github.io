window.addEventListener("load", function() {
    // Obtén el elemento que se desvanecerá
    var fadeElement = document.getElementById("fade-in");

    // Establece un temporizador para mostrar el elemento después de un breve retraso
    setTimeout(function() {
        // Muestra el elemento y cambia su opacidad a 1 (efecto de fade)
        fadeElement.style.display = "block";
        fadeElement.style.opacity = 1;
    }, 1000); // 1000 ms = 1 segundo
});

var textoRecargar = document.getElementById("texto-recargar");

textoRecargar.addEventListener("click", function(){
    location.reload();
});