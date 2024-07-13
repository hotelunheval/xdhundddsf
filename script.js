// Inicialización de Swiper para el carrusel de imágenes de inicio
const swiper1 = new Swiper('.mySwiper-1', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Inicialización de Swiper para la sección de servicios
const swiper2 = new Swiper('.mySwiper-2', {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Inicialización de Swiper para el carrusel de habitaciones
const swiper3 = new Swiper('.mySwiper-3', {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Funcionalidad para el carrito de reserva
document.addEventListener('DOMContentLoaded', () => {
  const carritoItems = document.getElementById('carrito-items');
  const finalizarReservaBtn = document.getElementById('finalizar-reserva');

  // Lista de habitaciones
  const habitaciones = [
    { nombre: 'Habitación Simple', precio: 100, imagen: 'images/b1.png' },
    { nombre: 'Habitación Doble', precio: 250, imagen: 'images/b2.jpg' },
    { nombre: 'Habitación Matrimonial', precio: 1000, imagen: 'images/b3.jpg' },
    { nombre: 'Habitación Presidencial', precio: 2250, imagen: 'images/b4.jpg' },
    { nombre: 'Habitación Suite', precio: 1500, imagen: 'images/b5.jpg' }
  ];

  // Agregar habitaciones al carrito
  function agregarAlCarrito(habitacion) {
    const item = document.createElement('div');
    item.classList.add('carrito-item');
    item.innerHTML = `
      <img src="${habitacion.imagen}" alt="${habitacion.nombre}">
      <div class="carrito-item-info">
        <h4>${habitacion.nombre}</h4>
        <p>Precio: S/${habitacion.precio} x noche</p>
        <button class="btn-eliminar" data-nombre="${habitacion.nombre}">Eliminar</button>
      </div>
    `;
    carritoItems.appendChild(item);
  }

  // Eliminar habitación del carrito
  carritoItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-eliminar')) {
      const nombreHabitacion = e.target.getAttribute('data-nombre');
      const items = carritoItems.querySelectorAll('.carrito-item');
      items.forEach(item => {
        if (item.querySelector('h4').textContent === nombreHabitacion) {
          carritoItems.removeChild(item);
        }
      });
    }
  });

  // Agregar habitaciones al carrito (puedes agregar esto de manera dinámica)
  habitaciones.forEach(habitacion => {
    agregarAlCarrito(habitacion);
  });

  // Funcionalidad para finalizar reserva
  finalizarReservaBtn.addEventListener('click', () => {
    // Puedes agregar funcionalidad para finalizar la reserva aquí
    alert('Reserva finalizada!');
  });
});
 