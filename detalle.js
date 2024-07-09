document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tipoHabitacion = urlParams.get('tipo');

    const habitaciones = {
        simple: [
            { img: 'images/simple1.jpg', nombre: 'Habitación Simple 1', precio: 'S/100 x noche' },
            { img: 'images/simple2.jpg', nombre: 'Habitación Simple 2', precio: 'S/110 x noche' },
            // Añadir más habitaciones simples aquí
        ],
        doble: [
            { img: 'images/doble1.jpg', nombre: 'Habitación Doble 1', precio: 'S/250 x noche' },
            { img: 'images/doble2.jpg', nombre: 'Habitación Doble 2', precio: 'S/260 x noche' },
            // Añadir más habitaciones dobles aquí
        ],
        // Añadir más tipos de habitaciones aquí
    };

    const titulo = document.getElementById('titulo-tipo-habitacion');
    const contenedorHabitaciones = document.querySelector('.habitaciones-detalle');

    if (tipoHabitacion && habitaciones[tipoHabitacion]) {
        titulo.textContent = `Detalle de ${tipoHabitacion.charAt(0).toUpperCase() + tipoHabitacion.slice(1)}`;
        habitaciones[tipoHabitacion].forEach(habitacion => {
            const div = document.createElement('div');
            div.className = 'product';
            div.innerHTML = `
                <img src="${habitacion.img}" alt="${habitacion.nombre}">
                <div class="product-txt">
                    <h4>${habitacion.nombre}</h4>
                    <span class="price">${habitacion.precio}</span>
                    <a href="#" class="btn-reservar">Reservar</a>
                </div>
            `;
            contenedorHabitaciones.appendChild(div);
        });
    } else {
        titulo.textContent = 'Habitación no encontrada';
    }
});
