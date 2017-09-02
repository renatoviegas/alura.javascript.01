var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutrição";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso   = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc    = paciente.querySelector(".info-imc"); 

var peso   = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido   = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.0) {
    alturaEhValida     = false;
    tdImc.textContent  = "Altura inválida";
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}