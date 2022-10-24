import { ScreenImc } from './screenImc.js';

ScreenImc.buttonCalculate.addEventListener('click', (event) => {
    event.preventDefault();
    ScreenImc.CalculateImc(); 
});

ScreenImc.buttonBack.addEventListener('click' ,() => {
    ScreenImc.containerCalculate.classList.remove('hidden');
    ScreenImc.containerResult.classList.add('hidden')
});

