## Bloco 25 | MongoDB: Aggregation Framework
# Dia 25.3 | Project: MongoDB Aggregations

```shell
DBNAME=aggregations ./scripts/resetdb.sh assets
```

### Lista de requisitos do projeto:
**Monte queries para encontrar as informações dos desafios a seguir.**

## Desafio 1
Ajude a Trybe a escolher um filme para a próxima noite! Baseado em uma pesquisa, decidimos que os filmes em potencial devem atender alguns critérios, vejamos:

**Retorne todos os filmes que satisfaça, através de uma pipeline, as condições abaixo**
- `imdb.rating` deve ser maior ou igual a `7`;
- `genres`  não deve conter `Crime` ou `Horror`;
- `rated` deve ser igual a `PG` ou `G`;
- `languages` contém `English` e `Spanish`.
- Utilize a coleção `movies`.

Sua query deve retornar `41` documentos.

> Resposta:
```jsx
db.movies.aggregate([
  { $match: {
    "imdb.rating": { $gte: 7 },
    genres: { $nin: ["Crime", "Horror"] },
    rated: { $in: ["PG", "G"] },
    languages: { $all: ["English", "Spanish"] },
  } },
]);
```

## Desafio 2
A escolha do filme da noite foi um sucesso, mas infelizmente ficamos com nossa banda de internet quase esgotada, e ainda precisamos de uma nova recomendação de filme. Para diminuir o volume de dados trafegados:

- Utilizando o mesmo pipeline anterior, retorne apenas os campos title, rated, imdb.rating, imdb.votes e year, modificando seus nomes para titulo, avaliado, notaIMDB, votosIMDB e ano, respectivamente.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):
```json
{ 
	"titulo" : "A Streetcar Named Desire", 
	"avaliado" : "PG", 
	"notaIMDB" : 8.1, 
	"votosIMDB" : 72364, 
	"ano" : 1951 
}
// Demais documentos
```
> Resposta:
```jsx
db.movies.aggregate([
  { $match: {
    "imdb.rating": { $gte: 7 },
    genres: { $nin: ["Crime", "Horror"] },
    rated: { $in: ["PG", "G"] },
    languages: { $all: ["English", "Spanish"] },
  } },
  { $project: {
    titulo: "$title",
    avaliado: "$rated",
    notaIMDB: "$imdb.rating",
    votosIMDB: "$imdb.votes",
    ano: "$year",
    _id: 0,
  } },
]);
```

## Desafio 3
Agora que você tem os campos essenciais, aplique mais um estágio na pipeline do desafio anterior que atenda a seguinte demanda:

- Retorne esses filmes ordenados por ano e nota IMDB de forma decrescente e título por ordem alfabética.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):
```json
{
  "titulo": "McFarland, USA",
  "avaliado": "PG",
  "notaIMDB": 7.5,
  "votosIMDB": 14091,
  "ano" : 2015 
}
// Demais documentos
```
> Resposta:
```jsx
db.movies.aggregate([
  { $match: {
    "imdb.rating": { $gte: 7 },
    genres: { $nin: ["Crime", "Horror"] },
    rated: { $in: ["PG", "G"] },
    languages: { $all: ["English", "Spanish"] },
  } },
  { $project: {
    titulo: "$title",
    avaliado: "$rated",
    notaIMDB: "$imdb.rating",
    votosIMDB: "$imdb.votes",
    ano: "$year",
    _id: 0,
  } },
  {
    $sort: {
      ano: -1,
      notaIMDB: -1,
      titulo: 1,
    },
  },
]);
```

## Desafio 4
Nossa coleção de filmes tem muitos documentos diferentes, alguns com títulos "mais complexos" do que outros. Se quisermos analisar nossa coleção para encontrar títulos de filmes que têm uma só palavra no título, poderíamos buscar todos os filmes da coleção e processar isso na aplicação, mas o `Aggregation Framework  nos permite fazer isso diretamente no lado do banco de dados.

**Crie uma pipeline que retorna documentos com o novo campo `title_split`, ela deve seguir as seguintes condições:
- `title_split` deve conter uma lista de palavras presentes em `title`.
- A pipeline deve retornar apenas filmes com o título composto apenas de uma palavra.
- A pipeline deve ser ordenada por `title` em ordem alfabética.

Por exemplo, "Cinderela" e "3-25" devem entrar nessa contagem, mas "`Cast Away`" não.

**Dica**: utilize os operadores `$split`, `$size` e `$sort` para te auxiliar.
[`Documentação do $split`](https://docs.mongodb.com/manual/reference/operator/aggregation/split/)

Sua query deve retornar `8068` documentos.
> Resposta:
```jsx
db.movies.aggregate([
  {
    $project: {
      title_split: { $split: ["$title", " "] },
      _id: 0,
    },
  },
  {
    $match: {
      title_split: { $size: 1 },
    },
  },
  {
    $sort: { title_split: 1 },
  },
]);
```

## Desafio 5
Temos outra noite de filme aqui na Trybe e, desta vez, nós perguntamos à equipe quais são suas pessoas preferidas como atores e/ou atrizes. Aqui está o resultado:

- Sandra Bullock
- Tom Hanks
- Julia Roberts
- Kevin Spacey
- George Clooney

**Considerando esta lista, crie uma pipeline que retorne o `title` do vigésimo quinto filme da agregação que satisfaz as seguintes condições:**
- `countries` é Estados unidos no banco estará classificado como USA
- `tomatoes.viewer.rating` maior ou igual a `3`
- Crie um novo campo chamado `num_favs`, que represente quantos atores ou atrizes da nossa lista de favoritos aparecem no elenco (informação do campo cast no banco) do filme, caso ele possua favoritos.
- Ordene os resultados por `num_favs`, `tomatoes.viewer.rating` e `title`, todos em ordem decrescente.

**Dica**: coloque a lista de atores e atrizes favoritos em uma variável e explore operadores como `$size` e [`$setIntersection`](https://docs.mongodb.com/manual/reference/operator/aggregation/setIntersection/index.html).

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):
```json
{
  "title" : <nome_do_filme>
}
```
> Resposta:
```jsx
const favoriteActors = [
  "Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney",
];

