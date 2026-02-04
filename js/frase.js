// ===============================
// frase.js
// Funcionalidad de frase aleatoria
// ===============================

// Array de frases románticas
const frases = [
  "Cada día contigo es mi favorito 💖",
  "Eres la razón por la que sonrío siempre 😘",
  "No sabía que podía querer tanto a alguien 💕",
  "Contigo todo se siente mágico ✨",
  "Gracias por llenar mis días de amor y risas 🥰",
  "Eres mi pensamiento feliz cada mañana ☀️",
  "Cada momento contigo es un tesoro 💎",
  "Mi lugar favorito es a tu lado ❤️",
  "Nunca pensé que alguien pudiera hacerme tan feliz 😍",
  "Eres mi razón para creer en el amor verdadero 💌",
  "Eres mi persona favorita 💖",
  "Eres mi todo 🌟",
  "Eres mi mayor apoyo 💪",
  "Te pienso 16 horas al dia, las otras 8 te sueño 😴",
  "Te amo de aqui a la luna con pasito de tortuga ❤️🐢",
  "Eres la luz de mi vida 💡",
  "Te amo y te amare siempre 💕",
  "Eres el más guapo mi amor😍",
  "Gracias a Dios por juntar nuestras vidas 💖",
  "Eres mi sueño hecho realidad 🌈"

];

// Elementos del DOM
const btnFrase = document.getElementById('btnFrase');
const textoFrase = document.getElementById('textoFrase');

// Función para generar una frase aleatoria
btnFrase.addEventListener('click', () => {
  // Elegir un índice aleatorio
  const indice = Math.floor(Math.random() * frases.length);

  // Cambiar el texto de la tarjeta
  textoFrase.textContent = frases[indice];

  // Animación rápida al cambiar
  textoFrase.style.opacity = 0;
  setTimeout(() => {
    textoFrase.style.opacity = 1;
  }, 100);
});