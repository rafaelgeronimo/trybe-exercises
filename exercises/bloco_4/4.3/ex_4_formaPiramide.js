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