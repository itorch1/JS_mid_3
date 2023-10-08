const input = document.getElementById('input');
input.addEventListener('input', convert);

function convert(e) {
    const grams = document.getElementById('grams');
    const kilograms = document.getElementById('kilograms');
    const ounces = document.getElementById('ounces');

    if (input.value === '' || input.value === '0' || isNaN(input.value)) {
        grams.style.display = 'none'
        kilograms.style.display = 'none'
        ounces.style.display = 'none'
        return;
    }

    grams.querySelector('p').innerText = input.value * 453.592;
    kilograms.querySelector('p').innerText = input.value * 0.453592;
    ounces.querySelector('p').innerText = input.value * 16;

    grams.style.display = 'block'
    kilograms.style.display = 'block'
    ounces.style.display = 'block'
}

const arrows = document.getElementById('arrows');
arrows.addEventListener('click', changeInput);

function changeInput(e) {
    if (isNaN(input.value))
        return;

    let change;
    console.log()
    if (e.target.classList.contains('up'))
        change = 1;
    else
        change = -1;

    input.value = +input.value + change;
    convert();
}