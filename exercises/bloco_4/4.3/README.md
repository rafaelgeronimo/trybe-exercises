## Bloco 4 | Introdução à JavaScript e Lógica de Programação

### Dia 4.3 | Lógica de Programação e Algoritmos

Aprofundando os conhecimentos.

1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor `n` qualquer, seja `n > 1`, imprima na tela um quadrado feito de asteriscos de lado de tamanho `n`. Por exemplo:

```shell
n = 5

*****
*****
*****
*****
*****
```

[Solução](ex_1_formaQuadrado.js):
```javascript
function formaQuadrado(tamanho) {
  formaLinha = "";
  for(let linha = 0; linha < tamanho; linha += 1){
    for(let coluna = 0; coluna < tamanho; coluna += 1) {
      formaLinha += "*";
    }
    console.log(formaLinha);
    formaLinha = "";
  }
}

formaQuadrado(4);
```

---

2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
   
```shell
n = 5
*
**
***
****
*****
```

[Solução](ex_ex_2_triangulo_retangulo.js):
```javascript
function trianguloRetangulo(base){
  let formaLinha = "";
  for(linha = 1; linha < base; linha += 1 ) {
    formaLinha += "*";
    console.log(formaLinha);
  }
}

trianguloRetangulo(5);
```

---

3 - Agora inverta o lado do triângulo. Por exemplo:
```shell
n = 5
    *
   **
  ***
 ****
*****
```

[Solução](ex_3_triangulo_inverso.js)
```javascript
function trianguloInverso(base) {
  let formaLinha = "";
  for(let linha = 1; linha < base; linha += 1) {
    for(let coluna = base; coluna > 0; coluna -= 1) {
      if(coluna > linha) {
        formaLinha += " ";
      } else {
        formaLinha += "*";
      }
    }
    console.log(formaLinha);
    formaLinha = "";
  }
}

trianguloInverso(5);
```

---

4 - Depois, faça uma pirâmide com `n` asteriscos de base:
```shell
n = 5

  *  
 ***
*****
```

[Solução](ex_4_formaPiramide.js)
```javascript
function formaPiramide(base) {
  let formaLinha = '';
  let metade = (base + 1) / 2;
  let spaceLeft = metade;
  let spaceRight = metade;
  for(let linha = 0; linha <= metade; linha += 1) {
      for(let coluna = 1; coluna <= base; coluna += 1) {
        if (coluna > spaceRight && coluna < spaceLeft) {
          formaLinha += '*';
        } else {
          formaLinha += ' ';
        }
      }
    console.log(formaLinha);
    formaLinha = '';
    spaceLeft += 1;
    spaceRight -= 1;
  }
}

formaPiramide(9);
```

| Obs.: para o exerício 4 eu precisei buscar inspiração no gabarito.


---

5 - Faça uma pirâmide com `n` asteríscos de base que seja vazia no meio. Assuma que o valor de `n` sempre será ímpar:

```shell
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7
  
   *
  * *
 *   *
*******
```

[Solução](ex_5_pyramid.js)

```javascript
function pyramid(base) {
  if(base %2 > 0) {
    let newRow = '';
    let half = (base + 1) / 2;
    let spaceLeft = half;
    let spaceRight = half;
    for(let rowPyramid = 0; rowPyramid < half -1; rowPyramid += 1) {
      for(let columnPyramid = 0; columnPyramid <= base; columnPyramid += 1) {
        if(columnPyramid === spaceRight || columnPyramid === spaceLeft) {
          newRow += '*';
        } else {
          newRow += ' ';
        }
      }
      console.log(newRow);
      newRow = '';
      spaceLeft += 1;
      spaceRight -= 1;
    }
    newRow += ' ';
    for(let pyramidBase = 0; pyramidBase < base; pyramidBase += 1) {
      newRow += '*';
    }
    console.log(newRow);
  } else {
    console.log('Por favor, informe um número ímpar!');
  }
}

pyramid(7);
```


</> com 💚 por Rafael Gerônimo | Exercícios by [Trybe](https://betrybe.com)