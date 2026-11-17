document.addEventListener("DOMContentLoaded", function() {

    // Obtenemos el elemento del año
    const anio = document.getElementById("anio");

    // Mostramos el año actual automáticamente
    anio.textContent = new Date().getFullYear();

});
