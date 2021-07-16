## Bloco 20 | Introdução à SQL

# Dia 20.1 | Banco de dados SQL

### Exercícios

**Agora a prática:**

**Exercício 1** :Descubra como fazer uma pesquisa em uma tabela sem utilizar uma linha de código usando o **MySQL Workbench**.

**Exercício 2** : Descubra como é possível criar uma tabela sem usar código **SQL** usando o **MySQL Workbench**.

**Exercício 3** : Feito isso, crie uma tabela com as seguintes restrições:
- Nome da tabela: `filme`
- Colunas:
  - **FilmeId** - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
  - **Descricao** - não permite nulos, tipo texto (varchar(100));
  - **AnoLancamento** - não permite nulos, tipo int;
  - **Nota** - permite nulos, tipo int;

**Exercício 4** - Analise a tabela `city` e encontre a tabela à qual a coluna `country_id` faz referência.

**Exercício 5** - Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela `city` faz com a tabela `country`?

**Exercício 6** - Qual tipo de relacionamento a tabela `country` faz com a tabela `city`?

**Exercício 7** - Abra tabela por tabela do banco `sakila` e encontre no mínimo 3 exemplos de um relacionamento 1:N ou N:1.