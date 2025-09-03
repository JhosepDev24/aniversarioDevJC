onload = () =>{
    document.body.classList.remove("container");
};

// Función para generar los corazones en posiciones aleatorias
// Función para generar valores aleatorios para los ejes X e Y
function getRandomDirection() {
    // Valores aleatorios entre -50px y 50px (ajusta el rango como desees)
    let randomX = (Math.random() * 100 - 50) + 'px';
    let randomY = (Math.random() * 100 - 50) + 'px';
    return { randomX, randomY };
  }
  
  function createHeartSparkles(container, numberOfHearts) {
    for (let i = 0; i < numberOfHearts; i++) {
      let heart = document.createElement('div');
      heart.classList.add('extra-heart');
      heart.innerHTML = '❤';
  
      // Posición aleatoria alrededor del corazón
      let randomTop = Math.random() * 80 + 10 + '%'; // Distribuye entre 10% y 90%
      let randomLeft = Math.random() * 80 + 10 + '%'; // Distribuye entre 10% y 90%
      
      heart.style.top = randomTop;
      heart.style.left = randomLeft;
      
      // Retraso aleatorio en la animación
      let randomDelay = Math.random() * 2 + 's';
      heart.style.animationDelay = randomDelay;
  
      // Genera direcciones aleatorias para cada corazón
      let { randomX, randomY } = getRandomDirection();
      heart.style.setProperty('--random-x', randomX);
      heart.style.setProperty('--random-y', randomY);
  
      container.appendChild(heart);
    }
  }
  
  // Selecciona todos los contenedores de chispitas de corazones
  let sparkleContainers = document.querySelectorAll('.heart-sparkles');
  
  // Para cada contenedor, genera un número definido de corazones
  sparkleContainers.forEach(container => {
    createHeartSparkles(container, 30); // Ajusta el número de corazones según desees
  });
  