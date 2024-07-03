const gridItems = document.querySelectorAll('.grid-item');
const blockIdInput = document.getElementById('block_id');
const colorIdInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset');

// Function to reset all grid items' background colors
function resetColors() {
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
}

// Function to change the color of the specified block
function changeColor() {
    const blockId = blockIdInput.value;
    const color = colorIdInput.value;
    const block = document.getElementById(blockId);

    if (block) {
        resetColors();
        block.style.backgroundColor = color;
    } else {
        alert('Invalid block ID!');
    }
}

// Add event listeners
changeButton.addEventListener('click', changeColor);
resetButton.addEventListener('click', resetColors);