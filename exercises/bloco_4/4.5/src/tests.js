// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === 'true' && bool2 === 'true') {
    alert(true);;
  } else {
    alert(false);
  }
}

// Desafio 2
function calcArea() {
  let baseTriangulo = document.getElementById('base').value;
  let alturaTriangulo = document.getElementById('altura').value;
  let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
  document.getElementById('areaTriangulo').innerHTML = `A área do triângulo é igual a ${areaTriangulo}`;
}

// Desafio 3
function splitSentence() {
  let phrase = document.getElementById('sentence').value;
  let words = phrase.split(' ');
  document.getElementById('splitedSentence').innerHTML = `[${words}]`;
}

// Desafio 4
function concatName() {
  let firstAndLast = [];
  let names = document.getElementById('names').value;
  firstAndLast = firstAndLast.concat(`${names[names.length - 1]}, ${names[0]}`);
  document.getElementById('firstAndLast').innerHTML = firstAndLast;
}