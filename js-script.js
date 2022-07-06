let size = 16;
const defaultMode = 'draw';
let currentMode = 'draw';
const container = document.querySelector('.container');
const pixelChange = document.querySelector('#pixel-change');
const eraserBtn = document.querySelector('#eraser');

const colorChange = (e) => {
    e.target.style.backgroundColor = '#000000';
};
const eraseColor = (e) => {
    e.target.style.backgroundColor = '#ffffff';
}
eraserBtn.addEventListener('click', eraseColor);
pixelChange.addEventListener('click', () => {
    size = window.prompt('Please choose a number between 16 and 100!');
    createGrid(size);
});

const createGrid = (size) => {
    if(size > 100 || size < 16) {
        return 'Please try a number between 16 and 100! Thank You!';
    };
    for (let i = 0; i < size * size; i++) {
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.backgroundColor = '#ffffff';
        const div = document.createElement('div');
        div.classList.add('change')
        div.addEventListener('mouseover', colorChange);
        container.append(div);
    };
};
window.onload = function() {
    createGrid(size);
};