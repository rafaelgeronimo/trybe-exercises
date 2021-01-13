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

- Resposta:
```javascript

const customerInfo = (order) => {
	console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, telefone ${order.phoneNumber}, R. ${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}.`);
}

customerInfo(order);
```

2. Complete a função `orderModifier()` para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00".
- Modifique o nome da pessoa compradora;
- Modifique o valor total da compra para R$ 50,00.

- Resposta (isso ficou ridículo!)
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