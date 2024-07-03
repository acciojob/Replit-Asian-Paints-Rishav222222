//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
const blockedId = document.getElementById('block_id');
const colourId = document.getElementById('colour_id');
const buttonId = document.getElementById('change_button');
const resetId = document.getElementById('reset');

function resetColours(){
	gridItems.forEach(item =>{
		item.style.backgroundColor('transparent')
	});
}

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