# Bloco 9 | JavaScript Assíncrono e Promises

## Dia 9.2 | JavaScript Promises

### Exercícios

1. A solução para o primeiros exercício encontra-se nesse arquivos:
- [HTML](index.html)
- [Script JS](apiScript.js)
<!-- - [Página exibindo a piada](http://rafaelgeronimo.me/trybe-exercises)  pegar o endereço completo depois e adicionar aqui -->

2. Agora, um passo para trás: vamos fazer, passo a passo, uma *Promise*. Primeiramente, instancie uma *Promise*. Dentro dela, você deve produzir um *array* com dez números aleatórios  de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um  `then` e um `catch` à *Promise* com qualquer coisa dentro só para que o código funcione.

- Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

3. Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

4. Quando a *Promise* for rejeitada, imprima, via `console.log`, a frase "É mais de oito mil! Essa promise deve estar quebrada!"

5. Quando a *Promise* for bem-sucedida, encadeie nela uma segunda *Promise* que some os elementos do array