// CONTAINER-CALCULATE AND CONTAINER-RESULT
const containerCalculate = document.querySelector('#containerCalculator');
const containerResult = document.querySelector('#containerResult');

// Entry of values
let inputHeight = document.querySelector('#height');
let inputWeight = document.querySelector('#weight');

// Show result
let resultImc = document.querySelector('#resultImc');
let situation = document.querySelector('#situation');

// Calculate and clear buttons
const buttonCalculate = document.querySelector('#calculate');
const buttonBack = document.querySelector('#back');

// Button calculate
buttonCalculate.addEventListener('click', (event) => {
    event.preventDefault();

    // VALIDATE FIELDS
    if(inputHeight.value === '' && inputWeight.value === ''){
        alert('Por favor , digite valores nos campos abaixo!');
    }else if(inputHeight.value === '' || inputWeight.value === ''){
        alert('Não podemos calcular o IMC com um dos campos vazio ):');
    }else{
        // Result imc
        let imc = inputWeight.value / (inputHeight.value * inputHeight.value);
        resultImc.innerHTML = imc.toFixed(2);

        if(imc < 18.5){
            situation.innerHTML = 'MAGREZA';
        }else if(imc >= 18.5 && imc <= 24.9){
            situation.innerHTML = 'NORMAL';
        }else if(imc >= 25 && imc <= 29.9){
            situation.innerHTML = 'SOBREPESO';
        }else if(imc >= 30 && imc <= 39.9){
            situation.innerHTML = 'OBESIDADE';
        }else{
            situation.innerHTML = 'OBESIDADE GRAVE';
        }

        // SHOW AND REMOVE CONTAINERS
        containerCalculate.classList.add('hidden');
        containerResult.classList.remove('hidden');
    }
});

// BACK TO HOME PAGE
buttonBack.addEventListener('click' ,() => {
    containerCalculate.classList.remove('hidden');
    containerResult.classList.add('hidden')
});

