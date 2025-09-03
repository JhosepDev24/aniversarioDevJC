document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el usuario ya completó el login
    const isLoggedIn = localStorage.getItem('anniversaryLoggedIn');
    
    if (isLoggedIn !== 'true') {
        // Si no ha iniciado sesión, redirigir a login.html
        window.location.href = 'login.html';
        return;
    }
    
    // Si está logueado, continuar con la configuración de la página
    
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
    
    // Personalizar con los datos guardados
    const userName = localStorage.getItem('userName');
    const userColor = localStorage.getItem('userColor');
    
    if (userName) {
        document.title = `Para ${userName} - Nuestro Aniversario`;
    }
    
    if (userColor) {
        document.documentElement.style.setProperty('--primary-color', userColor);
    }
    
    // El resto del código JavaScript de la página principal
    // Modal de la carta
    const readBtn = document.getElementById('read-btn');
    const letterModal = document.getElementById('letter-modal');
    const closeModal = document.getElementById('close-modal');
    
    if (readBtn && letterModal && closeModal) {
        readBtn.addEventListener('click', function() {
            letterModal.style.display = 'flex';
        });
        
        closeModal.addEventListener('click', function() {
            letterModal.style.display = 'none';
        });
        
        // Cerrar modal al hacer clic fuera
        window.addEventListener('click', function(event) {
            if (event.target === letterModal) {
                letterModal.style.display = 'none';
            }
        });
    }
    
    // Carrusel de fotos
    const carousel = document.getElementById('carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselControls = document.getElementById('carousel-controls');
    
    if (carousel && carouselItems.length > 0 && carouselControls) {
        let currentIndex = 0;
        
        // Crear controles del carrusel
        for (let i = 0; i < carouselItems.length; i++) {
            const button = document.createElement('button');
            button.innerHTML = i + 1;
            button.addEventListener('click', function() {
                goToSlide(i);
            });
            carouselControls.appendChild(button);
        }
        
        function goToSlide(index) {
            currentIndex = index;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Actualizar botones activos
            document.querySelectorAll('#carousel-controls button').forEach((btn, i) => {
                if (i === currentIndex) {
                    btn.style.background = 'var(--primary-color)';
                    btn.style.color = 'white';
                } else {
                    btn.style.background = 'transparent';
                    btn.style.color = 'var(--primary-color)';
                }
            });
        }
        
        // Iniciar carrusel
        goToSlide(0);
        
        // Auto avanzar el carrusel
        setInterval(function() {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            goToSlide(currentIndex);
        }, 5000);
    }
    
    // Botón de WhatsApp
    const sendBtn = document.getElementById('send-btn');
    const messageText = document.getElementById('message');
    
    if (sendBtn && messageText) {
        sendBtn.addEventListener('click', function() {
            const text = messageText.value.trim();
            if (text !== '') {
                const encodedText = encodeURIComponent(text);
                window.open(`https://wa.me/?text=${encodedText}`, '_blank');
            } else {
                alert('Por favor escribe un mensaje antes de enviar.');
            }
        });
    }
    
    // Efectos de entrada para elementos al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos para animarlos cuando son visibles
    document.querySelectorAll('.timeline-item, .carousel-item, .video-container, .message-form').forEach(item => {
        item.style.opacity = '0';
        observer.observe(item);
    });
    
    // Modal de sorpresas
    const surpriseBtn = document.getElementById('surprise-btn');
    const surpriseModal = document.getElementById('surprise-modal');
    const closeModalBtn = document.getElementById('surprise-modal-close');
    
    if (surpriseBtn && surpriseModal && closeModalBtn) {
        // Abrir modal al hacer clic en el botón de sorpresas
        surpriseBtn.addEventListener('click', function() {
            surpriseModal.style.display = 'flex';
        });
        
        // Cerrar modal al hacer clic en la X
        closeModalBtn.addEventListener('click', function() {
            surpriseModal.style.display = 'none';
        });
        
        // Cerrar modal al hacer clic fuera del contenido
        surpriseModal.addEventListener('click', function(e) {
            if (e.target === surpriseModal) {
                surpriseModal.style.display = 'none';
            }
        });
    }
    
    // Video thumbnail
    const videoThumbnail = document.getElementById('video-thumbnail');
    const videoEmbed = document.getElementById('video-embed');
    
    if (videoThumbnail && videoEmbed) {
        videoThumbnail.addEventListener('click', function() {
            videoThumbnail.style.display = 'none';
            videoEmbed.style.display = 'block';
            
            // Opcional: Hacer scroll suave hasta el video
            videoEmbed.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
});

// Función para redirigir a otras páginas
function redirectToPage(page) {
    window.location.href = page;
}