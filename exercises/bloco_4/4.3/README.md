## Bloco 4 | Introdução à JavaScript e Lógica de Programação

### Dia 4.3 | Lógica de Programação e Algoritmos

Aprofundando os conhecimentos.

1. Para o primeiro exercício de hoje, faça um programa que, dado um valor `n` qualquer, seja `n > 1`, imprima na tela um quadrado feito de asteriscos de lado de tamanho `n`. Por exemplo:

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
2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
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
3. Agora inverta o lado do triângulo. Por exemplo:
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