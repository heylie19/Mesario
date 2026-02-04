// ===============================
// JS para la ruleta de regalos con indicador
// ===============================

const girarBtn = document.getElementById('girarBtn');
const resultado = document.getElementById('resultado');
const canvas = document.getElementById('ruleta');
const ctx = canvas.getContext('2d');

// Lista de regalos
const regalos = [
  'Una orden de alitas',
  'Un Beso',
  'Un Chocolate',
  'Orden de tajadas',
  '4 lempiras',
  'Un Licuado',
];

const numRegalos = regalos.length;
const angulo = 2 * Math.PI / numRegalos;
let anguloRotacion = 0;

// Dibujar ruleta
function dibujarRuleta(){
  for(let i=0; i<numRegalos; i++){
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 150, angulo*i, angulo*(i+1));
    ctx.fillStyle = i%2===0 ? '#f8b195' : '#f67280';
    ctx.fill();
    ctx.stroke();

    // Texto
    ctx.save();
    ctx.translate(150,150);
    ctx.rotate(angulo*(i+0.5));
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.font = '14px Arial';
    ctx.fillText(regalos[i], 140, 0);
    ctx.restore();
  }
}

dibujarRuleta();

// Girar ruleta
girarBtn.addEventListener('click', ()=>{
  const vueltas = Math.random()*360 + 720; // 2-3 vueltas aleatorias
  const radianes = vueltas * Math.PI/180;
  anguloRotacion += radianes;

  canvas.style.transition = 'transform 4s ease-out';
  canvas.style.transform = `rotate(${anguloRotacion}rad)`;

  // Determinar regalo usando el indicador
  setTimeout(()=>{
    const rot = anguloRotacion % (2*Math.PI);
    let indice = Math.floor((2*Math.PI - rot + angulo/2) / angulo) % numRegalos;
    resultado.textContent = `🎉 ¡Ganaste: ${regalos[indice]}!`;
  }, 4000);
});
