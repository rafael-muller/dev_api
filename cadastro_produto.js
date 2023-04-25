/*
cadastroProduto.js

idAutoIncrement
listaProdutos

inserir(produto){listaProdutos.push(produto)}
listar(){return listaProdutos}
buscarPorId(id)
atualizar(id,produto)
deletar(id)

criar variavel listar produtos

let - declaracao de variavel
const - declaração de constante*/

let listaProdutos = [];
let idAutoIncrement = 1;

function inserir(produto) {
    produto.id = idAutoIncrement++;
    listaProdutos.push(produto);
}

function listar() {
    return listaProdutos;
}

function buscarPorId(id) {
    for (let produto of listaProdutos) {
        if (produto.id === id) {
            return produto;
        }
    }
}

//disponibiliza itens como biblioteca
module.exports = { inserir, listar, buscarPorId }











/*
listaProdutos.push("Banana", "Melão");

console.log(listaProdutos);*/