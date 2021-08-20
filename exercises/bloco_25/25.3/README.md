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
  ""
]
```