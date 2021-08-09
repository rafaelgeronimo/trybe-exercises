## Bloco 23 | Introdução ao MongoDB
# Dia 23.1 | MongoDB - Introdução

### Exercícios

**Agora a prática:**
O **MongoDB** possui diversas ferramentas como, por exemplo, `mongo` , `mongosh` , `Compass` e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries , o importante é realizá-las.
Utilizando a coleção [bios](https://docs.mongodb.com/manual/reference/bios-example-collection/) , construa queries para retornar os seguintes itens:
**Exercício 1** : Retorne o documento com o `_id` igual a 8.
> Resposta:
```shell
people> db.bios.find({_id: 8});
```

> Retorno:
```json
[
  {
    _id: 8,
    name: { first: 'Yukihiro', aka: 'Matz', last: 'Matsumoto' },
    birth: ISODate("1965-04-14T04:00:00.000Z"),
    contribs: [ 'Ruby' ],
    awards: [
      {
        award: 'Award for the Advancement of Free Software',
        year: '2011',
        by: 'Free Software Foundation'
      }
    ]
  }
]
```

**Exercício 2** : Retorne o documento com o `_id` igual a 8, mas só exiba os atributos: `_id` e `name` .
> Resposta:
```shell
people> db.bios.find({_id: 8}, {_id: 1, name: 1});
```

> Retorno:
```json
[
  {
    _id: 8,
    name: { first: 'Yukihiro', aka: 'Matz', last: 'Matsumoto' }
  }
]
```

**Exercício 3** : Retorne apenas os atributos name e birth do documento com o `_id` igual a 8.
> Resposta:
```shell
people> db.bios.find({_id: 8}, {_id: 0, name: 1, birth: 1});
```

> Retorno:
```json
[
  {
    name: { first: 'Yukihiro', aka: 'Matz', last: 'Matsumoto' },
    birth: ISODate("1965-04-14T04:00:00.000Z")
  }
]
```

**Exercício 4** : Retorne todos os documentos em que o atributo `name.first` seja igual a **John** , utilizando o método `pretty()` .
> Resposta:
```shell
people> db.bios.find({ "name.first": "John" }).pretty();
```

> Retorno:
```json
[
  {
    _id: 1,
    name: { first: 'John', last: 'Backus' },
    birth: ISODate("1924-12-03T05:00:00.000Z"),
    death: ISODate("2007-03-17T04:00:00.000Z"),
    contribs: [ 'Fortran', 'ALGOL', 'Backus-Naur Form', 'FP' ],
    awards: [
      {
        award: 'W.W. McDowell Award',
        year: 1967,
        by: 'IEEE Computer Society'
      },
      {
        award: 'National Medal of Science',
        year: 1975,
        by: 'National Science Foundation'
      },
      { award: 'Turing Award', year: 1977, by: 'ACM' },
      {
        award: 'Draper Prize',
        year: 1993,
        by: 'National Academy of Engineering'
      }
    ]
  },
  {
    _id: ObjectId("51df07b094c6acd67e492f41"),
    name: { first: 'John', last: 'McCarthy' },
    birth: ISODate("1927-09-04T04:00:00.000Z"),
    death: ISODate("2011-12-24T05:00:00.000Z"),
    contribs: [ 'Lisp', 'Artificial Intelligence', 'ALGOL' ],
    awards: [
      { award: 'Turing Award', year: 1971, by: 'ACM' },
      { award: 'Kyoto Prize', year: 1988, by: 'Inamori Foundation' },
      {
        award: 'National Medal of Science',
        year: 1990,
        by: 'National Science Foundation'
      }
    ]
  }
]
```

**Exercício 5** : Retorne os 3 primeiros documentos da coleção `bios` utilizando o método `pretty()`.
> Resposta:
```shell
people> db.bios.find().limit(3).pretty();
```
> Retorno:
```json
[
  {
    _id: 1,
    name: { first: 'John', last: 'Backus' },
    birth: ISODate("1924-12-03T05:00:00.000Z"),
    death: ISODate("2007-03-17T04:00:00.000Z"),
    contribs: [ 'Fortran', 'ALGOL', 'Backus-Naur Form', 'FP' ],
    awards: [
      {
        award: 'W.W. McDowell Award',
        year: 1967,
        by: 'IEEE Computer Society'
      },
      {
        award: 'National Medal of Science',
        year: 1975,
        by: 'National Science Foundation'
      },
      { award: 'Turing Award', year: 1977, by: 'ACM' },
      {
        award: 'Draper Prize',
        year: 1993,
        by: 'National Academy of Engineering'
      }
    ]
  },
  {
    _id: ObjectId("51df07b094c6acd67e492f41"),
    name: { first: 'John', last: 'McCarthy' },
    birth: ISODate("1927-09-04T04:00:00.000Z"),
    death: ISODate("2011-12-24T05:00:00.000Z"),
    contribs: [ 'Lisp', 'Artificial Intelligence', 'ALGOL' ],
    awards: [
      { award: 'Turing Award', year: 1971, by: 'ACM' },
      { award: 'Kyoto Prize', year: 1988, by: 'Inamori Foundation' },
      {
        award: 'National Medal of Science',
        year: 1990,
        by: 'National Science Foundation'
      }
    ]
  },
  {
    _id: 3,
    name: { first: 'Grace', last: 'Hopper' },
    title: 'Rear Admiral',
    birth: ISODate("1906-12-09T05:00:00.000Z"),
    death: ISODate("1992-01-01T05:00:00.000Z"),
    contribs: [ 'UNIVAC', 'compiler', 'FLOW-MATIC', 'COBOL' ],
    awards: [
      {
        award: 'Computer Sciences Man of the Year',
        year: 1969,
        by: 'Data Processing Management Association'
      },
      {
        award: 'Distinguished Fellow',
        year: 1973,
        by: ' British Computer Society'
      },
      {
        award: 'W. W. McDowell Award',
        year: 1976,
        by: 'IEEE Computer Society'
      },
      {
        award: 'National Medal of Technology',
        year: 1991,
        by: 'United States'
      }
    ]
  }
]
```

**Exercício 6** : Retorne 2 documentos da coleção `bios` pulando os 5 primeiros documentos.
> Resposta:
```shell
people> db.bios.find().limit(2).skip(5);
```
> Retorno:
```json
[
  {
    _id: 6,
    name: { first: 'Guido', last: 'van Rossum' },
    birth: ISODate("1956-01-31T05:00:00.000Z"),
    contribs: [ 'Python' ],
    awards: [
      {
        award: 'Award for the Advancement of Free Software',
        year: 2001,
        by: 'Free Software Foundation'
      },
      { award: 'NLUUG Award', year: 2003, by: 'NLUUG' }
    ]
  },
  {
    _id: ObjectId("51e062189c6ae665454e301d"),
    name: { first: 'Dennis', last: 'Ritchie' },
    birth: ISODate("1941-09-09T04:00:00.000Z"),
    death: ISODate("2011-10-12T04:00:00.000Z"),
    contribs: [ 'UNIX', 'C' ],
    awards: [
      { award: 'Turing Award', year: 1983, by: 'ACM' },
      {
        award: 'National Medal of Technology',
        year: 1998,
        by: 'United States'
      },
      {
        award: 'Japan Prize',
        year: 2011,
        by: 'The Japan Prize Foundation'
      }
    ]
  }
]
```

Utilizando o [mongoimport](https://docs.mongodb.com/database-tools/mongoimport/#examples) , importe o arquivo [books.json](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/books-48d15e4d8924badc2308cc4a62eb3ea4.json) para a sua instância local do MongoDB e utilize a coleção books para construir as seguintes consultas:

```shell
wget https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/books-48d15e4d8924badc2308cc4a62eb3ea4.json

ubuntu@ubuntu:~/projects/trybe$ mongoimport --db=library --collection=books --file=books-48d15e4d8924badc2308cc4a62eb3ea4.json

```

**Exercício 7** : Retorne a quantidade de documentos da coleção `books` .
> Resposta:
```shell
library> db.books.count();
```

> Retorno:
```json
431
```

**Exercício 8** : Conte quantos livros existem com o `status` = `"PUBLISH"` .
> Resposta:
```shell
library> db.books.count({ status: "PUBLISH" });
```

> Retorno:
```json
363
```

**Exercício 9** : Exiba os atributos `title` , `isbn` e `pageCount` dos 3 primeiros livros. **NÃO** retorne o atributo `_id` .
> Resposta:
```shell
library> db.books.find({}, {title: 1, isbn: 1, pageCount: 1, _id: 0}).limit(3);
```

> Retorno:
```json
[
  { title: 'Unlocking Android', isbn: '1933988673', pageCount: 416 },
  {
    title: 'Android in Action, Second Edition',
    isbn: '1935182722',
    pageCount: 592
  },
  { title: 'Flex 4 in Action', isbn: '1935182420', pageCount: 600 }
]
```

**Exercício 10**: Pule 5 documentos e exiba os atributos `_id` , `title` , `authors` e status dos livros com o `status` = `"MEAP"` , limitando-se a 10 documentos.
> Resposta:
```shell
library> db.books.find({ status: "MEAP"}, { title: 1, authors: 1, status: 1}).limit(10).skip(5);
```
> Retorno:
```json
[
  {
    _id: 550,
    title: 'Big Data',
    status: 'MEAP',
    authors: [ 'Nathan Marz', 'James Warren' ]
  },
  {
    _id: 562,
    title: 'Java Persistence with Hibernate, Second Edition',
    status: 'MEAP',
    authors: [ 'Christian Bauer', 'Gavin King', '', 'Gary Gregory' ]
  },
  {
    _id: 599,
    title: 'Augmented Reality Revealed',
    status: 'MEAP',
    authors: [ 'Robert A. Rice Jr.' ]
  },
  {
    _id: 607,
    title: 'Building Well-Structured JavaScript Applications',
    status: 'MEAP',
    authors: [ 'Julio C. Ody' ]
  },
  {
    _id: 637,
    title: 'Neo4j in Action',
    status: 'MEAP',
    authors: [ 'Jonas Partner', 'Aleksa Vukotic', '', 'Nicki Watt' ]
  },
  {
    _id: 642,
    title: 'Node.js in Practice',
    status: 'MEAP',
    authors: [ 'Alex Young', 'Marc Harter' ]
  },
  {
    _id: 640,
    title: 'Functional Programming in Scala',
    status: 'MEAP',
    authors: [ 'Paul Chiusano', 'Rúnar Bjarnason' ]
  },
  {
    _id: 648,
    title: 'RabbitMQ in Depth',
    status: 'MEAP',
    authors: [ 'Gavin M. Roy' ]
  },
  {
    _id: 649,
    title: 'Akka in Action',
    status: 'MEAP',
    authors: [
      'Raymond Roestenburg',
      'Rob Bakker',
      'Rob Williams',
      'Steven Haines'
    ]
  },
  {
    _id: 657,
    title: 'Grails in Action, Second Edition',
    status: 'MEAP',
    authors: [ 'Glen Smith', 'Peter Ledbrook' ]
  }
]
```