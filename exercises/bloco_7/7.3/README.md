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

const array = [1, 2, 3, 4];
myRemove(array, 2);
assert.deepStrictEqual(array, [1, 2, 3, 4]); // 4. Verifique se o array passado por parâmetro **não** sofreu alterações


assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]); // 5. Verifique se a chamada `myRemove([1, 2, 3, 4], 5)` retorna o array esperado.
```

---
1. A função `myRemoveWithoutCopy(arr, item)` recebe um array `arr` e retorna o próprio array sem o elemento `item` caso ele exista no array.
2. Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 3)` retorna o array esperado.
3. Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 3)` **não** retorna o array `[1, 2, 3, 4]`
4. Faça uma chamada para a função `myRemoveWithoutCopy` e verifique se o array passado por parâmetro sobre alterações
5. Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 5)` retorna o array esperado

```javascript
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) { // 1. A função `myRemoveWithoutCopy(arr, item)` recebe um array `arr` e retorna o próprio array sem o elemento `item` caso ele exista no array.
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]); // 2. Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 3)` retorna o array esperado.
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]); // 3. Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 3)` **não** retorna o array `[1, 2, 3, 4]`

const array = [1, 2, 3, 4];
myRemoveWithoutCopy(array, 1);
assert.deepStrictEqual(array, [2, 3, 4]); // 4. Faça uma chamada para a função `myRemoveWithoutCopy` e verifique se o array passado por parâmetro sobre alterações

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]); // 5. Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 5)` retorna o array esperado
```

---
0. A função `myFizzBuzz(num)` recebe um número `num` e retorna `"fizzbuzz"` se o número for divisível por `3` e `5` , retorna `"fizz"` se for divisível apenas por `3` , retorna `"buzz"` se divisível apenas por `5` , retorna o próprio número caso não seja divisível por `3` ou `5` e retorna `false` caso `num` não seja um número

1. Faça uma chamada com um número divisível por `3` e `5` e verifique se o retorno é o esperado

2. Faça uma chamada com um número divisível por `3` e verifique se o retorno é o esperado

3. Faça uma chamada com um número divisível por `5` e verifique se o retorno é o esperado

4. Faça uma chamada com um número que não é divisível por `3` ou `5` e verifique se o retorno é o esperado

5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

```javascript
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz'); // 1. Faça uma chamada com um número divisível por `3` e `5` e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(3), 'fizz'); // 2. Faça uma chamada com um número divisível por `3` e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(5), 'buzz'); // 3. Faça uma chamada com um número divisível por `5` e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(7), 7); // 4. Faça uma chamada com um número que não é divisível por `3` ou `5` e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz('String'), false); // 5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
```