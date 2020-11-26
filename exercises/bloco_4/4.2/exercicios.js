/** Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7: */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/** 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log(); */
console.log('Lista de números:')
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}
/** 2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado */
let resultado = 0;
for(let i = 0; i < numbers.length; i++){
 resultado += numbers[i];
}
console.log('A soma de todos os número é: ' + resultado);