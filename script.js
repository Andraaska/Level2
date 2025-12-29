// Subtle prank: wiggle text slightly every 0.5s
const container = document.querySelector('.container');

setInterval(() => {
    const offsetX = Math.random() * 5 - 2.5;
    const offsetY = Math.random() * 5 - 2.5;
    container.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}, 500);