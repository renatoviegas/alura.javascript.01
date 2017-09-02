var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");

btnAdicionarPaciente.addEventListener("click", function(event){
    event.preventDefault();

    //-- Recuperando o form
    var form = document.querySelector("#form-adiciona");

    //-- Recuperando o valor dos inputs do form e preenchendo o objeto
    var paciente = obtemPacienteDoFormulario(form);

    //-- Montando uma nova linha no HTML com os dados do objeto
    var pacienteTr = montaTr(paciente);

    //-- Validando os dados do paciente antes de incluir;
    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    //-- Associando o TR à Tabela;
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
    form.reset();

    var mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = "";
});

function exibeMensagensDeErro(erros) {
    
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);   
    });
}

function obtemPacienteDoFormulario(form) {
    
    var paciente = {
        nome: form.nome.value,  
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
    
    return paciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
        
    return td;
}

function montaTr(paciente) {
    
    //-- Criando o TR
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    //-- Associando os TDs ao TR;
    pacienteTr.appendChild(montaTd(paciente.nome,    'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso,    'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura,  'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc,     'info-imc'));
    
    return pacienteTr;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Informe o nome");
    }

    if (paciente.peso.length == 0) {
        erros.push("Informe o peso");
    } else if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }

    if (paciente.altura.length == 0) {
        erros.push("Informe a altura");
    } else if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }

    if (paciente.gordura.length == 0) {
        erros.push("Informe o % de gordura");
    }

    return erros;
}