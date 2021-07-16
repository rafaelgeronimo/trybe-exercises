## Bloco 20 | Introdução à SQL

# Dia 20.1 | Banco de dados SQL

### Exercícios

**Agora a prática:**

**Exercício 1** :Descubra como fazer uma pesquisa em uma tabela sem utilizar uma linha de código usando o **MySQL Workbench**.

| Resposta: Basta clicar com botão direito na tabela e clicar em "select rows - limit 200" O limite vai depender da configuração do workbench .

**Exercício 2** : Descubra como é possível criar uma tabela sem usar código **SQL** usando o **MySQL Workbench**.

| Resposta: Basta clicar em create table usando o botão direito.

**Exercício 3** : Feito isso, crie uma tabela com as seguintes restrições:
- Nome da tabela: `filme`
- Colunas:
  - **FilmeId** - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
  - **Descricao** - não permite nulos, tipo texto (varchar(100));
  - **AnoLancamento** - não permite nulos, tipo int;
  - **Nota** - permite nulos, tipo int;

| Resposta:
```sql
USE sakila;

CREATE TABLE Filme(
	FilmeId INT AUTO_INCREMENT PRIMARY KEY,
    Descricao VARCHAR(100) NOT NULL,
    AnoLancamento INT NOT NULL,
    Nota INT NOT NULL
);
```

**Exercício 4** - Analise a tabela `city` e encontre a tabela à qual a coluna `country_id` faz referência.

| Resposta: a coluna `country_id` se referencia à tabela `country`

**Exercício 5** - Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela `city` faz com a tabela `country`?

| Resposta: tipo 1:N (um para muitos)

**Exercício 6** - Qual tipo de relacionamento a tabela `country` faz com a tabela `city`?

| Resposta: N:1 (muitos para um)

**Exercício 7** - Abra tabela por tabela do banco `sakila` e encontre no mínimo 3 exemplos de um relacionamento 1:N ou N:1.

| Resposta:
```
store -> staff
language -> film
film -> language
```