export const ScreenImc = {
    containerResult: document.querySelector('#containerResult'),
    containerCalculate: document.querySelector('#containerCalculator'),
    inputHeight: document.querySelector('#height'),
    inputWeight: document.querySelector('#weight'),
    resultImc: document.querySelector('#resultImc'),
    situation: document.querySelector('#situation'),
    buttonCalculate: document.querySelector('#calculate'),
    buttonBack: document.querySelector('#back'),
    CalculateImc() {
        // VALIDATE FIELDS
        if(this.inputHeight.value === '' && this.inputWeight.value === ''){
            alert('Por favor , digite valores nos campos abaixo!');
        }else if(this.inputHeight.value === '' || this.inputWeight.value === ''){
            alert('Não podemos calcular o IMC com um dos campos vazio ):');
        }else{
            // Result imc
            let imc = this.inputWeight.value / (this.inputHeight.value * this.inputHeight.value);
            this.resultImc.innerHTML = imc.toFixed(2);

            if(imc < 18.5){
                this.situation.innerHTML = 'MAGREZA';
            }else if(imc >= 18.5 && imc <= 24.9){
                this.situation.innerHTML = 'NORMAL';
            }else if(imc >= 25 && imc <= 29.9){
                this.situation.innerHTML = 'SOBREPESO';
            }else if(imc >= 30 && imc <= 39.9){
                this.situation.innerHTML = 'OBESIDADE';
            }else{
                this.situation.innerHTML = 'OBESIDADE GRAVE';
            }

            // SHOW AND REMOVE CONTAINERS
            this.containerCalculate.classList.add('hidden');
            this.containerResult.classList.remove('hidden');
        }
    }
}

