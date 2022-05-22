let weight= document.querySelector('#inputWeight');
let height = document.querySelector('#inputHeight');
let result = document.querySelector('#result');
let calculateBtn = document.querySelector('#calculate');


function calculateImc() {
    const imc = weight.value/(height.value * height.value);
    let classification = ""
    
    if(imc <= 18.5){
        classification = "Situação: Abaixo do peso";
    }
    else if (imc >= 18.6 && imc <= 24.9){
        classification = "Situação: Normal";
    }
    else if (imc >= 25 && imc <= 29.9){
        classification = "Situação: Sobrepeso";
    }
    else if (imc >= 30 && imc <= 34.9){
        classification = " Situação: Obesidade classe I";
    }
    else if (imc >= 35 && imc <= 39.9){
        classification = " Situação: Obesidade classe II";
    }else{
        classification = " Situação: Obesidade classe III";
    }

    height.value == "" || weight.value == "" ? result.textContent = "" : result.textContent = `Seu IMC é ${imc.toFixed(2)} ${classification}`;

}