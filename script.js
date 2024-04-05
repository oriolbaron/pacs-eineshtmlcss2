document.addEventListener('DOMContentLoaded', function() {
    // Actualitzar l'any dinàmicament al footer
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Iniciar l'animació 3D de la imatge d'introducció
    animateIntroImage();

    // Iniciar el slideshow
    initSlideshow();
});

function animateIntroImage() {
    const introImage = document.getElementById('introImage');
    if (!introImage) return; // Sortir si no es troba l'element

    let angle = 0;
    setInterval(() => {
        angle = (angle + 1) % 360;
        introImage.style.transform = `rotateY(${angle}deg)`;
    }, 100);
}

function initSlideshow() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slideshow-container img');
    if (slides.length === 0) return;

    function nextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    slides[currentSlide].style.display = 'block';
    setInterval(nextSlide, 3000);
}