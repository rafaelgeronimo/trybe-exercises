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