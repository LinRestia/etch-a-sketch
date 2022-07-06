let size = 16;
const defaultMode = 'draw';
let currentMode = defaultMode;
const defaultColor = '#ff44ee';
let currentColor = defaultColor;
const container = document.querySelector('.container');
const pixelChange = document.querySelector('#pixel-change');
const eraserBtn = document.querySelector('#eraser');
const drawBtn = document.querySelector('#draw');

const setCurrentMode = (newMode) => {
    currentMode = newMode;
};
const setCurrentColor = (newColor) => {
    currentColor = newColor;
}
const colorChange = (e) => {
    if (currentMode === 'draw') {
        e.target.style.backgroundColor = '#000000';
    } else if (currentMode === 'erase') {
        e.target.style.backgroundColor = '#ffffff';
    }
};
eraserBtn.addEventListener('click', () => {
    setCurrentMode('erase');
    colorChange;
});
drawBtn.addEventListener('click', () => {
    setCurrentMode('draw');
    colorChange;
})
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
        div.addEventListener('click', colorChange);
        container.append(div);
    };
};
window.onload = function() {
    createGrid(size);
};