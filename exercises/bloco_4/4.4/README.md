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

- O código pode ser conferido [nesse link](https://github.com/rafaelgeronimo/trybe-exercises/blob/master/exercises/bloco_4/4.1/assets/js/script.js).
- A página que utiliza o arquivo e coloca as funções em uso estão acessíveis em [http://rafaelgeronimo.me/trybe-exercises/exercises/bloco_4/4.1/](http://rafaelgeronimo.me/trybe-exercises/exercises/bloco_4/4.1/).

---
