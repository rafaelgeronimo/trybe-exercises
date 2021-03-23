## Bloco 16 | Gerenciamento de estado com Redux

# Dia 16.1 | Introdução ao Redux - O estado global da aplicação

### Exercícios de fixação

- [Criando um **Redux** store](https://www.freecodecamp.org/learn/front-end-libraries/redux/create-a-redux-store)

| Solução:
```javascript
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer);
```
- [Buscando o estado dentro de um **Redux** store](https://www.freecodecamp.org/learn/front-end-libraries/redux/get-state-from-the-redux-store)

| Solução:
```javascript
const store = Redux.createStore(
  (state = 5) => state
);

const currentState = store.getState();
```
- [Definindo uma Action](https://www.freecodecamp.org/learn/front-end-libraries/redux/define-a-redux-action)

| Solução:
```javascript
// Define an action here:
const action = {
  type: 'LOGIN',
}
```

### Exercícios
Você irá fazer 14 exercícios propostos pelo site `freeCodeCamp`, com o objetivo de consolidar seus conhecimentos acerca dos conceitos presentes no **Redux**.
1. [Definindo um `action creator`](https://www.freecodecamp.org/learn/front-end-libraries/redux/define-an-action-creator)

| Solução:


```javascript
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
const actionCreator = () => {
  return action;
}
```

2. [Enviando uma `action` para um `reducer`](https://www.freecodecamp.org/learn/front-end-libraries/redux/dispatch-an-action-event)

| Solução:

```javascript
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());
```

3. [Criando um `Reducer` para receber e manipular uma `action`](https://www.freecodecamp.org/learn/front-end-libraries/redux/handle-an-action-in-the-store)

| Solução:

```javascript
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case 'LOGIN':
      return {login: true};
    default:
      return state;
  }
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

4. [Criando um `Reducer` que aceita `actions` de tipos distintos](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-a-switch-statement-to-handle-multiple-actions)
```javascript
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case 'LOGIN':
      return { authenticated: true };
    case 'LOGOUT':
      return { authenticated: false };
    default:
      return state;
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

5. [Usando `const` para os `action types`](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-const-for-action-types)

| Solução:

```javascript


const defaultState = {
  authenticated: false
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
```

6. [Registrando um `listener` para o `store`](https://www.freecodecamp.org/learn/front-end-libraries/redux/register-a-store-listener)

| Solução:

```javascript
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
store.subscribe(() => {
  count = count + 1;
})
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```

7. [Combinando múltiplos `reducers`](https://www.freecodecamp.org/learn/front-end-libraries/redux/combine-multiple-reducers)

| Solução:

```javascript
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

// Define the root reducer here
const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer,
})

const store = Redux.createStore(rootReducer);
```