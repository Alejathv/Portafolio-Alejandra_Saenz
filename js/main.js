document.addEventListener("DOMContentLoaded", function () {
    const filtros = document.querySelectorAll(".filtro");
    const tarjetas = document.querySelectorAll(".tarjeta-cuerpo");

    filtros.forEach(filtro => {
        filtro.addEventListener("click", function () {
            const categoria = this.dataset.categoria;

            tarjetas.forEach(tarjeta => {
                if (categoria === "todos") {
                    tarjeta.style.display = "block"; // Muestra todas
                } else if (tarjeta.classList.contains(categoria)) {
                    tarjeta.style.display = "block"; // Muestra las que coinciden
                } else {
                    tarjeta.style.display = "none"; // Oculta las demás
                }
            });
        });
    });
});
// Esperamos que el DOM se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el botón del modo noche por su ID
    const modoNocheBtn = document.getElementById('modo-noche');

    // Agregamos un listener de evento para el clic
    modoNocheBtn.addEventListener('click', function() {
        // Alternamos la clase "noche" en el body
        document.body.classList.toggle('noche');

        // Obtenemos el ícono dentro del botón
        const icono = modoNocheBtn.querySelector('i');

        // Cambiamos el ícono dependiendo del estado de la clase "noche"
        if (document.body.classList.contains('noche')) {
            icono.classList.remove('fa-sun');   // Si está en modo noche, removemos el ícono de sol
            icono.classList.add('fa-moon');     // Ponemos el ícono de luna
        } else {
            icono.classList.remove('fa-moon');  // Si está en modo claro, removemos el ícono de luna
            icono.classList.add('fa-sun');      // Ponemos el ícono de sol
        }
    });
});

