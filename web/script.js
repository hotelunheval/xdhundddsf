document.addEventListener('DOMContentLoaded', function () {
    var swiper1 = new Swiper('.mySwiper-1', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
    var swiper2 = new Swiper('.mySwiper-2', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
    function reservarHabitacion(nombre, precio, cliente, dias) {
      const total = parseFloat(precio.replace('S/', '').replace(' x noche', '')) * dias;
      alert(`Cliente: ${cliente}\nHas reservado la habitación ${nombre} por ${dias} noches.\nTotal: S/${total}`);
    }
  
    const habitaciones = document.querySelectorAll('.swiper-slide .product');
  
    habitaciones.forEach(habitacion => {
      const botonReserva = habitacion.querySelector('.btn-reservar');
      const nombre = habitacion.querySelector('h4').innerText;
      const precio = habitacion.querySelector('.price').innerText;
  
      botonReserva.addEventListener('click', function(event) {
        event.preventDefault(); 
  
        const cliente = prompt("Por favor, ingrese su nombre:");
        if (!cliente) {
          alert("Debe ingresar su nombre para continuar con la reserva.");
          return;
        }
  
        const dias = prompt("¿Por cuántos días desea reservar la habitación?");
        if (!dias || isNaN(dias) || dias <= 0) {
          alert("Debe ingresar un número válido de días para continuar con la reserva.");
          return;
        }
  
        reservarHabitacion(nombre, precio, cliente, dias);
      });
    });
  });
  