// ** CPF
function mascaraCPF(cpf) {
    // Remove qualquer caractere que não seja número
    cpf.value = cpf.value.replace(/\D/g, "");

    // Adiciona os pontos e o traço no CPF
    cpf.value = cpf.value.replace(/(\d{3})(\d)/, "$1.$2");
    cpf.value = cpf.value.replace(/(\d{3})(\d)/, "$1.$2");
    cpf.value = cpf.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

// ** CEP
function mascaraCEP(cep) {
    // Remove qualquer caractere que não seja número
    cep.value = cep.value.replace(/\D/g, "");

    // Adiciona os pontos e o traço no CPF
       //cep.value = cep.value.replace(/(\d{})(\d)/, "$1.$2");
      // cep.value = cep.value.replace(/(\d{3})(\d)/, "$1.$2");
        cep.value = cep.value.replace(/(\d{5})(\d{3})$/, "$1-$2");
}
// ** fim CEP

//Sexo

    const sexo = [
        { sigla: "M", nome: "Masculino" },
        { sigla: "F", nome: "Feminino" }
    ];

    // Seleciona o elemento <select> no DOM
    const selectSexo = document.getElementById('sexo');

    // Função para preencher o campo de seleção com os sexos
    function preencherSexo() {
            sexo.forEach(item => {
            const option = document.createElement('option');
            option.value = item.sigla;
            option.textContent = item.nome;
            selectSexo.appendChild(option);
        });
    }

//** fim sexo **

//Civil

    const civil = [
        { sigla: "S", nome: "Solteiro(a)" },
        { sigla: "V", nome: "Viúvo(a)" },
        { sigla: "C", nome: "Casado(a)" }
    ];

    // Seleciona o elemento <select> no DOM
    const selectCivil = document.getElementById('civil');

    // Função para preencher o campo de seleção com os civil
    function preencherCivil() {
            civil.forEach(item => {
            const option =  document.createElement('option');
            option.value = item.sigla;
            option.textContent = item.nome;
            selectCivil.appendChild(option);
        });
    }

//** fim civil **

// ** Estado

const estados = [
    { sigla: "AC", nome: "Acre" },
    { sigla: "AL", nome: "Alagoas" },
    { sigla: "AP", nome: "Amapá" },
    { sigla: "AM", nome: "Amazonas" },
    { sigla: "BA", nome: "Bahia" },
    { sigla: "CE", nome: "Ceará" },
    { sigla: "DF", nome: "Distrito Federal" },
    { sigla: "ES", nome: "Espírito Santo" },
    { sigla: "GO", nome: "Goiás" },
    { sigla: "MA", nome: "Maranhão" },
    { sigla: "MT", nome: "Mato Grosso" },
    { sigla: "MS", nome: "Mato Grosso do Sul" },
    { sigla: "MG", nome: "Minas Gerais" },
    { sigla: "PA", nome: "Pará" },
    { sigla: "PB", nome: "Paraíba" },
    { sigla: "PR", nome: "Paraná" },
    { sigla: "PE", nome: "Pernambuco" },
    { sigla: "PI", nome: "Piauí" },
    { sigla: "RJ", nome: "Rio de Janeiro" },
    { sigla: "RN", nome: "Rio Grande do Norte" },
    { sigla: "RS", nome: "Rio Grande do Sul" },
    { sigla: "RO", nome: "Rondônia" },
    { sigla: "RR", nome: "Roraima" },
    { sigla: "SC", nome: "Santa Catarina" },
    { sigla: "SP", nome: "São Paulo" },
    { sigla: "SE", nome: "Sergipe" },
    { sigla: "TO", nome: "Tocantins" }
];

// Seleciona o elemento <select> no DOM
const selectEstado = document.getElementById('estado');

// Função para preencher o campo de seleção com os estados
function preencherEstados() {
    estados.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado.sigla;
        option.textContent = estado.nome;
        selectEstado.appendChild(option);
    });
}



// Chama a função para preencher os selects quando a página carregar
document.addEventListener('DOMContentLoaded', preencherSexo);
document.addEventListener('DOMContentLoaded', preencherCivil);
document.addEventListener('DOMContentLoaded', preencherEstados);


// ** fim Estado

// ** Limpar campo
function LimparCampos() {
    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    const cpf = document.querySelector("#cpf");
    const nasc = document.querySelector("#nasc");
    const sexo = document.querySelector("#sexo");
    const civil = document.querySelector("#civil");
    const cep = document.querySelector("#cep");
    const rua = document.querySelector("#rua");
    const numEnd = document.querySelector("#numEnd");
    const complemento = document.querySelector("#complemento");
    const estado = document.querySelector("#estado");
    const telefone = document.querySelector("#telefone");
    const email = document.querySelector("#email");
    const nomeMae = document.querySelector("#nomeMae");
    const nomePai = document.querySelector("#nomePai");

    //limpar
        nome.value = '';
        sobrenome.value = '';
        cpf.value = '';
        nasc.value = '';
        sexo.value = '';
        civil.value = '';
        cep.value = '';
        rua.value = '';
        numEnd.value = '';
        complemento.value = '';
        estado.value = '';
        telefone.value = '';
        email.value = '';
        nomeMae.value = '';
        nomePai.value = '';
    
}
// ** fim Limpar campo


// ** função voltar para pagina principal
function Sair() {
     window.location.href = 'Principal.html';
}
// ** fim função voltar