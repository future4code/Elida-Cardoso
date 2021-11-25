# Exercício 1
a) 
* VARCHAR: serve para qualquer caracteres de até 255;
* PRIMARY KEY como id única;
* NOT NULL para mostar que é um parametro necessário;
* DATE para data.

b) 
* SHOW DATABASES: mostra as informações do meu banco de dados;
* SHOW TABLES: mostra minhas tables criadas.

c) mostra os detalhes da table.

# Exercício 2
a) 
``` sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "002", 
    "Glória Pires",
    1200000,
    "1963-08-23", 
    "female"
);
```

b) Entrada duplicada "002" na key "PRIMARY". Tentou criar uma primary key com valor que já existe.

c) Coluna não bate com os valores que foram passados no insert. Falta alguns parametros para que passe corretamente em todos os values da table.

d) Campo 'name' nao tem nenhum valor. O nome é um campo obrigatório

e) Value incorreto, falta por "" no valor do date.

# Exercício 3
a)
``` sql
SELECT * FROM Actor;
```

b) 
``` sql
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

c)
``` sql
SELECT * from Actor WHERE gender = "invalid";
```
voltou vazio pois todos os dados tem o gender com male ou female;

d) 
``` sql
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```

e) Coluna 'nome' desconhecida. correção:
``` sql
SELECT id, name from Actor WHERE id = "002"
```

# Exercício 4
a) Busca os atores que comecem com A ou J no nome e depois filtra os que recebem mais de 300.000

b) 
``` sql
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```
c) 
``` sql
SELECT * FROM Actor WHERE name LIKE "%g%";
```

# Exercício 5
a) bem similar ao VARCHAR mas com menos limitações de caracteres.

# Exercício 6
a) 
``` sql
SELECT id, title, rating from Movie WHERE id ="003";
```
b) 
``` sql
SELECT * FROM Movie WHERE title = "Dona Flor e Seus Dois Maridos";
```
c) 
``` sql
SELECT id, title, synopsis FROM Movie WHERE rating <= 7;
```
# Exercício 7
a) 
``` sql
SELECT * FROM Movie WHERE title LIKE "%vida%";
```
b) 
``` sql
SELECT * FROM Movie WHERE title LIKE "%termo de busca%" OR synopsis LIKE "%termo de busca";
```
c) 
``` sql
SELECT * FROM Movie WHERE release_date < "2021-11-22";
```
d) 
``` sql
SELECT * FROM Movie WHERE release_date < "2021-11-22" AND (title LIKE "%termo de busca%" OR synopsis LIKE "%termo de busca") AND rating <= 7;
```
