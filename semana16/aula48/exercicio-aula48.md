# Exercício 1

a) FK é uma chave que usa de referência chave de outra tabela.

b)
``` sql
INSERT INTO Rating 
    VALUES (
        "003",
        "filme bom",
        8,
        "002"
    );
```

c) ele me avisa que a FK não existe.

d)
``` sql
ALTER TABLE Movie DROP COLUMN Rating;
```

e) o banco não deixa e me avisa que existe uma FK relacionada ao filme.

# Exercício 2

a) foi criada duas id como FK que são referenciadas ao id dos filmes e outra ao id dos atores.

b)
``` sql
INSERT INTO MovieCast VALUES (
    "002",
    "006"
);
```

c) o banco fala que não consegue add ou atualizar a linha, pois n existe FK relacionada aos que foram passados.

d) o banco não permite pois há algo atrelado ao ator.

# Exercício 3

a) o ON mostra em qual table o banco tem que comparar as informações.

b)
``` sql
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```