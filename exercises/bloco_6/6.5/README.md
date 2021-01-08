<!-- Dia 6.5 | CSS Responsivo - Mobile First -->
## Dia 6.5 | CSS Responsivo - Mobile First

### Atividades do conteúdos
<!-- 
**Parte 1**


[Para realizar as tarefas abaixo, usar esse template do W3Schools](https://www.w3schools.com/css/tryit.asp?filename=trycss_mediaqueries_minmax)
- Altere o código para que a `div` amarela fique com a cor **azul** quando a largura da página estiver entre `900px` e `1100px`;
- Altere o código para que a `div` amarela fique com a cor **vermelha** quando a largura da página for até `600px`;
- Crie uma outra `div` idêntica a existente e faça com que ela seja msotrada ao lado da `div` amarela quando a largura da página for maior que `1500px`;
    - Dica: use Flexbox
- Faça com que a segunda `div` desapareça quando a largura da tela estiver entre `600px` e `900px`;
- Faça com que a primeira `div` desapareça quando a largura da tela for até `600px`.

```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
@media screen and (max-width: 600px) {
	div.example {
    	visibility: hidden;
    	font-size: 50px;
      	padding: 50px;
      	border: 8px solid black;
        background: red;
    }
    div.example-2 {
    	visibility: visible;
        font-size: 50px;
        padding: 50px;
        border: 8px solid black;
        background: yellow;
    }
}
@media screen and (max-width: 900px) and (min-width: 600px) {
  div.example {
  	visibility: visible;	
    font-size: 50px;
    padding: 50px;
    border: 8px solid black;
    background: yellow;
  }
  div.example-2 {
	visibility: hidden;
}
}
@media screen and (min-width: 900px) and (max-width: 1100px) {
	div.example {
      visibility: visible;
      font-size: 50px;
      padding: 50px;
      border: 8px solid black;
      background: blue;
    }
    div.example-2 {
    	visibility: visible;
        font-size: 50px;
        padding: 50px;
        border: 8px solid black;
        background: yellow;
    }
}
@media screen and (min-width: 1500px) {
	.divs {
    	display: flex;
    }
    div.example {
    	visibility: visible;
    	font-size: 50px;
        padding: 50px;
        border: 8px solid black;
        background: yellow;
    }
    div.example-2 {
    	visibility: visible;
        font-size: 50px;
        padding: 50px;
        border: 8px solid black;
        background: yellow;
    }
}
</style>
</head>
<body>

<h2>Change the appearance of DIV on different screen sizes</h2>
<div class="divs">
	<div class="example">Example DIV.</div>
	<div class="example-2">Example DIV 2.</div>
</div>
<p>When the browser's width is between 600 and 900px, change the appearance of DIV. 
<strong>Resize the browser window to see the effect</strong>.</p>

</body>
</html>

```

**Parte II** -->

---
## Exercícios

### Parte I - Criar uma página para uma tela pequena

Antes de começar, copie o template *HTML* e *CSS* abaixo, e salve em seus respectivos arquivos:
- exercise.html
```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Media Query Exercise 1</title>

  <link rel="stylesheet" href="exercise1.css" />
</head>

<body>

  <h1>Media Query Demo</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ipsum quae veritatis in nihil laudantium labore
    beatae nulla laborum rem. Error, molestiae eaque quod placeat at. Labore architecto minus accusantium.</p>

  <h2>Box Columns</h2>

  <figure>
    <img src="http://placekitten.com/452/450?image=12" alt="Placeholder kitteh">
    <figcaption>Place Kittens are great</figcaption>
  </figure>

  <figure>
    <img src="http://placekitten.com/452/450?image=5" alt="Placeholder kitteh">
    <figcaption>Place Kittens are great</figcaption>
  </figure>

  <figure>
    <img src="http://placekitten.com/452/450?image=1" alt="Placeholder kitteh">
    <figcaption>Place Kittens are great</figcaption>
  </figure>

  <figure>
    <img src="http://placekitten.com/452/450?image=9" alt="Placeholder kitteh">
    <figcaption>Place Kittens are great</figcaption>
  </figure>

  <figure>
    <img src="http://placekitten.com/452/450?image=6" alt="Placeholder kitteh">
    <figcaption>Place Kittens are great</figcaption>
  </figure>

</body>

</html>
```

- exercise1.css
```css
body {

}
h1 {

}
h2 {

}

img {
    max-width: 100%;
}

figure {
    margin: 0;
}
```

Comece o exercício analisando a página em uma tela de tamanho pequeno, para simular como ela pode parecer em um dispositivo móvel (você pode usar o Chrome para isso).

Agora você vai ajustar o CSS para melhorar a visualização da página.

Realize as seguintes tarefas:

- Faça o tamanho da fonte ser maior;
- Faça o tamanho da fonte dos elementos `h1` ser menor;
- Aumente o espaçamento entre as figuras;
- Adicione um pouco de margin na página.

> Ao pensar no design de uma tela pequena primeiro, estamos aplicando a abordagem do *mobile first*. Fazendo isso, começamos com um *design básico* (~~mínimo denominado comum~~) e então trabalhamos em melhorias mais sofisticadas para os navegadores com funcionalidades avançadas e layouts específicos.

> Isso garante que estamos desenvolvendo uma experiência que funcionará para todos. Também tem um efeito colateral, que isso também nos ajuda a perceber qual conteúdo é realmente importante para nossa página.

**Dica: no Chrome você pode facilmente encontrar qual o tamanho da sua tela usando o "Inspecionar elemento". Abra-o e redimensione a janela, enquanto isso preste atenção no topo da tela: as dimensões de largura e altura irão aparecer conforme você redimensiona a tela.**

- Comece a expandir a largura da sua tela. Faça isso até chegar em um ponto onde o design atual  da página não funciona mais.
    - Por exemplo, o comprimento das linhas pode começar a ficar muito grande pra que o texto seja facilmente lido. Ou talvez a página fique com uma largura grande o suficiente que não faça mais sentido as imagens serem mostradas uma abaixo da outra...

Realize as seguintes tarefas:

- Guarde a largura da tela no ponto que você identificou que o *layout* atual não funcionou bem *(por exemplo 800px)* . Esse será o primeiro *breakpoint* do *layout* . Um *breakpoint* é apenas um ponto onde estamos definindo que o *design* atual deve mudar;
- Crie uma *media query* no seu arquivo *CSS* , usando a dimensão em *pixels* que você guardou como o `min-width` do teste da *media query* . Dentro desse *breakpoint* , adicione os seguintes ajustes:
    - Altere a cor de fundo *(isso vai te ajudar a perceber quando a media query teve efeito)* ;
    - Ajuste o tamanho da fonte;
    - Ajuste as margens da página;
    - Faça as imagens serem mostradas em duas colunas.

Agora, você vai criar outro *breakpoint* para telas grandes. Redimensione sua tela de novo para encontrar um novo *breakpoint* .

- Crie uma nova *media query* no seu arquivo *CSS* usando a dimensão que você encontrou para telas grandes *(por exemplo 1300px)* , e realize os seguintes ajustes dentro do *breakpoint* :
    - Altere a cor de fundo;
    - Ajuste o tamanho da fonte;
    - Ajuste as margens da página;
    - Adicione a propriedade `max-width` à página, para garantir que a largura das linhas não fique muito grande.