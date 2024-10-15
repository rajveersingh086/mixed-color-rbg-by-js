document.addEventListener('DOMContentLoaded' ,() => {
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const colorBox = document.getElementById('colorBox');
    const colorValues = document.getElementById('colorValues');

    function updatecolor(){
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;
        const color = `rgb(${red}, ${green}, ${blue})`;
        colorBox.style.backgroundColor = color;
        colorValues.textContent = `RGB(${red}, ${green}, ${blue})`;
    }

    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);

    updateColor();
});