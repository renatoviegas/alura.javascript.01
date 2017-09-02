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
    
    var pesoEhValido   = true;
    var alturaEhValida = true;
    
    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 || altura >= 3.0) {
        alturaEhValida     = false;
        tdImc.textContent  = "Altura inválida";        
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");

btnAdicionarPaciente.addEventListener("click", function(event){
    event.preventDefault();

    //-- Recuperando o form
    var form = document.querySelector("#form-adiciona");
 
    //-- Recuperando o valor dos inputs
    var nome    = form.nome.value;
    var peso    = form.peso.value;
    var altura  = form.altura.value;
    var gordura = form.gordura.value;

    //-- Criando o TR
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    //-- Criando os TDs
    var nomeTd    = document.createElement("td");
    var pesoTd    = document.createElement("td");
    var alturaTd  = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd     = document.createElement("td");
    
    //-- Carregando os valores do form nas TDs
    nomeTd.textContent    = nome;
    pesoTd.textContent    = peso;
    alturaTd.textContent  = altura;
    gorduraTd.textContent = gordura;

    //-- Associando os TDs ao TR;
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //-- Associando o TR à Tabela;
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});