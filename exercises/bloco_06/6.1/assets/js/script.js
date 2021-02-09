const estados = [
  { 
  	sigla: 'AC', 
  	nome: 'Acre'
  },
  { 
  	sigla: 'AL',
    nome: 'Alagoas'  
  },
  { 
  	sigla: 'AP',
    nome: 'Amapá' 
  },
  { 
  	sigla: 'AM', 
    nome: 'Amazonas'
  },
  { sigla: 'BA',
    nome: 'Bahia'
  },
  { 
    sigla: 'CE',
    nome: 'Ceará' 
    },
  { 
    sigla: 'DF',
    nome: 'Distrito Federal' 
  },
  { 
    sigla: 'ES',
    nome: 'Espírito Santo' 
  },
  { 
    sigla: 'GO',
    nome: 'Goías' 
  },
  { 
    sigla: 'MA',
    nome: 'Maranhão' 
  },
  { 
    sigla: 'MT',
    nome: 'Mato Grosso' 
  },
  { 
    sigla: 'MS',
    nome: 'Mato Grosso do Sul' 
  },
  { 
    sigla: 'MG',
    nome: 'Minas Gerais' 
  },
  { 
    sigla: 'PA',
    nome: 'Pará' 
  },
  { 
    sigla: 'PB',
    nome: 'Paraíba' 
  },
  { 
    sigla: 'PR',
    nome: 'Paraná' 
  },
  { 
    sigla: 'PE',
    nome: 'Pernambuco' 
  },
  { 
    sigla: 'PI',
    nome: 'Piauí' 
  },
  { 
    sigla: 'RJ',
    nome: 'Rio de Janeiro' 
  },
  { 
    sigla: 'RN',
    nome: 'Rio Grande do Norte' 
  },
  { 
    sigla: 'RS',
    nome: 'Rio Grande do Sul' 
  },
  { 
    sigla: 'RO',
    nome: 'Rondônia' 
  },
  { 
    sigla: 'RR',
    nome: 'Roraíma' 
  },
  { 
    sigla: 'SC',
    nome: 'Santa Catarina' 
  },
  { 
    sigla: 'SP',
    nome: 'São Paulo' 
  },
  { 
    sigla: 'SE',
    nome: 'Sergipe' 
  },
  { 
    sigla: 'TO',
    nome: 'Tocantins' 
  },
]

const UFListt = document.querySelector('#uf');
for (let i in estados){
  let newUF = document.createElement("option");
  newUF.setAttribute('value', estados[i].sigla);
  newUF.text = estados[i].nome;
  /* newUF.innerText(estados[i].nome); */
  console.log(estados[i].nome)
  UFListt.appendChild(newUF);
  
}

document.getElementById('inicio').DatePickerX.init(
  {format: 'dd/mm/yyyy'}
);


  document.querySelector(".submitButton").addEventListener('click', function (event) {
    event.preventDefault();
    const inputName = document.querySelector(".inputName").value;
    const inputEmail = document.querySelector(".inputEmail").value;
    const inputCPF = document.querySelector(".inputCPF").value;
  });

