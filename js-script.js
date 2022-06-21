const container = document.querySelector('.container');
const createGrid = (size) => {
    for (let i = 0; i < size * size; i++) {
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        const div = document.createElement('div');
        container.append(div);
    }
}
createGrid(16);
