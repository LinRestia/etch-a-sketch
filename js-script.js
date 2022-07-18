let size = 16;

const defaultMode = 'draw';
let currentMode = defaultMode;

const defaultColor = '#000000';
let currentColor = defaultColor;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const container = document.querySelector('.container');
const pixelChange = document.querySelector('#pixel-change');
const eraserBtn = document.querySelector('#eraser');
const drawBtn = document.querySelector('#draw');
const rainbowBtn = document.querySelector('#rainbow');
const clearBtn = document.querySelector('#clear');
const colorBtn = document.querySelector('#color');
const chooseColor = document.querySelector('#choose-color');

const setCurrentMode = (newMode) => {
    currentMode = newMode;
};
const setCurrentColor = (newColor) => {
    currentColor = newColor;
}
const colorChange = (e) => {
    if (e.type === 'mouseover' && !mouseDown) return
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    switch(currentMode) {
        case 'draw':
            e.target.style.backgroundColor = '#000000';
        break;
        case 'erase':
            e.target.style.backgroundColor = '#ffffff';
        break;
        case 'rainbow':
            e.target.style.backgroundColor = `#${randomColor}`;
        break;
        case 'color':
            e.target.style.backgroundColor = currentColor;
        break;
    }
}
eraserBtn.addEventListener('click', () => {
    setCurrentMode('erase');
    colorChange;
});
drawBtn.addEventListener('click', () => {
    setCurrentMode('draw');
    colorChange;
});
rainbowBtn.addEventListener('click', () => {
    setCurrentMode('rainbow');
    colorChange;
});
chooseColor.oninput = (e) => setCurrentColor(e.target.value);

colorBtn.addEventListener('click', () => {
    setCurrentMode('color');
    colorChange;
})
clearBtn.addEventListener('click', () => {
    clearGrid();
    createGrid(size);
});

pixelChange.addEventListener('click', () => {
    size = window.prompt('Please choose a number between 16 and 100! Warning: This will clear the canvas.');
    clearGrid();
    createGrid(size);
});

const createGrid = (size) => {
    if(size > 100 || size < 16) {
        return;
    };
    for (let i = 0; i < size * size; i++) {
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.backgroundColor = '#ffffff';
        const div = document.createElement('div');
        div.classList.add('change');
        div.addEventListener('mouseover', colorChange);
        div.addEventListener('mousedown', colorChange);
        div.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
        div.addEventListener('drop', (e) => {
            e.preventDefault();
        });
        container.append(div);
    };
};
const clearGrid = () => {
    container.innerHTML = '';
};

window.onload = function() {
    createGrid(size);
};