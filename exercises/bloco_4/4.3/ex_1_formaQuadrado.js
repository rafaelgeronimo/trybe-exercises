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