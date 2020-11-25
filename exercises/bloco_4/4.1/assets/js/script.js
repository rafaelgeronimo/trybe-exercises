function soma() {
  var soma1 = parseInt(document.getElementById('soma1').value);
  var soma2 = parseInt(document.getElementById('soma2').value);
  var resultado = soma1 + soma2;
  document.getElementById("resultado-soma").innerHTML = resultado;
}

function subtracao() {
  var menos1 = parseInt(document.getElementById('menos1').value);
  var menos2 = parseInt(document.getElementById('menos2').value);
  var resultado = menos1 - menos2;
  document.getElementById("resultado-subtracao").innerHTML = resultado;
}

function multiplicacao() {
  var vezes1 = parseInt(document.getElementById('vezes1').value);
  var vezes2 = parseInt(document.getElementById('vezes2').value);
  var resultado = vezes1 * vezes2;
  document.getElementById("resultado-multiplicacao").innerHTML = resultado;
}

function divisao() {
  var divide1 = parseInt(document.getElementById('divide1').value);
  var divide2 = parseInt(document.getElementById('divide2').value);
  var resultado = divide1 / divide2;
  document.getElementById("resultado-divisao").innerHTML = resultado;
}

function modulo() {
  var resto1 = parseInt(document.getElementById('resto1').value);
  var resto2 = parseInt(document.getElementById('resto2').value);
  var resultado = resto1 % resto2;
  document.getElementById("resultado-modulo").innerHTML = resultado;
}

function comparaMaiorDois() {
  var maiorNumD1 = parseInt(document.getElementById("maiorNum1d").value);
  var maiorNumD2 = parseInt(document.getElementById("maiorNum2d").value);
  if (maiorNumD1 > maiorNumD2) {
    document.getElementById("resultadoMaiorDois").innerHTML = 'O número <strong>' + maiorNumD1 + '</strong> é <em>maior</em> que o número ' + maiorNumD2;
  } else {
    document.getElementById("resultadoMaiorDois").innerHTML = 'O número ' + maiorNumD1 + ' é <em>menor</em> que o número <strong>' + maiorNumD2 + '</strong>';
  }
}

function comparaMaiorTres() {
  var maiorNumT1 = parseInt(document.getElementById("maiorNum1t").value);
  var maiorNumT2 = parseInt(document.getElementById("maiorNum2t").value);
  var maiorNumT3 = parseInt(document.getElementById("maiorNum3t").value);
  if (maiorNumT1 >= maiorNumT2 && maiorNumT1 >= maiorNumT3) {
    document.getElementById("resultadoMaiorTres").innerHTML = 'O maior número é <strong>' + maiorNumT1 + '</strong>';
  } else if(maiorNumT2 >= maiorNumT1 && maiorNumT2 >= maiorNumT3) {
    document.getElementById("resultadoMaiorTres").innerHTML = 'O maior número é <strong>' + maiorNumT2 + '</strong>';
  } else {
    document.getElementById("resultadoMaiorTres").innerHTML = 'O maior número é <strong>' + maiorNumT3 + '</strong>';
  }
}

function positivoNegativo() {
  var numPosNeg = parseInt(document.getElementById("numPosNeg").value);
  if (numPosNeg < 0) {
    document.getElementById("resultadoPositivoNegativo").innerHTML = 'O número ' + numPosNeg + ' é <strong>negativo</strong>.';
  } else if (numPosNeg > 0) {
    document.getElementById("resultadoPositivoNegativo").innerHTML = 'O número ' + numPosNeg + ' é <strong>positivo</strong>.';
  } else {
    document.getElementById("resultadoPositivoNegativo").innerHTML = 'O número ' + numPosNeg + ' é <strong>zero (!!!)</strong>.';
  }
}

function checaTriangulo() {
  var triang1 = parseInt(document.getElementById("triang1").value);
  var triang2 = parseInt(document.getElementById("triang2").value);
  var triang3 = parseInt(document.getElementById("triang3").value);
  var somaAngulos = triang1 + triang2 + triang3;
  if (somaAngulos == 180) {
    document.getElementById("resultadoTriangulo").innerHTML = "Olha, isso aí é um triângulo!";
  } else {
    document.getElementById("resultadoTriangulo").innerHTML = "Isso não é um triângulo!";
  }
}