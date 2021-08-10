<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]
[![mongodb][mongodb-shield]][mongodb-url]

<h2>Bloco 23 | Introdução ao MongoDB</h2>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#dia-23.1">Dia 23.1 | MongoDB - Introdução</a>
    </li>
    <li>
      <a href="#dia-23.2">Dia 23.2 | Filter Operators</a>
    </li>
    <li>
      <a href="#dia-23.3">Dia 23.3 | Projeto - Data Flights</a>
    </li>
  </ol>
</details>

<!-- Dia 23.1 | MongoDB - Introdução -->
## <a id="dia-23.1" href="23.1">Dia 23.1 | MongoDB - Introdução</a>
Hoje aprendemos o que é o MongoDB, como instalá-lo, como conectar a ele e executar comandos de leitura/escrita. Também aprendemos sobre tipos de instalação, conceitos de bancos de dados, coleções, operadores e documentos.

Após a aula de hoje, nos tornamos capazes de:
- Instalar e conectar-se ao **MondoDB**;
- Listar bancos de dados e coleções;
- Inserir documentos no banco de ados usando o `insert()`;
- Pesquisar documentos no banco de dados usando o `find()`;
- Contar a quantidade de documentos retornados usando o `count()`;
- Filtrar o resultado das suas pesquisas;
- Limitar e pular os documentos retornados;
- Fazer uma paginação simples combinando os métodos `limit()` e o `skip()`;
- Entender o que é uma projeção e como utilizá-la.

<!-- Dia 23.2 | Filter Operators -->
## <a id="dia-23.2" href="23.2">Dia 23.2 | Filter Operators</a>

Hoje aumentamos o poder de nossas consultas no **MongoDB** através do uso de operadores de filtro, que nos ajudam na recupeção dos dados das coleções.

Após esssa aula, nos tornamos capazes de:
- Utilizar os operadores de comparação
    - **$lt** (less than, menor que, <)
    - **$lte** (less than or equal, menor ou igual a, ≤ )
    - **$gt** (greater then, maior que, >)
    - **$gte** (greater then or equal, maior ou igual a, ≥)
    - **$eq** (equal, igual a, =)
    - **$ne** (not equal, diferente de, ≠, <>)
    - **$in** (in, dentro de)
    - **$nin**(not in, não está dentro de)
- Utilizar os operadores lógicos
    - **$and** (and, se todas as condições forem verdadeiras retorna *true*)
    - **$or** (or, se apenas uma condição for verdadeira retorna *true*)
- Compor filtros avançados com
    - **$not** (not, inverte o resultado da expressão)
    - **$nor** (not or, semelhante ao **or**, porém trabalha com a condição *false*)
- Utilizar o operador
    - **$exists** (exists, verifica a existência de um atributo)
- Utilizar o método
    - **sort()** (sort, ordenar)
- Remover documentos

<!-- Dia 23.3 | Projeto - Data Flights -->
## <a id="dia-23.3" href="23.3">Dia 23.3 | Projeto - Data Flights</a>


---

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/rafaelgeronimo

[mongodb-shield]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mysql&logoColor=white
[mongodb-url]: https://www.mongodb.com/