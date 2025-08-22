let listaAmigos = [];

function limparCampo(){
    let campo = document.querySelector("input");
    campo.value = "";
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

function adicionarElementoNaLista(texto){
    let lista = document.getElementById("listaAmigos");
    let novoItem = document.createElement("li");

    novoItem.innerHTML = texto;
    lista.append(novoItem)
}

function adicionarAmigo(){
    let input = document.getElementById("amigo");
    let nome = input.value;

    if (nome == ""){
        alert("Por favor insira um valor no campo antes de adicionar")
        return
    }

    listaAmigos.push(nome)
    
    adicionarElementoNaLista(nome)
    limparCampo();
}

function sortearAmigo(){
    let tamanhoLista = listaAmigos.length;

    if(tamanhoLista == 0){
        alert("Você não inseriu nenhum valor ainda, por favor insira os nomes dos seus amigos no campo");
        return;
    }

    let valorAleatorio = parseInt(Math.random()*tamanhoLista);

    exibirTextoNaTela("ul", `O seu amigo secreto é ${listaAmigos[valorAleatorio]}`);

}