## Bloco 24 | MongoDB: Updates Simples e Complexos
# Dia 24.2 | Updates Complexos - Arrays - Parte 1

### Exercícios

**Agora a prática:**
Você continuará utilizando o mesmo dataset de filmes do dia anterior. Se você fez todos os exercícios corretamente, apenas siga para o primeiro exercício de hoje. Caso contrário, conecte-se à sua instância e utilize o trecho de código abaixo para inserir os documentos e ficar na mesma página!
```js
db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure",
    ],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi",
    ],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy",
    ],
    imdbRating: 7.4,
  },
]);
```

### **Para cada execução, utilize o método find() para conferir as alterações nos documentos**

O `MongoDB` possui diversas ferramentas, como, por exemplo, `mongo` , `mongosh` , `Compass` e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as *queries* . O importante é realizá-las.

**Exercício 1:** Adicione a categoria `"superhero"` ao filme `Batman` .

Após a execução do método `.find().pretty()` , o resultado do filme `Batman` será parecido com o dessa imagem:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/complex-updates/part-1/img/ex1-7e3004ecb5f8c8501adc9d426a58ed55.png)
> Resposta:
```js
db.movies.updateOne(
    { title: 'Batman' },
    {
        $push: {
            category: 'superhero'
        },
    }
);
```
> Retorno:
```jsx
  {
    _id: ObjectId("6116c055c926fb9f2f9aee60"),
    title: 'Batman',
    category: [ 'action', 'adventure', 'superhero' ],
    imdbRating: 7.7,
    budget: 35
  },
```

**Exercício 2:** Utilizando o modificador `$each` , adicione as categorias `"villain"` e `"comic-based"` ao filme `Batman` .

Após a execução do método `.find().pretty()` , o resultado do filme `Batman` será parecido com o dessa imagem:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/complex-updates/part-1/img/ex2-367d7c58f03140684a7e3fccd3a3f260.png)
> Resposta:
```jsx
db.movies.updateOne(
    { title: 'Batman' },
    { $push: 
        { category:
            { $each: 
                [
                    'villain', 'comic-based' 
                ],
            },
        },
    },
);
```
> Retorno:
```jsx
  {
    _id: ObjectId("6116c055c926fb9f2f9aee60"),
    title: 'Batman',
    category: [ 'action', 'adventure', 'superhero', 'villain', 'comic-based' ],
    imdbRating: 7.7,
    budget: 35
  },
```

**Exercício 3:** Remova a categoria `"action"` do filme `Batman` .

Após a execução do método `.find().pretty()` , o resultado do filme `Batman` será parecido com o dessa imagem:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/complex-updates/part-1/img/ex3-5c24ed51944b4c91e2a132c3a8faa2a8.png)
> Resposta:
```jsx
db.movies.updateOne(
    { title: 'Batman' },
    { $pop:
        { category: -1 }
    }
);
```
> Retorno:
```jsx
  {
    _id: ObjectId("6116c055c926fb9f2f9aee60"),
    title: 'Batman',
    category: [ 'adventure', 'superhero', 'villain', 'comic-based' ],
    imdbRating: 7.7,
    budget: 35
  },
```

**Exercício 4:** Remova o primeiro elemento do *array* `category` do filme `Batman` .

Após a execução do método `.find().pretty()` , o resultado do filme `Batman` será parecido com o dessa imagem:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/complex-updates/part-1/img/ex4-7aafd55cad948693dc08c9b0429611e4.png)
> Resposta:
```jsx
db.movies.updateOne(
    { title: 'Batman' },
    { $pop:
        { category: -1 }
    }
);
```
> Retorno:
```jsx
  {
    _id: ObjectId("6116c055c926fb9f2f9aee60"),
    title: 'Batman',
    category: [ 'superhero', 'villain', 'comic-based' ],
    imdbRating: 7.7,
    budget: 35
  },
```

**Exercício 5:** Remova o último elemento do *array* `category` do filme `Batman` .

Após a execução do método `.find().pretty()` , o resultado do filme `Batman` será parecido com o dessa imagem:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/complex-updates/part-1/img/ex5-6e31a049e02f746cf904d3f99cd4ac51.png)
> Resposta:
```jsx
db.movies.updateOne(
    { title: 'Batman' },
    { $pop:
        { category: 1 }
    }
);
```
> Retorno:
```jsx
  {
    _id: ObjectId("6116c055c926fb9f2f9aee60"),
    title: 'Batman',
    category: [ 'superhero', 'villain' ],
    imdbRating: 7.7,
    budget: 35
  },
```

