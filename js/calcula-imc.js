var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso   = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc    = paciente.querySelector(".info-imc"); 
    
    var peso   = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    var pesoEhValido   = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaEhValida) {
        tdImc.textContent  = "Altura inválida";        
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    return (peso > 0 && peso < 1000);
}

function validaAltura(altura) {
    return (altura > 0 && altura < 3.0);
}