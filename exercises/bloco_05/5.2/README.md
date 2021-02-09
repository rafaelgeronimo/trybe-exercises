# Bloco 5 | JavaScript: DOM, Eventos e Web Storage

## Dia 5.2 | JavaScript - Trabalhando com elementos

**- Parte I - Buscando elementos**
A propriedade `parentNode` acessa o elemento pai do elemento sobre o qual a propriedade é chamada. Mas ela não é a única forma de, a partir de um elemento, navega para outros:
- `parentNode`: retorna o elemento pai
- `childNodes`: retorna um array com os elementos filhos
- `firstChild`: retorna o primeiro filho
- `lastChild`: retorna o último filho
- `nextSibling`: retorna o próximo nó
- `previousSibling`: retorna o nó anterior
- `nextElementSibling`: retorna o próximo elemento
- `previousElementSiblin`: retorna o elemento anterior

### Prática

**Parte I - Buscando elementos**

Adicione o código abaixo a uma página HTML e adicione uma tag `script`. Você deverá fazer tudo a seguir suando somente *JavaScript*.

```html
<div id="paiDoPai">
  <div id="pai">
    <div id="primeiroFilho"></div>
    <div id="elementoOndeVoceEsta">
      <div id="primeiroFilhoDoFilho"></div>
      <div id="segundoEUltimoFilhoDoFilho"></div>
    </div>
    Atenção!
    <div id="terceiroFilho"></div>
    <div id="quartoEUltimoFilho"></div>
  </div>
</div>
```
1. Acesse o elemento `elementoOndeVoceEsta` .

```javascript
document.querySelector('#elementoOndeVoceEsta');
```

2. Acesse `pai` a partir de `elementoOndeVoceEsta` e adicione uma color a ele.

```js
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'rgb(76,164,109)';
```

3. Acesse o `primeiroFilhoDoFilho` e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

```js
document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerText = "Lorem ipsum"
```

4. Acesse o `primeiroFilho` a partir de `pai` .

```js
document.querySelector('#pai').firstElementChild;
```

5. Agora acesse o `primeiroFilho` a partir de `elementoOndeVoceEsta` .

```js
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
```

6. Agora acesse o texto `Atenção!` a partir de `elementoOndeVoceEsta` .

```js
document.querySelector('#elementoOndeVoceEsta').parentNode.innerText;
```

7. Agora acesse o `terceiroFilho` a partir de `elementoOndeVoceEsta` .

```js
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
```

8. Agora acesse o `terceiroFilho` a partir de `pai` .

```js
document.querySelector('#pai').children[2];
```

**Parte II - Criando elementos**

1. Crie um irmão para `elementoOndeVoceEsta` .

```js
let elementoPai = document.querySelector('#elementoOndeVoceEsta').parentNode;
let novoElemento = document.createElement('div');
elementoPai.appendChild(novoElemento);

```

2. Crie um filho para `elementoOndeVoceEsta` .

```js
let elementoAtual = document.querySelector('#elementoOndeVoceEsta');
let novoElemento = document.createElement('div');
elementoAtual.appendChild(novoElemento);
```

3. Crie um filho para `primeiroFilhoDoFilho` .

```js
let primeiroFilhoDoFilho = document.querySelector('#elementoOndeVoceEsta').firstElementChild;
let novoElemento = document.createElement('div');
novoElemento.setAttribute('id', 'primeiroFilhoDoFilhoDoFilho');
primeiroFilhoDoFilho.appendChild(novoElemento);
```
4. A partir desse filho criado, acesse `terceiroFilho` .

```js
document.querySelector('#primeiroFilhoDoFilhoDoFilho').parentElement.parentElement.nextElementSibling;
```

**Parte III - Removendo elementos**

- Remova todos os elementos da página, menos `pai` , `elementoOndeVoceEsta` e `primeiroFilhoDoFilho` .

```js

```

## Exercícios

Antes de fazer os exercícios, crie um arquivo HTML na pasta `exercises/bloco_05/5.2` e copie o código abaixo:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.2</title>
    <style>
      div {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // COLOQUE SEU CÓDIGO AQUI
    </script>
  </body>
</html>
```

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código *JavaScript* , o qual deve ser inserido entre as tags `<script>` e `</script>` .

Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

1. Adicione a tag `h1` com o texto `Exercício 5.2 - JavaScript DOM` como filho da tag `body` ;
2. Adicione a tag `div` com a classe `main-content` como filho da tag `body` ;
3. Adicione a tag `div` com a classe `center-content` como filho da tag `div` criada no passo 2;
4. Adicione a tag `p` como filho do `div` criado no passo 3 e coloque algum texto;
5. Adicione a tag `div` com a classe `left-content` como filho da tag `div` criada no passo 2;
6. Adicione a tag `div` com a classe `right-content` como filho da tag `div` criada no passo 2;
7. Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200` e classe `small-image` . Esse elemento deve ser filho do `div` criado no passo 5;
8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do `div` criado no passo 6;
9. Adicione 3 tags `h3` , todas sendo filhas do `div` criado no passo 2.

---

Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

1. Adicione a classe `title` na tag `h1` criada;
2. Adicione a classe `description` nas 3 tags `h3` criadas;
3. Remova o `div` criado no passo 5 (aquele que possui a classe `left-content` ). Utilize a função `.removeChild()` ;
4. Centralize o `div` criado no passo 6 (aquele que possui a classe `right-content` ). Dica: para centralizar, basta configurar o `margin-right: auto` do `div` ;
5. Troque a cor de fundo do elemento pai da `div` criada no passo 3 (aquela que possui a classe `center-content` ) para a cor verde;
6. Remova os dois últimos elementos ( `nove` e `dez` ) da lista criada no passo 8.

[Respostas no arquivo exercise.html](exercise.html)