## Dia 7.2 | Testes unitários em JavaScript

### Exercícios de fixação

Voce vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.

1. A função `sum(a, b)` retorna a soma do parâmetro `a` com o `b`
2. Teste se o retorno de `sum(4, 5)` é `9`
3. Teste se o retorno de `sum(0, 0)` é `0`
4. Teste se a função `sum` lança um erro quando os parâmetros são `4` e `"5"` (string 5)
5. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada de `sum(4, "5")`

```javascript
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b; // 1. A função sum(a, b) retorna a soma do parâmetro a com o b
}

assert.strictEqual(sum(4, 5), 9); // 2. Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(0, 0), 0); // 3. Teste se o retorno de sum(0, 0) é 0
assert.throws(() => { // 4. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  sum(4, "5");
});
assert.strictEqual(sum(4, "5"), 9); // 5. Teste se a mensagem de erro é 'parameters must be numbers' quando realizar a chamada de sum(4, "5")
```
---
1. A função `myRemove(arr, item)` recebe um array e retorna uma cópia desse array sem o elemento `item` caso ele exista no array
2. Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` retorna o array esperado
3. Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` **não** retorna o array `[1, 2, 3, 4]`
4. Verifique se o array passado por parâmetro **não** sofreu alterações
5. Verifique se a chamada `myRemove([1, 2, 3, 4], 5)` retorna o array esperado.

```javascript
const assert = require('assert');

function myRemove(arr, item) { // 1. A função myRemove(arr, item) recebe um array `arr` e retorna um cópia desse array sem o elemento `item` caso ele exista no array
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 4]); // 2. Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` retorna o array esperado
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 3, 4]); // 3. Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` **não** retorna o array `[1, 2, 3, 4]`

const arrayTest = [1, 2, 3, 4];
myRemove(arrayTest, 2);
assert.deepStrictEqual(arrayTest, [1, 2, 3, 4]); // 4. Verifique se o array passado por parâmetro **não** sofreu alterações


assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]); // 5. Verifique se a chamada `myRemove([1, 2, 3, 4], 5)` retorna o array esperado.
```

## Praticando TDD
Nessa parte os exercícios estão divididos em dois grupos: primeiro, você vai escrever código baseado nos testes. Depois você lerá um código e o que ele tem que trazer de resposta. A partir disso, vocês escreverá testes e os usará de base para alterar o código. Como assim? Bem, vamos passo a passo!

### Escrevendo código para testes
Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. **É importante nunca alterar os testes ou as variáveis já escritas no código:**

Copie os testes já implementados e desenvolva as funções.

1. Escreva a função `addOne` para passar nos testes já implementados.

```javascript
const assert = require('assert');
// escreva a função addONe aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
```
### | Resposta:
```javascript
const assert = require('assert');

const addOne = (array) => {
    const newArray = []
    for(let index = 0; index < array.length; index += 1){
        newArray.push(array[index] + 1);
    }
    return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
```
