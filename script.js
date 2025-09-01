let lista = document.querySelectorAll('.item');
let proxima = document.getElementById('proxima');
let voltar = document.getElementById('voltar');

let contar = lista.length; //3
let ativo = 0; // item ativo começa em 0

//chamar uma função ao clicar no botão
proxima.onclick = () => {
    let newActivo = document.querySelector('.ativo');//procurar a classe ativo
    newActivo.classList.remove('ativo'); //remove a classe ativo

    ativo = ativo >= contar -1 ? 0 : ativo + 1
    lista[ativo].classList.add('ativo') //pegando o item 1 e adicionando a classe ativo
}

voltar.onclick = () => {
    let newActivo = document.querySelector('.ativo');
    newActivo.classList.remove('ativo');

    ativo = ativo <= 0 ? contar -1 : ativo -1
    lista[ativo].classList.add('ativo');
}

