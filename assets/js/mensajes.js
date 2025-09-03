// Lista de mensajes románticos
const messages = [
  "Eres mi niña hermosa, mi vida, mi todo 💕🥺.",
  "Qué lindo es saber que tengo a alguien como tú en mi vida ❤️✨.",
  "Tú eres la razón por la que me siento tan afortunado cada día 😍💫.",
  "No sabes cuánto me enamora tu manera de ser y de cuidarme 🥺💞.",
  "Eres el sueño que no quiero soltar nunca 🌙✨❤️.",
  "Gracias por hacerme sentir amado de la manera más especial 💕🫶.",
  "Todo lo que soy y todo lo que quiero se resume en estar contigo ❤️🥺.",
  "A tu lado el tiempo pasa pero los recuerdos quedan para siempre 💫",
  "Te amo porque contigo descubrí lo que es la felicidad de verdad 🥺❤️.",
  "Eres mi presente más bonito y mi futuro más soñado ✨😍."
];

    
  let messageIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100; // Velocidad de escritura
  const messageElement = document.getElementById("typedMessage");
  
  function typeMessage() {
    if (charIndex < messages[messageIndex].length) {
      messageElement.innerHTML += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeMessage, typingSpeed);
    } else {
      setTimeout(deleteMessage, 2000); // Espera antes de borrar el mensaje
    }
  }
  
  function deleteMessage() {
    if (charIndex > 0) {
      messageElement.innerHTML = messages[messageIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteMessage, typingSpeed);
    } else {
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(typeMessage, 500); // Espera antes de escribir el siguiente mensaje
    }
  }
  
  // Inicia la animación de máquina de escribir al cargar la página
  window.onload = typeMessage;
  
 // Generar corazones flotantes con emojis
// Lista de emojis tiernos y románticos
const emojis = ['❤️', '💕', '💖', '🌹', '🥰', '😘', '🌟', '🦋', '🌸'];

// Función para crear emojis flotantes aleatorios
function createFloatingEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'heart';
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
    emoji.style.animationDuration = 6 + Math.random() * 5 + 's'; // Duración aleatoria de animación
    emoji.style.fontSize = (1.5 + Math.random() * 1.5) + 'em'; // Tamaño aleatorio
    document.querySelector('.floating-hearts').appendChild(emoji);

    // Eliminar emoji después de la animación
    setTimeout(() => {
        emoji.remove();
    }, 11000);
}

// Crear nuevos emojis cada cierto tiempo
setInterval(createFloatingEmoji, 800); // Frecuencia de aparición

  