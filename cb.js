document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
        currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-images img').length;
    }

    setInterval(updateCarousel, 5000);
});