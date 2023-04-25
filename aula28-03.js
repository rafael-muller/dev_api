//if - else

let maior = 0;
const a = 20,
    b = 30;
if (a > b) {
    maior = a;
} else {
    maior = b;
}

//expressão ternária

maior = (a >= b) ? a : b;
console.log("Maior", maior);
menor = (a <= b) ? a : b;
console.log("Menor", menor);


for (let i = 0; i < 10; i++) {
    console.log("I", i);
}

const arrayFrutas = ['limao', 'laranja', 'bergamota'];
for (let i in arrayFrutas) {
    console.log(`Fruta [${i}]: ${arrayFrutas[i]}`);
}
for (let Fruta of arrayFrutas) {
    console.log(`Fruta: ${Fruta}`);
}

function printMaior(numero1, numero2) {
    let maior = (numero1 >= numero2) ? numero1 : numero2;
    return (maior);

}

function getMaior(numero1, numero2)

printMaior(40, 50);

console.log(getMaior(100, 200));