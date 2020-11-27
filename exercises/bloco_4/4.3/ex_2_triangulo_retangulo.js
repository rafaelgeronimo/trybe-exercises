function trianguloRetangulo(base){
  let formaLinha = "";
  for(linha = 1; linha < base; linha += 1 ) {
    formaLinha += "*";
    console.log(formaLinha);
  }
}

trianguloRetangulo(5);