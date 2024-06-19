document.addEventListener("DOMContentLoaded", function() {
    const letter = document.getElementById('letter');
    const flap = document.getElementById('flap');
    const content = document.getElementById('content');

    letter.addEventListener('click', function() {
        // Detener las animaciones
        letter.style.animation = 'none';
        // Mover la carta al centro
        letter.style.position = 'fixed';
        letter.style.top = '50%';
        letter.style.left = '50%';
        letter.style.transform = 'translate(-50%, -50%)';
        letter.classList.add('open');

        // Animación de apertura de la carta
        flap.style.top = '100%';
        setTimeout(function() {
            content.classList.add('open');
        }, 500);
    });
});
