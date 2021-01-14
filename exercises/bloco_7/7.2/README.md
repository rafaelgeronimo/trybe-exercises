## Dia 7.2 | JavaScript ES6 - Objects

### Exercícios de fixação

#### Parte I
Para os exercícios a seguir, use o seguinte código:
```javascript
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);
```

Agora, você vai fazer alguns exercícios de fixação.
1. Complete a função `customerInfo()` para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11 98763-1416, R. Rua das Flores, Nº: 389, AP: 701"
- Note que o parâmetro da função já está sendo passado na chamada da função.

| **Resposta**:
```javascript

const customerInfo = (order) => {
	console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, telefone ${order.phoneNumber}, R. ${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}.`);
}

customerInfo(order);
```

2. Complete a função `orderModifier()` para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00".
- Modifique o nome da pessoa compradora;
- Modifique o valor total da compra para R$ 50,00.

| **Resposta** (isso ficou ridículo!)
```javascript
const orderModifier = (order) => {
  const newClient = order.name = 'Luiz Silva';
  const newPizzas = {
  	muzzarella: {
    	amount: 1,
      price: 25
   },
 	 calabresa: {
   		amout: 1, 
      price: 25
   }
 };
  
	console.log(`Olá ${newClient}, o total do seu pedido de ${Object.keys(newPizzas)} e ${order.order.drinks.coke.type} é ${newPizzas.muzzarella.price + newPizzas.calabresa.price}`)
}

orderModifier(order);
```
---
#### Parte II
Para os exercícios a seguir, use o seguinte código:
```javascript
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
```

1. Crie uma função para adicionar o turno da manhã na `lesson2`. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

| **Resposta**:

```javascript
function addTurno(lessonNumber, newKey, newValue) {
  lessonNumber[newKey] = newValue;
}

addTurno(lesson2, 'turno', 'manhã');
```

2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

| **Resposta**:

```javascript
function listKeys(lessonNumber) {
	console.log(Object.keys(lessonNumber))
}

listKeys(lesson2);
```

3. Crie uma função para mostrar o tamanho de um objeto.

| **Resposta**:
```javascript
function objectSize(lessonNumber){
	console.log(`O tamanho do objeto ${lessonNumber} é = ${Object.keys(lessonNumber).length}`);
}

objectSize(lesson3);
```

4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

| **Resposta**:

```javascript
function listObjectValues(lessonNumber){
	console.log(Object.values(lessonNumber))
}

listObjectValues(lesson1);
```

5. Crie um objeto de nome `allLessons`, que deve agrupar todas as aulas através do `Object.assign`. Cada chave desse novo objeto será uma aula, sendo essas chaves: `lesson1`, `lesson2` e `lesson3`. Ao executar o comando `console.log(allLessons)`, a saída deverá ser a seguinte:

```javascript
console.log(allLessons);
/*
{
  lesson1: 
  {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2:
  {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3:
  {
    materia: Matemática,
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}
*/
```

| **Resposta**:

```javascript
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
```

6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

| **Resposta**:

```javascript
function countStudents(lesson) {
	let totalStudents = 0;
  const array = Object.keys(lesson);
  for(let index in array) {
  	totalStudents += lesson[array[index]].numeroEstudantes;
  }
  return `Total de estudantes em todas as salas: ${totalStudents}`;
}

console.log(countStudents(allLessons))
```

7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

```javascript
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'
```

| **Resposta**:

```javascript
function getValueByNumber(lessonNumber, keyNumber){
	const resultado = Object.values(lessonNumber);
  return resultado[keyNumber];
}

console.log(getValueByNumber(lesson1, 0));
```

8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

```javascript
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true
console.log(verifyPair(lesson3, 'materia', 'Maria Clara));
// Output: false
```