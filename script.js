document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    function showImage(index) {
        const newTransformValue = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + newTransformValue + ')';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000);//cada 3 segundos
});