**Exercício 6:** Adicione o elemento `"action"` ao *array* `category` do filme `Batman` , garantindo que esse valor não se duplique.

Após a execução do método `.find().pretty()` o resultado do filme `Batman` será parecido com o dessa imagem:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/complex-updates/part-1/img/ex6-dd326ad51dfc81a3e1949e1eea8e0e5b.png)
> Resposta:
```jsx
db.movies.updateOne(
    { title: 'Batman' },
    { $push: 
        {
            category: 'action'
        }
    }
);
```
> Retorno:
```jsx
{
  "_id": "6116c055c926fb9f2f9aee60",
  "title": "Batman",
  "category": [
    "superhero",
    "villain",
    "action"
  ],
  "imdbRating": 7.7,
  "budget": 35
}
```

**Exercício 7:** Adicione a categoria `"90's"` aos filmes `Batman` e `Home Alone` .

Após a execução do método `.find().pretty()` , o resultado do filme `Batman` e do filme `Home Alone` será parecido com o dessa imagem:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/complex-updates/part-1/img/ex7-6428d1ab49893f0902aaac1f66d958e6.png)
> Resposta:
```jsx
db.movies.updateMany(
    { title:
        { $in: ["Batman", "Home Alone"] } 
    },
    {$push:
        { category: "90's" }
    }
);
```

> Retorno:
```jsx
{
  "_id": "6116c055c926fb9f2f9aee62",
  "title": "Home Alone",
  "category": [
    "family",
    "comedy",
    "90's"
  ],
  "imdbRating": 7.4
},
{
  "_id": "6116c055c926fb9f2f9aee60",
  "title": "Batman",
  "category": [
    "superhero",
    "villain",
    "action",
    "90's"
  ],
  "imdbRating": 7.7,
  "budget": 35
}
```

**Exercício 8**: Crie um *array* de documentos chamado `cast` para o filme `Home Alone` com os seguintes dados:

```jsx
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```

Após a execução do método `.find().pretty()`, o resultado do filme `Home Alone` será parecido com o dessa imagem:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/complex-updates/part-1/img/ex8-797fb2b8355f6281f073b416010a1297.png)

**Exercício 9:** Adicione o campo `character` com o valor `Marv` ao *array* de `cast` em que o campo `actor` seja igual a `Daniel Stern` no filme `Home Alone` .

**`Dica`** : Para isso, [leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$` .

Após a execução do método `.find().pretty()` , o resultado do filme `Home Alone` será parecido com o dessa imagem:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/complex-updates/part-1/img/ex9-15710139f183e9f7ca0cda2ddf88bc4c.png)

**Exercício 10:** Crie um *array* de documentos chamado `cast` para o filme `Batman` com os seguintes dados:

```jsx
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
```

Após a execução do método `.find().pretty()`, o resultado do filme `Batman` será parecido com o dessa imagem:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/complex-updates/part-1/img/ex10-a6552c96b33142bf382f72cdb3d3870b.png)

**Exercício 11:** Produza três *querys* para o filme `Batman` :

- Adicione o campo `actor` , que deve ser um array com o valor `Christian Bale` , ao *array* de `cast` em que o campo `character` seja igual a `Batman` ;
- Adicione o campo `actor` , que deve ser um array com o valor `Michael Caine` , ao *array* de `cast` em que o campo `character` seja igual a `Alfred` ;
- Adicione o campo `actor` , que deve ser um array com o valor `Heath Ledger` , ao *array* de `cast` em que o campo `character` seja igual a `Coringa` .

**`Dica`** : Para isso, [leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$` .

Após a execução do método `.find().pretty()` o resultado do filme `Batman` será parecido com o dessa imagem:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/complex-updates/part-1/img/ex11-c9bd0436285db76647e6b52c4ff4459a.png)

**Exercício 12:** Adicione aos atores de `cast` do `character` `Batman` do filme `Batman` os valores `"Michael Keaton"` , `"Val Kilmer"` e `"George Clooney"` , e deixe o array em ordem alfabética.

**`Dica`** : Para isso, [leia aqui](https://docs.mongodb.com/manual/reference/operator/update/positional/) sobre o operador `$` .

Após a execução do método `.find().pretty()` , o resultado do filme `Batman` será parecido com o dessa imagem:
![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/complex-updates/part-1/img/ex12-c9594e600ad73e1ee1a2f9c46f606c52.png)