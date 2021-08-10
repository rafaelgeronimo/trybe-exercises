## Bloco 23 | Introdução ao MongoDB
# Dia 23.2 | Filter Operators

### Exercícios

**Exercícios de fixação:**

#### Operadores de Comparação
Para este exercícios, restaurar o banco [deste link](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/exercise-filter-operators-e8e55183a5af1418a8f0d355ad895d13.js).

1. Selecione e faça a contagem dos restaurantes presentes nos bairros **Queens** , **Staten Island** e **Bronx** . (utilizando o atributo `borough` )
> Resposta:
```js
 db.restaurants.count({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } });
```
> Retorno:
```js
20
```

2. Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo **American** . (utilizando o atributo `cuisine` )
> Resposta:
```js
db.restaurants.count({ cuisine: { $ne: "American" } });
```
> Retorno:
```js
40
```

3. Selecione e faça a contagem dos restaurantes que possuem avaliação **maior ou igual** a **8** . (utilizando o atributo `rating` )
> Resposta:
```js
db.restaurants.count({ rating: { $gte: 8 } });
```
> Retorno:
```js
18
```

4. Selecione e faça a contagem dos restaurantes que possuem avaliação **menor** que **4** .
> Resposta:
```js
db.restaurants.count({ rating: { $lt: 4 } });
```
> Retorno:
```js
13
```

5. Selecione e faça a contagem dos restaurantes que não possuem as avaliações **5** , **6** e **7** .
> Resposta:
```js
db.restaurants.count({ rating: { $nin: [5, 6, 7] } });
```
> Retorno:
```js
55
```

#### Operadores Lógicos
1. Selecione e faça a contagem dos restaurantes que não possuem avaliação **menor ou igual** a **5** , essa consulta também deve retornar restaurantes que não possuem o campo avaliação.
> Resposta:
```js
db.restaurants.count({ rating: { $not: { $lte: 5 } } });
```
> Retorno:
```js
38
```

2. Selecione e faça a contagem dos restaurantes em que a avaliação seja **maior ou igual** a **6** , ou restaurantes localizados no bairro **Brooklyn** .
> Resposta:
```js
db.restaurants.count({ $or: [{ rating: { $gte: 6 }, borough: "Brooklyn" }] });
```
> Retorno:
```js
10
```

3. Selecione e faça a contagem dos restaurantes localizados nos bairros **Queens** , **Staten Island** e **Broklyn** e possuem avaliação **maior** que **4** .
> Resposta:
```js
db.restaurants.count( {
  $and: [
    { borough: { $in: ["Queens", "Staten Island", "Broklyn"] } },
    { rating: { $gt: 4 } },
  ], 
} );
```
> Retorno:
```js
8
```

4. Selecione e faça a contagem dos restaurantes onde **nem** o campo avaliação seja igual a **1** , **nem** o campo culinária seja do tipo **American** .
> Resposta:
```js
db.restaurants.count( {
  $nor: [
    { rating: 1 },
    { cuisine: "American" }
  ]
} );
```
> Retorno:
```js
39
```

5. Selecione e faça a contagem dos resturantes em que a avaliação seja **maior** que **6** ou **menor** que **10** , **E** esteja localizado no bairro **Brooklyn** , **OU** não possuem culinária do tipo **Delicatessen** .
> Resposta:
```js
db.restaurants.count( {
  $or: [
    { $or: [ { rating: { $gt: 6, $lt: 10 } } ] },
    { $or: [ { boroug: "Brooklyn" }, { cuisine: { $ne: "Delicatessen" } } ] },
  ],
} );
```
> Retorno:
```js
56
```

