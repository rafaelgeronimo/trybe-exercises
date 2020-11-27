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
