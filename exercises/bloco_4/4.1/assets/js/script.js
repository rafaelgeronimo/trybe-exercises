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