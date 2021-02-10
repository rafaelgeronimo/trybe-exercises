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