## Dia 7.1 | JavaScript ES6 - let, const, arrow functions e template literals

### Exercícios de fixação

#### Parte I

1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

- Copie o código abaixo.
- Modifique a estrutura da função para que ela seja uma `arrow function`.
- Modifique as concatenações para `template literals`.

```javascript
function testingScope(escopo) { 
  if (escopo === true) { 
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);
```

- Minha resolução:

```javascript
const testingScope = (escopo) => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}. Ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);
```

2. Copie o código abaixo e faça uma função que retorne o array `oddsAndEvens` em ordem crescente.
- Utilize `template literals` para que a chamada `console.log(oddsAndEvens);` retorne "Os números 2, 3, 4, 7, 10, 13 se encontram ordenados de forma crescente!".
- **Bônus (opcional)**: tente fazer o mesmo exercício utilizando o método [array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). **Spoiler**: É possível realizar uma função que ordene qualquer array de números.

```javascript
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens);
```

- Minha resolução:

```javascript
const oddsAndEvens = () => {
	const numbers = [13, 3, 4, 10, 7, 2];
  return `Os números ${numbers.sort((a,b)=>a-b)} se encontram ordenados em ordem crescente`;
} 
console.log(oddsAndEvens());
```
| Referência: para ordenar corretamente com o método `sort()` utilizei a sintaxe `funcToCompare` que é explicada [nesse artigo](https://programadriano.medium.com/javascript-sort-5154c8722e44).

---
#### Parte II

Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprender sobre `let`, `const`, `arrow functions` e `template literals`.

1. Crie uma função que receba um número e retorne seu fatorial.
- Na matemática, o fatorial de um número não negativo `N`, com a notação `N!`, é o produto de todos os inteiros menores ou iguais a `N`. **Exemplo**: 4! = 4 * 3 * 2 * 1 = 24.
- **Bônus (opcional)**: Tente fazer o mesmo exercício [de forma recursiva](http://www.devfuria.com.br/logica-de-programacao/recursividade-fatorial/). **Spoiler**: É possível resolver com uma linha.

- Minha resolução
```javascript
const fatorial = number => number == 0 ? 1 : number * fatorial(number - 1)

console.log(fatorial(6)); // 720
```

---
2. Crie uma função que receba uma frase e retorne qual a maior palavra.
- Exemplo:
```javascript
longestWord("Antonio foi no banheiro e não sabemos o que aconteceu") // retorna "aconteceu"
```

- Minha resolução
```javascript
const longestWord = phrase => {
	const phraseArray = phrase.split(/[ ,]+/);
  let longestWordSize = 0;
  for (let index = 0; index < phraseArray.length; index += 1){
  	if(phraseArray[index].length > longestWordSize) {
    	longestWordSize = index;
   }
  }
  return phraseArray[longestWordSize];
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu, coitado."));
```
| Precisei recorrer ao [StackOverflow](https://stackoverflow.com/questions/10346722/how-can-i-split-a-javascript-string-by-white-space-or-comma) para descobrir que com uma Regular Expression (RegEx) consigo dizer ao `split` que quero usar não apenas o espaço, como também as virgulas, como delimitador, dessa forma excluindo a virgula que coloquei na frase de teste.

---
3. Crie uma página que contenha:
- Um botão ao qual será associado um *event listener*;
- Uma variável `clickCount` no arquivo **JavaScript** que acumule o número de clicks no botão;
- Um campo no **HTML** que vá atualizando a quantidade de *clicks* no botão conforme a variável `clickCount` é atualizada.

---
4. Crie um código **JavaScript** com a seguinte especificação:
**Não esqueça de sua `template literals`**
- Função 1: Escreva uma função que vai receber uma `string` como parâmetro. Sua função deverá procurar pela letra `x` em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova `string`.
  **Exemplo**:
  - String determinada: "Tryber x aqui"
  - Parâmetro "Bebeto"
  - Retorno: "Trybe Bebeto aqui!"
- Um arary com escopo global, que é o escopo do arquivo **JS**, nesse caso, contendo cinco strings com suas principais `skills`.
- Função 2: Escreva uma função que vai receber a `string` retornada da Função 1 como parâmetro. Essa função deve concatenar as `skills` do array global à `string` que foi passada para a Função 2 via parâmetro. Você deve ordenar os `skills` em ordem alfabética. Sua função deve retornar essa nova `string`.
  **Exemplo**: : Tryber x aqui! Minhas cinco principais habilidades são:
  - JavaScript;
  - HTML; ... #goTrybe".