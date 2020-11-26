/** Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7: */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/** 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log(); */
console.log('Lista de números:')
for(let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]);
}

/** 2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado */
let resultado = 0;
for(let index = 0; index < numbers.length; index += 1){
 resultado += numbers[index];
}
console.log('A soma de todos os números é: ' + resultado);

/** 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
 * A média aritmética é o resultado da soma de todoa os elementos dividos pelo numero total de elementos;
 */
let media = resultado/numbers.length;
console.log('A média aritmética é: ' + media);

/** 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: 'valor maior que 20'. Caso não seja, imprima a mensagem: 'valor menor ou igual a 20' */
if (media > 20){
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

/** 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o*/
let maiorValor = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
  }
}
console.log("O maior valor do array é: ", maiorValor);

/** 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado" */
let contaImpar = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if(numbers[index]%2 != 0) {
    contaImpar += 1;
  }
}
if (contaImpar === 0) {
  console.log("Nenhum valor ímpar encontrato");
} else {
  console.log("Quantidade de número(s) ímpar(es): " + contaImpar);
}

/** 7. Utilizando for, descubra qual o meno valor contido no array e imprima-o */
let menorValor = maiorValor;
for (let index = 0; index < numbers.length; index += 1) {
  if(numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}
console.log("O menor valor do arry é: ", menorValor);

/** 8. Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado */
let conta25 = []
for(let index = 1; index <= 25; index += 1) {
  conta25.push(index);
}
console.log('Array de 1 a 25: ', conta25);

/** 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 */
for(let index = 0; index < conta25.length; index += 1) {
  console.log(conta25[index], ' / 2 = ' + conta25[index]/2);
}