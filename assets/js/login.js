document.addEventListener('DOMContentLoaded', function() {
    // Crear corazones flotantes
    const heartsContainer = document.getElementById('floating-hearts');
    const heartIcons = ['❤️', '💕', '💖', '💗', '💓', '💞', '💘'];
    
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = heartIcons[Math.floor(Math.random() * heartIcons.length)];
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.fontSize = `${Math.random() * 15 + 10}px`;
        heartsContainer.appendChild(heart);
    }
    
    // Validación del formulario de acceso
    const enterBtn = document.getElementById('enter-btn');
    
    enterBtn.addEventListener('click', function() {
        const name = document.getElementById('name').value.trim();
        const chatDay = document.getElementById('chat-day').value.trim().toLowerCase();
        const firstMessage = document.getElementById('first-message').value.trim().toLowerCase();
        const color = document.getElementById('color').value.trim().toLowerCase();
        const relationshipDay = document.getElementById('relationship-day').value.trim().toLowerCase();
        
        let isValid = true;
        
        // Validar nombre
        if (name === '') {
            document.getElementById('name-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('name-error').style.display = 'none';
        }
        
        // Validar día que empezaron a hablar por chat
        if (chatDay !== '31 de julio') {
            document.getElementById('chat-day-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('chat-day-error').style.display = 'none';
        }
        
        // Validar primer mensaje
        if (firstMessage !== 'hola bb') {
            document.getElementById('first-message-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('first-message-error').style.display = 'none';
        }
        
        // Validar color favorito
        if (color !== 'rosado') {
            document.getElementById('color-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('color-error').style.display = 'none';
        }
        
        // Validar día que se hicieron novios
        if (relationshipDay !== '3 de febrero') {
            document.getElementById('relationship-day-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('relationship-day-error').style.display = 'none';
        }
        
        // Si todo es válido, guardar en localStorage y redirigir a home.html
        if (isValid) {
            // Guardar que el usuario ya completó el login
            localStorage.setItem('anniversaryLoggedIn', 'true');
            localStorage.setItem('userName', name);
            localStorage.setItem('userColor', color);
            
            // Redirigir a la página principal
            window.location.href = 'home.html';
        }
    });
    
    // Permitir enviar el formulario con la tecla Enter
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            enterBtn.click();
        }
    });
});