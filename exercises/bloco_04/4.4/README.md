## Bloco 4 | Introdução à JavaScript e Lógica de Programação

### Dia 4.4 | Objetos e funções

Exercícios de fixação:

#### Objetos
- Crie um objeto `player` contendo as variáveis listadas abaixo:
  ```javascript
  let name = 'Marta';
  let lastName = 'Silva';
  let age = 34;
  let medals = { golden: 2, silver: 3}
  ```

Solução:
```javascript
let player = {
	name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
  	golden: 2,
    silver: 3
  }
}
```

---

- Acesse a chave `name`, `lastName` e `age`. Concatene as informações para fazer um `console.log` no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade"

Solução:
```javascript
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + "anos.");
```

---

- Adicione ao objeto a chave `bestInTheWorld` e atribua a esta chave um `array` contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
  ```javascript
  let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
  ```

Solução:
```javascript
let player = {
	name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
  	golden: 2,
    silver: 3
  },
  bestInTheWorld: [
  2006,
  2007,
  2008,
  2009,
  2010,
  2018
  ]
}
```

---

- Acesse a chave `bestInTheWorld` e faça um `console.log` no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

Solução:
```javascript
console.log("A jogadora " + player["name"] + " " + player["lastName"] + " foi eleita a melhor do mundo por " + player["bestInTheWorld"].length + " vezes");
```

---

- Acesse a chave `medals` e faça um `console.log` no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

Solução:
```javascript
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");
```

---

#### For/in
Faça o exercício #2 da seção JS For Loops deste [link](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_loops2) para colocar em prática o que acabou de aprender.

Solução:
```javascript
var fruits = ["Apple", "Banana", "Orange"];
for (x in fruits) {
  console.log(x);
}
```

---

#### Funções
- Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. 

Solução:

| Os exercícios em questão já haviam sido solucionados através desse método.

- O código pode ser conferido [nesse link](https://github.com/rafaelgeronimo/trybe-exercises/blob/master/exercises/bloco_04/4.1/assets/js/script.js).
- A página que utiliza o arquivo e coloca as funções em uso estão acessíveis em [http://rafaelgeronimo.me/trybe-exercises/exercises/bloco_04/4.1/](http://rafaelgeronimo.me/trybe-exercises/exercises/bloco_04/4.1/).

---
## Exercícios
### Parte I - Objetos e funções
Usando o objeto abaixo, faça os exercícios a seguir:
```javascript
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

1. Imprima no console uma mensagem de boas vindas para a personagem acima, incluindo seu nome.
  - Valor esperado no console: `Bem-vinda, Margarida`

Solução:
```javascript
console.log('Bem-vinda ' + info.personagem);
```

2. Insira no objeto uma nova propriedade com o nome da chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
- Valor esperado no console:
```javascript
  {
    pesonagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal dos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
```

Solução:
```javascript
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim'
};

console.log(info);
```

3. Faça um `for/in` que mostre todas as chaves do objeto.
- Valor esperado no console:
```shell
personagem
origem
nota
recorrente
```

Solução:
```javascript
for(prop in info){
	console.log(prop);
}
```

4. Faça um novo `for/in`, mas agora mostre todos os valores das chaves do objeto.
- Valor esperado no console
```shell
Margarida
Pato Donald
Namorada do personagem principal dos quadrinhos do Pato Donald
Sim
```

Solução:
```javascript
for(prop in info){
	console.log(info[prop]);
}
```

5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
- Valor esperado no console:
```shell
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
```

Solução:
```javascript
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'Sim'
};

let info2 = {
	personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
}


for(prop in info){
	if((info[prop] === info.recorrente) && (info[prop] === info2[prop])){
    console.log("Ambos recorrentes");
  } else {
  	console.log(info[prop] + ' e ' + info2[prop]);
  }
}
```

---

### Parte II - Funções

1. Crie uma função que receba uma `string` e retorne `true` se for um palíndromo , ou `false` , se não for.
- Exemplo de palíndromo: arara .
- `verificaPalindrome("arara")`;
- Retorno esperado: `true`
- `verificaPalindrome("desenvolvimento")`;
- Retorno esperado: `false`

Solução (rápida - essa solução não considerar palíndromos com espaços em lugares diferentes, como em `socorram-me subi no onibus em marros`):

```javascript
function verificaPalindrome(word) {
	let palavra = "";
	for(let index = 0; index < word.length; index += 1) {    
  	if(word[index] === word[word.length - index - 1]){
    	if(word[index] === ' '){
      	word[index]
      }
    	palavra = palavra.concat(word[index]);
    } else {
      break;
    }
  }
  if(palavra.length === word.length) {
  	let isPalindrome = true;
    console.log(isPalindrome);
  } else {
  	let isPalindrome = false;
    console.log(isPalindrome);
  }
}

verificaPalindrome('arara');
```

---

2. Crie uma função que receba um `array` de inteiros e retorne o índice do maior valor.
  - Array de teste: [2, 3, 6, 7, 10, 1];
  - Valor esperado no retorno da função.

Solução:
```javascript
function highestValueIndex(numbers){
	let highestValue = 0;
  for(let index = 0; index < numbers.length; index += 1) {
  	if(numbers[index] > highestValue) {
    	highestValue = index;
    }
  }
  console.log(highestValue);
}

highestValueIndex([2, 3, 6, 7, 10, 1]);
```

---

3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
  - Array de teste: [2, 4, 6, 7, 10, 0, -3];
  - Valor esperado no retorno da função: 6

Solução:
```javascript
function lowestValueIndex(numbers){
	let checkLowestValue = Infinity;
  let lowestValue = 0;
  for(let index = 0; index < numbers.length; index += 1) { 
  	if(checkLowestValue > numbers[index]) { 
    	checkLowestValue = numbers[index];
      lowestValue = index;
    }
  }
  console.log(lowestValue); 
}

lowestValueIndex([2, 4, 6, 7, 10, 0, -3]);
```

---

4. Crie uma função que receba um `array` de nomes e retorne o nome com a maior quantidade de caracteres.
  - Array de teste: `['José', 'Lucas', 'Nádia', 'Fernanda', ' Cairo', 'Joana'];`.
  - Valor esperado no retorno da função: `Fernanda`

Solução:
```javascript
function checkBiggestName(namesList) {
	let biggestName = "";
  let biggestNameSize = 0;
	for(let index = 0; index < namesList.length; index += 1) {
    if(namesList[index].length > biggestNameSize){
    	biggestName = namesList[index];
      biggestNameSize = namesList[index].length;
    }
  }
  return biggestName;
}

console.log(checkBiggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
```

---

5. Crie uma função que receba um `array` de inteiros e retorne o inteiro que mais se repete.
- Array de teste: `[2, 3, 2, 5, 8, 2, 3];`.
- Valor esperado no retorno da função: `2`