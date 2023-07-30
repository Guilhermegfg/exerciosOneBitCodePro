let pacientes = ["Guilherme", "Aryane", "Gabriela", "Adriana", "Walta"];

let lista = "";

let opcoes= 1;

let novoPaciente = "";

let pacienteAtual = "";

do {

    for (let indice = 0; indice <= pacientes.length - 1; indice++) {
        lista += `${indice + 1}° - ${pacientes[indice]}\n`
    }

    opcoes = parseInt(prompt(`Aqui está a lista de pacientes:\n${lista}\nDIGITE O NÚMERO DA OPÇÃO PARA PROSSEGUIR:\nOPÇÃO 1 - CADASTRAR NOVO PACIENTE\nOPÇÃO 2 - CONSULTAR PACIENTE\nOPÇÃO 3 - SAIR`));
      
    lista = "";
    
    switch (opcoes){
        case 1: 
            novoPaciente = prompt("digite o nome do paciente que você deseja cadastrar:")
            pacientes.push(novoPaciente);
            break
        case 2:
            pacienteAtual = pacientes.shift();
            alert(`O paciente atual é ${pacienteAtual}`)
            break
        case 3:
            alert("Encerrando o programa")
            break
        default: 
            alert("Opção inválida tente novamente")
    }
} while (opcoes != 3);