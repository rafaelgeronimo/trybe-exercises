function check(number) {
  const numero = parseInt(document.getElementById('number').value);
  let primos = [];
  for(let index = 0; index <= numero; index += 1) {
    if((numero % index) === 0) {
      primos.push(index);
    }
    if(primos.length > 2) {
      document.getElementById('primos').innerHTML = numero + ' <strong>não</strong> é um número primo.';
      console.log(numero + ' não é um número primo');
      break;
    }
  }
  if(primos.length === 2) {
    document.getElementById('primos').innerHTML = numero + ' é um número primo.';
    console.log(numero + ' é um número primo!');
  }
}