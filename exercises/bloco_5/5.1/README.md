## Bloco 5 | JavaScript: DOM, Eventos e Web Storage

### Dia 5.1 | JavaScript - DOM e seletores

**Exercícios de fixação**:

Parte II - Seletores de elementos: `document.getElementById()`

Dada a estrutura HTML abaixo:

```html
<!DOCTYPE HTML>
<html>
  <body>
    <h2 id="page-title">Título</h2>
		<p id="paragraph">Dê uma cor para este parágrafo!</p>
		<h4 id="subtitle">Subtítulo</h4>
    <p id="second-paragraph">Segundo parágrafo!</p>

    <script>
      var paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>
```

1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

```javascript
document.getElementById('page-title').innerText = 'Senhor do Anéis';
```

2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

```javascript
document.getElementById('second-paragraph').innerText = 'O Senhor dos Anéis é uma trilogia cinematográfica dirigida por Peter Jackson com base na obra-prima homónima de J. R. R. Tolkien. Apesar de seguirem a linha-mestra da trilogia, os filmes possuem inserções e desvios com relação ao material original.';
```

3. Por fim, recupere o subtítulo e altere-o também.

```javascript
document.getElementById('subtitle').innerText = '(The Lord of The Rings)';
```

Parte II - Seletores de elementos: `document.getElementsByClassName()` e `document.getElementsByTagName()`.

1. Adicione ao seu HTML uma classe com alguns estilos para os seus dois parágrafos.

```html
...
<p id="paragraph" class="estilo">Dê uma cor para este parágrafo!</p>
...
<p id="second-paragraph" class="estilo">Segundo parágrafo!</p>
...
```

2. Recupere os seus parágrafos via código JavaScript, usando a função `getElementsByClassName`;

```javascript
document.getElementsByClassName('estilo')
```

3. Altere algum estilo do primeiro deles.

```javascript
document.getElementsByClassName('estilo')[0].style.backgroundColor = "yellow";
```

4. Recupere o subtítulo pela tag.

```javascript
var subtitulo = document.getElementsByTagName("h4")[0].innerText;
```

---
