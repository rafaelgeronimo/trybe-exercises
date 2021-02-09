# Bloco 5 | JavaScript: DOM, Eventos e Web Storage

## Dia 5.3 | JavaScript - Eventos

Exercícios de fixação:

[Exercício 1](https://codepen.io/johnatas-henrique/pen/xxbQeOb)

Solução:

```js
caixaUm.addEventListener("click", trocaCor);
```

[Exercício 2](https://codepen.io/johnatas-henrique/pen/oNgQOoY)

Solução:

```js
caixaUm.addEventListener("click", trocaCor);
caixaDois.addEventListener("dblclick", changeColors);
```

[Exercício 3](https://codepen.io/johnatas-henrique/pen/bGNQJXZ)

Solução:

```js
caixaTexto.addEventListener('keypress',trocaTextoA);
caixaTexto.addEventListener('focusout', trocaTextoB);
```

[Exercício 4](https://codepen.io/johnatas-henrique/pen/jOEQovq)

Solução:

```js
const caixaTexto = document.querySelector('.caixa-texto');
const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');
const botaoUm = document.querySelector('.botao1');
const botaoDois = document.querySelector('.botao2');

function trocarParaVerde(botao) {
	if (botao == "botaoUm"){
  	caixaUm.style.backgroundColor = 'green';
  } else {
  	caixaDois.style.backgroundColor = 'green';
  }
}

function trocarTexto(botao) {
	if (botao == "botaoUm") {
  	caixaUm.innerText = caixaTexto.value;
  } else {
  	caixaDois.innerText = caixaTexto.value;
  }
}

function alerta(){
	alert('Go Trybe!')
}

botaoUm.addEventListener('mouseover', function(){
	trocarParaVerde('botaoUm')
});

botaoDois.addEventListener('mouseover', function(){
	trocarParaVerde('botaoDois')
});

botaoUm.addEventListener('click', function() {
	trocarTexto('botaoUm')
})

botaoDois.addEventListener('click', function() {
	trocarTexto('botaoDois')
})

caixaTexto.addEventListener('paste', alerta);
```