const colorInput = document.getElementById('color-picker');
const selectedColor = document.getElementById('selected-color');
const colorContainer= document.querySelector('.color-picker-container');
const header= document.querySelector('h1');

const updateColor=()=>{
    const color = colorInput.value;
    selectedColor.textContent = color;
    colorContainer.style.background = color;
    header.style.color= color;
}


colorInput.addEventListener('input', updateColor);