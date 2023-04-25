//funçao para chamar o conteúdo de outro arquivo
const cadastro = require('./cadastro_produto')

cadastro.inserir({
    nome: "arroz",
    preco: 5

})

cadastro.inserir({
    nome: "feijao",
    preco: 10

})

cadastro.inserir({
    nome: "sal",
    preco: 2

})
console.log("Produtos:", cadastro.listar())

console.log("Buscar por ID(2):",
    cadastro.buscarPorId(2));

console.log("Buscar por ID(3): ",
    cadastro.buscarPorId(3));

//console.log(cadastro.listar());
//console.log("Buscar por Id")