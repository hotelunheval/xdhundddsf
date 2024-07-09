// Swiper sliders
var swiper1 = new Swiper(".mySwiper-1", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper-2", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper3 = new Swiper(".mySwiper-3", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// Modal functionality
var modal = document.getElementById("modal-reserva");
var receiptModal = document.getElementById("modal-receipt");

var closeModalBtn = document.getElementsByClassName("close")[0];
var closeReceiptBtn = document.getElementsByClassName("close-receipt")[0];

closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

closeReceiptBtn.onclick = function() {
  receiptModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal || event.target == receiptModal) {
    modal.style.display = "none";
    receiptModal.style.display = "none";
  }
}

document.querySelectorAll('.btn-ver').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const habitacionNombre = e.target.parentElement.querySelector('h4').innerText;
    const habitacionPrecio = e.target.parentElement.querySelector('.price').innerText.split(' ')[0].replace('S/', '');

    document.getElementById('habitacion-nombre').value = habitacionNombre;
    document.getElementById('habitacion-precio').value = habitacionPrecio;
    
    modal.style.display = "block";
  });
});

document.getElementById('form-reserva').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const fechaInicio = document.getElementById('fecha-inicio').value;
  const fechaFin = document.getElementById('fecha-fin').value;
  const metodoPago = document.getElementById('metodo-pago').value;
  const habitacionNombre = document.getElementById('habitacion-nombre').value;
  const habitacionPrecio = document.getElementById('habitacion-precio').value;
  
  // Calculate the total cost (e.g., per day cost, etc.)
  const startDate = new Date(fechaInicio);
  const endDate = new Date(fechaFin);
  const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const totalCost = days * parseFloat(habitacionPrecio);

  document.getElementById('receipt-nombre').innerText = `Nombre: ${nombre}`;
  document.getElementById('receipt-habitacion').innerText = `Habitación: ${habitacionNombre}`;
  document.getElementById('receipt-precio').innerText = `Precio por Noche: S/${habitacionPrecio}`;
  document.getElementById('receipt-fecha').innerText = `Fecha: ${fechaInicio} - ${fechaFin}`;
  document.getElementById('receipt-metodo').innerText = `Método de Pago: ${metodoPago}`;
  document.getElementById('receipt-total').innerText = `Total: S/${totalCost.toFixed(2)}`;

  modal.style.display = "none";
  receiptModal.style.display = "block";
});
