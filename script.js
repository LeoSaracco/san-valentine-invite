const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const envelopeWrapper = document.getElementById('envelopeWrapper');
const envelope = document.getElementById('envelope');
const plea = document.getElementById('plea');
const buttons = document.getElementById('buttons');
const question = document.getElementById('question');
const heartsContainer = document.querySelector('.hearts');

// Mueve el botón "No" al intentar hacer clic
noButton.addEventListener('mouseover', () => {
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 50);
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener('click', () => {
  buttons.style.display = 'none'; // Oculta los botones
  question.style.display = 'none'; // Oculta la pregunta
  envelopeWrapper.style.display = 'block'; // Muestra el sobre
  
  setTimeout(() => {
    envelope.classList.add('open'); // Abre el sobre
    generateHearts(); // Agrega animación de corazones extra
  }, 100);

  plea.classList.add('hidden'); // Oculta el mensaje de súplica
});

noButton.addEventListener('click', () => {
    plea.style.display = 'block'; // Primero, lo mostramos
    setTimeout(() => {
      plea.classList.add('show'); // Luego, aplicamos la opacidad gradualmente
    }, 10); // Pequeño delay para permitir la transición
  });
  

// Genera corazones flotantes al aceptar
function generateHearts() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
const questionText = "¿Querés que pasemos nuestro San Valentín en Pasta Rossa?";
const questionElement = document.getElementById("question");

function typeText(element, text, speed) {
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i === text.length) clearInterval(interval);
  }, speed);
}

typeText(questionElement, questionText, 50); // Velocidad de tipeo en milisegundos
