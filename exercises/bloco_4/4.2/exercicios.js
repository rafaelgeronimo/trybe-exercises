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