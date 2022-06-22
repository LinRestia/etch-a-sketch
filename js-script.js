let size = 16;
const container = document.querySelector('.container');
const pixelChange = document.querySelector('#pixel-change');
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
        const div = document.createElement('div');
        container.append(div);
    };
};
createGrid(size);