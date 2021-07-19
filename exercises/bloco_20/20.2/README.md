## Bloco 20 | Introdução à SQL

# Dia 20.2 | Encontrando dados em um banco de dados

### Exercícios

**Agora a prática:**

**Exercício 1** : Faça as tarefas de 1 a 15.
| Para realizar os exercícios do 1 ao 15, restaure o banco de dados seguinte:

```sql
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientists INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientists, Projects),
  FOREIGN KEY (Scientists) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

| Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).

1. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution"
| Resposta:
```sql
USE Scientists;

SELECT "This is SQL Exercise, Practice and Solution";
```

2. Escreva uma query para exibir três números em três colunas.
| Resposta:
```sql
SELECT 1, 2, 3;
```

3. Escreva uma query para exibir a soma dos números 10 e 15.
| Resposta:
```sql
SELECT 10 + 15;
```

4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
| Resposta:
```sql
SELECT 10 * (80 / 2);

# 400
```

5. Escreva uma query para exibir todas as informações de todos os cientistas.
| Resposta:
```sql
SELECT * FROM Scientists.Scientists;
```

6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
| Resposta:
```sql
SELECT
  Name AS "Nome do Projeto",
  Hours AS "Tempo de Trabalho"
FROM Scientists.Projects;
```

7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
| Resposta:
```sql
SELECT Name FROM Scientists.Scientists
ORDER BY Name ASC;
```

8. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
| Resposta:
```sql
SELECT Name FROM Scientists.Projects
ORDER BY Name DESC;
```

9. Escreva uma query que exiba a string "O projeto `Name` precisou de `Hours` horas para ser concluído." para cada projeto.
| Resposta:
```sql
SELECT CONCAT("O projeto ", Name, " precisou de ", Hours, " horas para ser concluído.") AS Resultado
FROM Scientists.Projects;
```

10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
11. Escreva uma query para exibir o código de todos os projetos da tabela `AssignedTo` sem que hajam repetições.
12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
15. Escreva uma query que exiba a string "Existem `Number` cientistas na tabela Scientists.", em que `Number` se refira a quantidade de cientistas.
