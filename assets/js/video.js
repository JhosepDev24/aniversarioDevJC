document.addEventListener('DOMContentLoaded', function() {
            // Elementos del DOM
            const rewatchBtn = document.getElementById('rewatchBtn');
            const youtubeIframe = document.querySelector('.youtube-video');
            
            // Función para generar corazones en el contenedor de video
            function createVideoHearts() {
                const heartsContainer = document.querySelector('.video-hearts');
                for (let i = 0; i < 15; i++) {
                    const heart = document.createElement('div');
                    heart.classList.add('floating-video-heart');
                    heart.innerHTML = '❤';
                    heartsContainer.appendChild(heart);
                    
                    // Posición aleatoria
                    const posX = Math.random() * 100;
                    const posY = Math.random() * 100;
                    const size = Math.random() * 20 + 10;
                    const duration = Math.random() * 5 + 5;
                    
                    heart.style.left = `${posX}%`;
                    heart.style.top = `${posY}%`;
                    heart.style.fontSize = `${size}px`;
                    heart.style.animationDuration = `${duration}s`;
                    heart.style.animationDelay = `${Math.random() * 5}s`;
                    heart.style.color = `hsl(${Math.random() * 360}, 70%, 65%)`;
                }
            }
            
            // Crear corazones flotantes en el video
            createVideoHearts();
            
            // Botón de volver a ver (recargar el iframe)
            rewatchBtn.addEventListener('click', function() {
                const currentSrc = youtubeIframe.src;
                youtubeIframe.src = currentSrc;
                
                // Efecto de confeti de corazones
                createRewatchEffect();
            });
            
            // Efecto especial al volver a ver
            function createRewatchEffect() {
                const effectContainer = document.createElement('div');
                effectContainer.style.position = 'fixed';
                effectContainer.style.top = '0';
                effectContainer.style.left = '0';
                effectContainer.style.width = '100%';
                effectContainer.style.height = '100%';
                effectContainer.style.pointerEvents = 'none';
                effectContainer.style.zIndex = '1000';
                document.body.appendChild(effectContainer);
                
                for (let i = 0; i < 30; i++) {
                    setTimeout(() => {
                        const heart = document.createElement('div');
                        heart.innerHTML = '❤';
                        heart.style.position = 'absolute';
                        heart.style.fontSize = `${Math.random() * 30 + 20}px`;
                        heart.style.color = `hsl(${Math.random() * 360}, 70%, 65%)`;
                        heart.style.top = '50%';
                        heart.style.left = '50%';
                        heart.style.opacity = '0';
                        heart.style.transform = 'translate(-50%, -50%) scale(0)';
                        effectContainer.appendChild(heart);
                        
                        // Animación
                        const animDuration = Math.random() * 2000 + 2000;
                        const xDirection = Math.random() > 0.5 ? 1 : -1;
                        const yDirection = Math.random() > 0.5 ? 1 : -1;
                        
                        heart.animate([
                            { 
                                opacity: 0, 
                                transform: 'translate(-50%, -50%) scale(0) rotate(0deg)' 
                            },
                            { 
                                opacity: 1, 
                                transform: 'translate(-50%, -50%) scale(1) rotate(0deg)' 
                            },
                            { 
                                opacity: 0, 
                                transform: `translate(calc(-50% + ${xDirection * 100}px), calc(-50% + ${yDirection * 100}px)) scale(0.5) rotate(360deg)` 
                            }
                        ], {
                            duration: animDuration,
                            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
                        });
                        
                        // Eliminar después de la animación
                        setTimeout(() => {
                            heart.remove();
                        }, animDuration);
                    }, i * 100);
                }
                
                // Eliminar el contenedor después de que terminen todas las animaciones
                setTimeout(() => {
                    effectContainer.remove();
                }, 6000);
            }
            
            // Estilos para los corazones flotantes en el video
            const style = document.createElement('style');
            style.textContent = `
                .floating-video-heart {
                    position: absolute;
                    pointer-events: none;
                    opacity: 0.8;
                    animation: floatVideoHeart 10s linear infinite;
                    z-index: 2;
                }
                
                @keyframes floatVideoHeart {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0.8;
                    }
                    100% {
                        transform: translateY(-1000%) rotate(720deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        });