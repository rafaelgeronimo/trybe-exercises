# Bloco 11 | Introdução à React

## Dia 11.2 | 'Hello, world!' no React!

### Exercícios

1. Crie um novo projeto utilizando `npx create-react-app nome-app` e acesse a pasta `nome-app`
⚠️ **Substitua o `nome-app` pelo que voc6e desejar para seu app** ⚠️

2. Crie uma lista de tareaas simples seguindo os passos abaixo:
- Insira a função a seguir acima do seu `App`:
```javascript
const task = (value) => {
  return (
    <li>{value}</li>
  );
}
```
- agora, chame a função dentro do seu componente `App` (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando `npm start`.
- por fim, crie uma array de compromissos e use a função `map` para que capa item do array apareça, como um item de lista, no seu componente `App`

| [Resposta para os exercícios 1 e 2](exercise-react/src/App.js)

3. Acesse [este link](https://www.freecodecamp.org/learn/front-end-libraries/react/) e faça cada um dos exercícios em ordem, sendo o último o "Create a Component with Composition"

| [Respostas para os exercícios do freeCodeCamp nesse reposítório no meu GitHub](https://github.com/rafaelgeronimo/freeCodeCamp/tree/master/03%20-%20Front%20End%20Libraries%20Certification/04%20-%20React)


4. **Bônus** Por último, entenda como funciona o código [deste link](https://codepen.io/nathansebhastian/pen/qgOJKe). Adicione mais dois `cards` com a descrição e link a sua escolha.