# Exercício 1
a) apaga a coluna salary.

b) altera a coluna gender para sex com limite de 6 caracteres

c) altera o limite de caracteres para 255

d) 
``` sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

# Exercício 2
a)
``` sql
UPDATE Actor
SET name = "Lázaro Ramos",
birth_date = "1978-11-01"
WHERE id = "003";
```

b)
``` sql
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

c)
``` sql
UPDATE Actor
set name = "Wagner Moura",
salary = 10000000,
birth_date = "1976-06-27",
gender = "male"
WHERE id = "005"
```

d) Não retorna nenhum erro, porem não altera nada.

# Exercício 3
a) (Não tinha a Fernanda)
``` sql
DELETE FROM Actor WHERE name = "Tony Ramos";
```

b)
``` sql
DELETE FROM Actor
    WHERE gender = "male" AND
    salary < 1000000;
```

# Exercício 4
a)
``` sql
SELECT MAX(salary) FROM Actor;
```

b)
``` sql
SELECT Min(salary) FROM Actor WHERE gender = "female";
```

c)
``` sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d)
``` sql
SELECT SUM(salary) FROM Actor;
```

# Exercício 5
a) Agrupa por gênero e conta quantos existem nos grupos existentes.

b)
``` sql
SELECT id, name FROM Actor ORDER BY name DESC;
```

c)
``` sql
SELECT * FROM Actor ORDER BY salary;
```

d)
``` sql
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

e)
``` sql
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

# Exercício 6
a)
``` sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b)
``` sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c)
``` sql
UPDATE Movie
    SET playing_limit_date = "2021-12-28"
    WHERE id = "001";
```
/
``` sql
UPDATE Movie
    SET playing_limit_date = "2016-05-17"
    WHERE id = "002";
```

d)
``` sql
DELETE FROM Movie WHERE id = "003";
```
Retorna mensagem de sucesso porem não altera nada.

# Exercício 7
a)
``` sql
SELECT COUNT(*) FROM Movie WHERE rating < 7.5;
```

b)
``` sql
SELECT AVG(rating) FROM Movie;
```

c)
``` sql
SELECT COUNT(*) FROM Movie;
```

d)
``` sql
SELECT COUNT(*) FROM Movie WHERE release_date > CURRENT_DATE();
```

e)
``` sql
SELECT MAX(rating) FROM Movie;
```

f)
``` sql
SELECT MIN(rating) FROM Movie;
```

# Exercício 8
a)
``` sql
SELECT * FROM Movie ORDER BY title ASC;
```

b)
``` sql
SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
```

c)
``` sql
SELECT * FROM Movie
    WHERE release_date < CURRENT_DATE()
    ORDER BY release_date DESC
    LIMIT 3;
```

d)
``` sql
SELECT * FROM Movie
    ORDER BY rating DESC
    LIMIT 3;
```