#### Métodos `sort()`:
1. Ordene alfabeticamente os restaurantes pelo nome (atributo `name` ).
> Resposta:
```js
db.restaurants.find({}, { name: 1, _id: 0 }).sort({ name: 1 }).pretty();
```
> Retorno:
```js
{ "name" : "1 East 66Th Street Kitchen" }
{ "name" : "Angelika Film Center" }
{ "name" : "B & M Hot Bagel & Grocery" }
{ "name" : "Bagels N Buns" }
{ "name" : "Berkely" }
{ "name" : "Brunos On The Boulevard" }
{ "name" : "Bully'S Deli" }
{ "name" : "C & C Catering Service" }
{ "name" : "Cafe Metro" }
{ "name" : "Carvel Ice Cream" }
{ "name" : "Carvel Ice Cream" }
{ "name" : "Carvel Ice Cream" }
{ "name" : "Carvel Ice Cream" }
{ "name" : "Dj Reynolds Pub And Restaurant" }
{ "name" : "Domino'S Pizza" }
{ "name" : "Domino'S Pizza" }
{ "name" : "Downtown Deli" }
{ "name" : "Dunkin' Donuts" }
{ "name" : "Glorious Food" }
{ "name" : "Golden Pavillion" }
{ "name" : "Happy Garden" }
{ "name" : "Happy Garden" }
{ "name" : "Harriet'S Kitchen" }
{ "name" : "Ho Mei Restaurant" }
{ "name" : "Hot Bagels" }
{ "name" : "Kosher Bagel Hole" }
{ "name" : "Kosher Island" }
{ "name" : "Lexler Deli" }
{ "name" : "Lorenzo & Maria'S" }
{ "name" : "May May Kitchen" }
{ "name" : "Mejlander & Mulgannon" }
{ "name" : "Metropolitan Club" }
{ "name" : "Morris Park Bake Shop" }
{ "name" : "Nordic Delicacies" }
{ "name" : "Olive'S" }
{ "name" : "P & S Deli Grocery" }
{ "name" : "Palm Restaurant" }
{ "name" : "Peter Luger Steakhouse" }
{ "name" : "Philadelhia Grille Express" }
{ "name" : "Plaza Bagels & Deli" }
{ "name" : "Regina Caterers" }
{ "name" : "Riviera Caterer" }
{ "name" : "Sal'S Deli" }
{ "name" : "Seuda Foods" }
{ "name" : "Shashemene Int'L Restaura" }
{ "name" : "Snack Time Grill" }
{ "name" : "Sonny'S Heros" }
{ "name" : "Spoon Bread Catering" }
{ "name" : "Steve Chu'S Deli & Grocery" }
{ "name" : "Taste The Tropics Ice Cream" }
{ "name" : "Terminal Cafe/Yankee Clipper" }
{ "name" : "Texas Rotisserie" }
{ "name" : "The Country Cafe" }
{ "name" : "The Movable Feast" }
{ "name" : "Tony'S Deli" }
{ "name" : "Tov Kosher Kitchen" }
{ "name" : "Wendy'S" }
{ "name" : "White Castle" }
{ "name" : "Wild Asia" }
{ "name" : "Wilken'S Fine Food" }
```
2. Ordene os restaurantes de forma descrescente baseado nas avaliações.
> Resposta:
```js
db.restaurants.find({}, { name: 1, rating: 1, _id: 0 }).sort({ rating: -1 }).pretty();
```
> Retorno:
```js
{ "rating" : 10, "name" : "Wendy'S" }
{ "rating" : 10, "name" : "Wild Asia" }
{ "rating" : 10, "name" : "C & C Catering Service" }
{ "rating" : 10, "name" : "Olive'S" }
{ "rating" : 10, "name" : "Sonny'S Heros" }
{ "rating" : 10, "name" : "Palm Restaurant" }
{ "rating" : 9.9, "name" : "1 East 66Th Street Kitchen" }
{ "rating" : 9.6, "name" : "Brunos On The Boulevard" }
{ "rating" : 9.4, "name" : "Steve Chu'S Deli & Grocery" }
{ "rating" : 9.3, "name" : "Happy Garden" }
{ "rating" : 9, "name" : "The Country Cafe" }
{ "rating" : 9, "name" : "Berkely" }
{ "rating" : 9, "name" : "Plaza Bagels & Deli" }
{ "rating" : 8.7, "name" : "Bully'S Deli" }
{ "rating" : 8.5, "name" : "Terminal Cafe/Yankee Clipper" }
{ "rating" : 8.3, "name" : "Riviera Caterer" }
{ "rating" : 8, "name" : "Dj Reynolds Pub And Restaurant" }
{ "rating" : 8, "name" : "Wilken'S Fine Food" }
{ "rating" : 7.9, "name" : "Shashemene Int'L Restaura" }
{ "rating" : 7.6, "name" : "May May Kitchen" }
{ "rating" : 7.6, "name" : "Domino'S Pizza" }
{ "rating" : 7.4, "name" : "Golden Pavillion" }
{ "rating" : 7.3, "name" : "Bagels N Buns" }
{ "rating" : 7.1, "name" : "Kosher Island" }
{ "rating" : 7, "name" : "P & S Deli Grocery" }
{ "rating" : 7, "name" : "Kosher Bagel Hole" }
{ "rating" : 6.5, "name" : "Glorious Food" }
{ "rating" : 6.5, "name" : "Domino'S Pizza" }
{ "rating" : 6, "name" : "Nordic Delicacies" }
{ "rating" : 5.7, "name" : "Lexler Deli" }
{ "rating" : 5.5, "name" : "Tov Kosher Kitchen" }
{ "rating" : 5.5, "name" : "Downtown Deli" }
{ "rating" : 5.4, "name" : "Dunkin' Donuts" }
{ "rating" : 5, "name" : "Carvel Ice Cream" }
{ "rating" : 5, "name" : "Spoon Bread Catering" }
{ "rating" : 4.7, "name" : "Happy Garden" }
{ "rating" : 4.5, "name" : "Metropolitan Club" }
{ "rating" : 4.3, "name" : "Seuda Foods" }
{ "rating" : 4.1, "name" : "Hot Bagels" }
{ "rating" : 4, "name" : "Morris Park Bake Shop" }
{ "rating" : 4, "name" : "Carvel Ice Cream" }
{ "rating" : 4, "name" : "Angelika Film Center" }
{ "rating" : 3.8, "name" : "Harriet'S Kitchen" }
{ "rating" : 3.6, "name" : "Cafe Metro" }
{ "rating" : 3.6, "name" : "B & M Hot Bagel & Grocery" }
{ "rating" : 3, "name" : "Regina Caterers" }
{ "rating" : 3, "name" : "White Castle" }
{ "rating" : 2.8, "name" : "Tony'S Deli" }
{ "rating" : 2.2, "name" : "Taste The Tropics Ice Cream" }
{ "rating" : 2.1, "name" : "Snack Time Grill" }
{ "rating" : 2, "name" : "Sal'S Deli" }
{ "rating" : 2, "name" : "Ho Mei Restaurant" }
{ "rating" : 1.4, "name" : "Philadelhia Grille Express" }
{ "rating" : 1.2, "name" : "The Movable Feast" }
{ "rating" : 1, "name" : "Peter Luger Steakhouse" }
{ "name" : "Carvel Ice Cream" }
{ "name" : "Mejlander & Mulgannon" }
{ "name" : "Lorenzo & Maria'S" }
{ "name" : "Carvel Ice Cream" }
{ "name" : "Texas Rotisserie" }
```

#### Removendo documentos
1. Remova o primeiro restaurante que possua culinária do tipo **Ice Cream, Gelato, Yogurt, Ices** .
> Resposta:
```js
db.restaurants.deleteOne({ cuisine: "Ice Cream, Gelato, Yogurt, Ices" });
```

2. Remova todos os restaurantes que possuem culinária do tipo **American** .
> Resposta:
```js
db.restaurants.deleteMany({ cuisine: "American" });
```

**Agora a prática:**