console.log(" Hello World! ");
//let -> para declarar variaveis
//const -> declarar constantes
const PI = 3.14;
let x = 10 + PI;
a = 11;
console.log(a);

const minhaFuncao = function(a, b) {
    return (a + b);
}
console.log(minhaFuncao(5, 10));

let meuObjeto = {};
meuObjeto.nome = "Fulano";
meuObjeto.idade = 20;

console.log(meuObjeto);
console.log(typeof(meuObjeto));

console.log(meuObjeto.nome);
console.log(meuObjeto.idade);

let meuObjeto2 = {
    nome: "Sicrano",
    idade: 30
}
meuObjeto2.endereco = "Rua Coronel Genuíno, 112";
console.log(meuObjeto2);
console.log(typeof(meuObjeto2));

class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let pessoa = new Pessoa("Beltrano", 40);
console.log(pessoa);
pessoa.endereco = "Rua x, 220";
console.log(pessoa);

/*
Tipos - string, number, boolean;
Class, array, function;

*/