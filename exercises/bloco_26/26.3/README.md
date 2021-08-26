## Bloco 26 | Introdução ao desenvolvimento Web com NodeJS
# Dia 26.1 | Testes com NodeJS

### Exercícios

**Exercício 1** : Estruture os testes utilizando `mocha` e `chai` para uma função que irá dizer se um número é "positivo", "negativo" ou "neutro":

- Essa função irá receber um número como parâmetro e retornar uma string como resposta;
- Quando o número passado for **maior que 0** deverá retornar "positivo", quando for **menor que 0** deverá retornar "negativo" e quando **igual a 0** deverá retornar "neutro";
1. Descreva todos os cenário de teste utilizando `describes` ;
2. Descreva todos os testes que serão feitos utilizando `its` ;
3. Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

> Resposta:
```jsx
// checkNumber.js
function checkNumber (number) {
        switch (true) {
                case (number > 0):
                        return 'positivo';
                case (number < 0):
                        return 'negativo';
                default:
                        return 'neutro';
        }
}

module.exports = checkNumber;
```

```jsx
// test.js
const { expect } = require('chai');

const checkNumber = require('./checkNumber');

describe('Chama a função checkNumber', () => {
    describe('quando o número for maior que 0', () => {
        describe('a resposta', () => {
            it('é uma "string"', () => {
                const resposta = checkNumber(10);
                expect(resposta).to.be.a('string');
            });
            it('é igual a "positivo"', () => {
                const resposta = checkNumber(10);
                expect(resposta).to.be.equal('positivo');
            });
    });
});
describe('quando o número for menor que 0', () => {
    describe('a resposta', () => {
            it('é uma "string"', () => {
                const resposta = checkNumber(-10);
                expect(resposta).to.be.a('string');
            });
            it('é igual a "negativo"', () => {
                const resposta = checkNumber(-10);
                expect(resposta).to.be.equal('negativo');
            });
    });
});
describe('quando o número for igual a 0', () => {
    describe('a resposta', () => {
            it('é uma "string"', () => {
                const resposta = checkNumber(0);
                expect(resposta).to.be.a('string');
            });
            it('é igual a "neutro"', () => {
                const resposta = checkNumber(0);
                expect(resposta).to.be.equal('neutro');
            });
        });
    });
});
```
> Retorno do teste (`npm test`):
```shell
ubuntu@ubuntu:~/projects/trybe/node/exercises/26.3$ npm test

> 26.3@1.0.0 test
> mocha test.js



  Chama a função checkNumber
    quando o número for maior que 0
      a resposta
        ✔ é uma "string"
        ✔ é igual a "positivo"
    quando o número for menor que 0
      a resposta
        ✔ é uma "string"
        ✔ é igual a "negativo"
    quando o número for igual a 0
      a resposta
        ✔ é uma "string"
        ✔ é igual a "neutro"


  6 passing (121ms)
```

**Exercício 2** : Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.

**DICA** : Lembre-se de adicionar o script de test no `package.json` e de instalar as dependências.

**Exercício 3** Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo `Number` .

1. Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a `Number` para a função;
2. Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
3. Implemente em sua função tal validação para que o teste passe.

**Exercício 4** Crie testes para uma função que escreverá um conteúdo em um arquivo específico.

- Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
- Após concluir a escrita do arquivo ela deverá retornar um `ok` .
1. Descreva todos os cenários de teste utilizando `describes` ;
2. Descreva todos os testes que serão feitos utilizando `its` ;
3. Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

**Exercício 5** Implemente a função descrita no exercício 4.

1. Crie a função descrita no exercício 4 utilizando o módulo `fs` do node.
2. Adapte os testes adicionando `stub` ao módulo utilizado do `fs` , isolando assim o teste.
3. Garanta que todos os testes escritos no exercício 4 irão passar com sucesso.