db.movies.aggregate([
  {
    $match: {
      $and: [
        { countries: "USA" },
        { "tomatoes.viewer.rating": { $gte: 3 } },
        { cast: { $in: favoriteActors } },
      ],
    },
  },
  {
    $addFields: {
      num_favs: {
        $size: {
          $setIntersection: [favoriteActors, "$cast"],
        },
      },
    },
  },
  {
    $sort: {
      num_favs: -1,
      "tomatoes.viewer.rating": -1,
      title: -1,
    },
  },
  {
    $project: {
      title: 1,
      _id: 0,
    },
  },
  { $limit: 25 },
  { $skip: 24 },
]);
```

## Desafio 6
Vamos explorar mais operadores aritméticos!

**Considerando todos os filmes que ganharam o Oscar pelo menos uma vez, calcule o maior valor, menor valor, média e o desvio padrão das avaliações (informação do campo `imdb.rating no banco`)**

- Para a média e o desvio padrão arredonde os valores para uma casa decimal utilizando o `$round`.
**Dica**: todos os filmes na coleção, que já ganharam um Oscar (informação do campo awards no banco), começam com uma sequência de string parecida com essas abaixo, portanto  $regex` é um operador bem-vindo:
```
Won 10 Oscars
Won 1 Oscar
```

Utilizem o [$stdDevSamp](https://docs.mongodb.com/manual/reference/operator/aggregation/stdDevSamp/index.html) para calcular o desvio padrão.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```
{
  "maior_rating" : <maior_rating>,
  "menor_rating" : <menor_rating>,
  "media_rating" : <media_rating>,
  "desvio_padrao" : <desvio_padrao>
}
```
> Resposta:
```jsx
db.movies.aggregate([
  {
    $match: {
      awards: { $regex: /^won.*oscar/i },
    },
  },
  {
    $group: {
      _id: null,
      maior_rating: { $max: "$imdb.rating" },
      menor_rating: { $min: "$imdb.rating" },
      media_rating: { $avg: "$imdb.rating" },
      desvio_padrao: { $stdDevSamp: "$imdb.rating" },
    },
  },
  {
    $project: {
      maior_rating: 1,
      menor_rating: 1,
      media_rating: { $round: ["$media_rating", 1] },
      desvio_padrao: { $round: ["$desvio_padrao", 1] },
      _id: 0,
    },
  },
]);
```
## Desafio 7
Vamos nos aprofundar um pouco mais em nossa coleção de filmes.

**Conte quantos filmes cada um dos atores e atrizes do elenco (cast no banco) já participou e obtenha uma média do campo imdb.rating para cada um desses atores e atrizes.**
- Traga o nome do ator ou atriz;
- Número de filmes em que participou
- Média do imdb desses filmes arredondada para uma casa decimal usando o operador $round.
- Considere somente os membros do elenco de filmes com o idioma inglês (English).
- Exiba a lista em ordem decrescente de documentos pelo número de filmes e nome do ator ou atriz.

Sua query deve retornar `47055` documentos. Cada documento no resultado deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```
{ "_id" : "John Wayne", "numeroFilmes" : 107, "mediaIMDB" : 6.4 }

```
> Resposta:
```jsx
db.movies.aggregate([
  {
    $match: {
      languages: "English",
    },
  },
  {
    $unwind: "$cast",
  },
  {
    $group: {
      _id: "$cast",
      numeroFilmes: { $sum: 1 },
      mediaIMDB: { $avg: "$imdb.rating" },
    },
  },
  {
    $project: {
      _id: 1,
      numeroFilmes: 1,
      mediaIMDB: { $round: ["$mediaIMDB", 1] },
    },
  },
  {
    $sort: {
      numeroFilmes: -1,
      _id: -1,
    },
  },
]);
```

## Desafio 8
Trocando de contexto, vamos utilizar nossa outra coleção que contém dados de empresas aéreas, suas rotas, seus voos e parcerias.

**Liste todas as parcerias da coleção `air_alliances`, que voam rotas com um Boing 747 ou um Airbus A380 , para descobrir qual delas tem o maior número de rotas com esses aviões.**
No campo `airplane`, na coleção  `air_routes`:

- Boing 747 está abreviado para `747`
- Airbus A380 está abreviado para `380`

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```json
{ "_id" : <nome_da_alianca>, "totalRotas" : <total_de_rotas> }
```
> Resposta:
```jsx
db.air_routes.aggregate([
  {
    $match: {
      airplane: { $in: ["747", "380"] },
    },
  },
  {
    $lookup: {
      from: "air_alliances",
      let: { airlineName: "$airline.name" },
      pipeline: [
        { $unwind: "$airlines" },
        {
          $match: {
            $expr: {
              $eq: ["$airlines", "$$airlineName"],
            },
          },
        },
        {
          $project: { _id: 0, name: 1 },
        },
      ],
      as: "routes_alliances",
    },
  },
  {
    $unwind: "$routes_alliances",
  },
  {
    $group: {
      _id: "$routes_alliances.name",
      totalRotas: { $sum: 1 },
    },
  },
  { $sort: { totalRotas: -1 } },
  { $limit: 1 },
]);
```
## Desafio 9
A partir da coleção `trips`, determine o menor e o maior ano de nascimento.

- Guarde essa informação, você precisará dela mais tarde.
- Não considere documentos com valores vazios ("") e em que o campo não existe!
- Para este desafio utilize o operador $toInt para converter de string para valor inteiro.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):
```js
{ "maiorAnoNascimento" : <ano>, "menorAnoNascimento" : <ano> }
```
> Resposta:
```jsx
db.trips.aggregate([
  {
    $match: {
      birthYear: { $exists: true, $ne: "" },
    },
  },
  {
    $group: {
      _id: null,
      maiorAnoNascimento: { $max: { $toInt: "$birthYear" } },
      menorAnoNascimento: { $min: { $toInt: "$birthYear" } },
    },
  },
  {
    $project: {
      _id: 0,
    },
  },
]);
```

## Desafio 10
**Encontre a duração média de viagens por tipo de usuário**.
- Exiba o valor em horas com apenas duas casas decimais
- Exiba a média de viagens ordenada de forma crescente.

Para arredondar a média use o [`$round`](https://docs.mongodb.com/manual/reference/operator/aggregation/round/index.html).

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):
```js
{ "tipo" : <tipo>, "duracaoMedia" : <duracaoMedia> }
// ...
```
> Resposta:
```jsx
db.trips.aggregate([
  {
    $group: {
      _id: "$usertype",
      time: { $avg: { $subtract: ["$stopTime", "$startTime"] } },
    },
  },
  {
    $project: {
      tipo: "$_id",
      duracaoMedia: {
        $round: [{ $divide: ["$time", 3600000] }, 2],
      },
      _id: 0,
    },
  },
  {
    $sort: { duracaoMedia: 1 },
  },
]);
```

## Desafio 11

**Determine qual o dia da semana com maior número de viagens iniciadas.**
Dica: Utilize o operador [`$dayOfWeek`](https://docs.mongodb.com/manual/reference/operator/aggregation/dayOfWeek/index.html) para extrair o dia da semana como um número de uma data.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):
```json
{ "diaDaSemana" : <dia_da_semana>, "total" : <total_de_viagens> }
```
> Resposta:
```jsx
db.trips.aggregate([
  {
    $group: {
      _id: { $dayOfWeek: "$startTime" },
      total: { $sum: 1 },
    },
  },
  {
    $project: {
      diaDaSemana: "$_id",
      total: "$total",
      _id: 0,
    },
  },
  {
    $sort: { total: -1 },
  },
  {
    $limit: 1,
  },
]);
```

## Desafio 12
**Usando a pipeline anterior que retorna o dia com mais viagens, determine qual estação tem o maior número de viagens nesse dia da semana.
Exiba apenas o nome da estação e o total de viagens.**
**Dica**: Utilize o operador [`$dayOfWeek`](https://docs.mongodb.com/manual/reference/operator/aggregation/dayOfWeek/index.html) para extrair o dia da semana como um número de uma data.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):
```json
{ "nomeEstacao" : <nome_da_estacao>, "total" : <total_de_viagens> }
```
> Resposta:
```jsx
db.trips.aggregate([
  {
    $group: {
      _id: {
        day: { $dayOfWeek: "$startTime" },
        station: "$startStationName",
      },
      count: { $sum: 1 },
    },
  },
  {
    $project: {
      nomeEstacao: "$_id.station",
      total: "$count",
      _id: 0,
    },
  },
  {
    $sort: { total: -1 },
  },
  {
    $limit: 1,
  },
]);
```