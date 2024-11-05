function setupCarousel(carouselId) {
    const carouselImages = document.querySelector(`#carousel${carouselId}`);
    const images = carouselImages.querySelectorAll('img');
    let index = 0;

    function showImage(idx) {
        const width = images[0].clientWidth;
        carouselImages.style.transform = `translateX(${-width * idx}px)`;
    }

    document.querySelector(`.prev-btn[data-carousel="${carouselId}"]`).addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    });

    document.querySelector(`.next-btn[data-carousel="${carouselId}"]`).addEventListener('click', () => {
        index = (index + 1) % images.length;
        showImage(index);
    });
}

// Inicialize cada carrossel individualmente
setupCarousel(1);
setupCarousel(2);
setupCarousel(3)
setupCarousel(4)