const container = document.querySelector('.container');
const createArea = (size) => {
    container.style.gridTemplateColumns = `${size}, 1fr`;
    container.style.gridTemplateRows = `${size}, 1fr`;
    for (let i = 0; i <256; i++) {
        const div = document.createElement('div');
        container.append(div);
    }
}
createArea(16);

