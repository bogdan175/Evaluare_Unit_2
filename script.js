// Slide-show pentru imaginile de monitorizare
const images = document.querySelectorAll('.imagine-resurse img');
let index = 0;

setInterval(() => {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
    index = (index + 1) % images.length;
}, 3000);
