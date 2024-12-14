const boxLivros = document.querySelector('.boxLivros');
const livros = document.querySelectorAll('.livro');
const livroWidth = livros[0].clientWidth; // Largura de um livro
let currentIndex = 0;

function updateCarousel() {
    boxLivros.style.transform = `translateX(-${currentIndex * livroWidth}px)`;
}

function nextSlide() {
    if (currentIndex < livros.length - 3) { // Limita para que sempre haja 3 livros visíveis
        currentIndex++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}
