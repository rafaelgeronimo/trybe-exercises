# Bloco 5 | JavaScript: DOM, Eventos e Web Storage

## Dia 5.1 | JavaScript - Trabalhando com elementos

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