// ===============================
// inicio.js
// Contador de días, horas y minutos juntos
// ===============================

// Cambia esta fecha por la de inicio de su relación
const fechaInicio = new Date('2023-11-04T00:00:00'); 
const diasElement = document.getElementById('dias');

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  diasElement.textContent = `${dias} días, ${horas} horas, ${minutos} minutos juntos`;
}

// Actualiza al cargar
actualizarContador();

// Actualiza cada minuto
setInterval(actualizarContador, 1000 * 60);
