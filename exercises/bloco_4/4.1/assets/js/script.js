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

function revelaMovimentos() {
  var nomePeca = document.getElementById("nomePeca").value;
  nomePeca = nomePeca.toLowerCase();
  var movimentos = [];
  switch (nomePeca) {
    case "rei":
      movimentos = "Horizontal, vertical e diagonal. Uma casa por vez";
      break;
    case "rainha":
      movimentos = "Horizontal, vertical e diagonal";
      break;
    case "bispo":
      movimentos = "Diagonal";
      break;
    case "cavalo":
      movimentos = "L (duas casas horizontal e uma vertical ou vice-versa)";
      break;
    case "torre":
      movimentos = "Vertical ou horizontal";
      break;
    case "peao":
      movimentos = "Frente. Captura na diagonal."
      break;
    default:
      movimentos = "Informe o nome de uma peça válida."
      break;
  }
  document.getElementById("movimentos").innerHTML = movimentos; 
}

function converteNota() {
  var nota = parseInt(document.getElementById("nota").value);
  var notaConvertida = "";
  if (nota >= 0 && nota < 50) {
    notaConvertida = "F"
  }else if (nota >= 50 && nota < 60) {
    notaConvertida = "E"
  } else if (nota >= 60 && nota < 70) {
    notaConvertida = "D";
  } else if (nota >= 70 && nota < 80) {
    notaConvertida = "C";
  } else if (nota >= 80 && nota <90) {
    notaConvertida = "B";
  } else if (nota >= 90 && nota <= 100){
    notaConvertida = "A";
  } else {
    notaConvertida = "A nota informada deve estar entre 0 e 100.";
  }
  document.getElementById("notaConvertida").innerHTML = notaConvertida;
}

function checarPar() {
  var par1 = parseInt(document.getElementById("par1").value);
  var par2 = parseInt(document.getElementById("par2").value);
  var par3 = parseInt(document.getElementById("par3").value);
  if(par1 % 2 == 0 || par2 %2 == 0 || par2 % 2 == 0) {
    var algumPar = "<span class='code'>true</span> Pelo menos um dos números é par.";
  } else {
    var algumPar = "<span class='code'>false</span> Nenhum número par informado.";
  }
  document.getElementById("resultadoPar").innerHTML = algumPar;
}

function checarImpar() {
  var impar1 = parseInt(document.getElementById("impar1").value);
  var impar2 = parseInt(document.getElementById("impar2").value);
  var impar3 = parseInt(document.getElementById("impar3").value);
  if(impar1 % 2 >= 1 || impar2 %2 >= 1 || impar3 % 2 >= 1) {
    var algumImpar = "<span class='code'>true</span> Pelo menos um dos números é ímpar.";
  } else {
    var algumImpar = "<span class='code'>false</span> Nenhum número ímpar informado.";
  }
  document.getElementById("resultadoImpar").innerHTML = algumImpar;
}

function checarLucro() {
  var custo = parseInt(document.getElementById('custo').value);
  var venda = parseInt(document.getElementById('venda').value);
  var custoTotal = custo + (custo * 0.20);
  var lucro = venda - custoTotal;
  if (custo < 0 || venda < 0) {
    document.getElementById('lucro').innerHTML = '<br>Os valores de CUSTO e/ou VENDA não pode ser menor que ZERO.'
  } else {
    document.getElementById('lucro').innerHTML = 'O lucro da venda do produto é de <strong>' + lucro + '</strong>.'
  }
}
var inss = 0;
/** Calculo de salário liquido */
function calcularSalario() {
  var inss, ir , salarioBase , salarioLiquido , parcela = 0;
  var salarioBruto = parseInt(document.getElementById('salarioBruto').value);
  /** definindo o inss */
  if (salarioBruto <= 1556.94) {
    inss = 0.08;
  } else if (salarioBruto <= 2594.92) {
    inss = 0.09;
  } else if (salarioBruto <= 5189.82) {
    inss = 0.11;
  } else  {
    inss = 570.88;
  }
  /** definindo o salário base */
  salarioBase = salarioBruto - (salarioBruto * inss);
  /** definindo o imposto de renda */
  if (salarioBase <= 1903.98) {
    ir = 0;
  } else if (salarioBase <= 2826.65) {
    ir = 0.075;
    parcela = 142.80;
  } else if (salarioBase <= 3751.05) {
    ir = 0.15;
    parcela = 354.80;
  } else if (salarioBase <=4664.68) {
    ir = 0.225;
    parcela = 636.13;
  } else {
    ir = 0.275;
    parcela = 869.36;
  }
  /** definindo o salario liquido */
  if (salarioBase > 1903.97){
    salarioLiquido = parseFloat((salarioBase - (salarioBase * ir) + parcela).toFixed(2));
  } else {
    salarioLiquido = parseFloat((salarioBase - inss).toFixed(2));
  }
  if (salarioLiquido < 0){
    document.getElementById('salarioLiquido').innerHTML = 'O seu salário bruto não pode ser negativo.';
  } else {
    document.getElementById('salarioLiquido').innerHTML = 'R$ ' + salarioLiquido;
  }
  console.log('Salario Bruto = ' + salarioBruto + '\nINSS = ' + inss + '\nSalário Base = ' + salarioBase + '\nIR = ' + ir);
}