# Exercício 1
### a)
Uma chave estrangeira é um dado relacionado a outra tabela.

### b)
```sql
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating
VALUES
	("010", "ah, okzinho", 7, "001"),
    ("020", "não assisti mas dei rate", 5.5, "002"),
    ("030", "SUPIMPA DEMAIS", 9.9, "004"),
    ("040", "nossa mudou a minha vida, muito bom", 9, "004")
;

```

### c)
```sql
NSERT INTO Rating VALUES
	("011", "ah, okzinho", 7, "015")
;
```
**Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-bruno-mugnol`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))**

A chave **movie_id** tem a restrição (constraint) de ser uma Foreign Key. Assim, não é possível inserir uma linha filha cujo **movie_id** não exista em sua referência (tabela mãe: Movie).

### d)
```sql
ALTER TABLE Movie
DROP COLUMN rating
;
```
    
### e)
```sql
DELETE FROM Movie
WHERE
	id = "001"
;
```
**Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-bruno-mugnol`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))**

Não podemos deletar uma linha da tabela mãe que está sendo utilizada como FK em uma tabela filha. Precisamos primeiro deletar os filhos.



# Exercício 2
```sql
SELECT * FROM Actor, Movie;

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

### a)
Essa tabela possui apenas 2 colunas. Ela relaciona os atores (actor_id) que elencaram em um filme (movie_id), sendo que utilizamos os IDs das tabelas Actor e Movie como FK para sabermos com qual filme e qual ator estamos lidando.

### b)
```sql
INSERT INTO MovieCast
VALUES
	("001", "001"),
    ("001", "002"),
    ("002", "001"),
    ("004", "002"),
    ("004", "003"),
    ("004", "004"),
    ("001", "005"),
    ("002", "005"),
    ("001", "007"),
    ("002", "007"),
    ("004", "007"),
    ("002", "009")
;
```

### c)
```sql
INSERT INTO MovieCast
VALUES
	("999", "001")
;
```
**Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-bruno-mugnol`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))**

Não podemos adicionar uma linha na tabela filha cujo FK não existe na tabela mãe.

### d)
```sql
DELETE FROM Actor
WHERE
	id = "007"
;
```
**Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-bruno-mugnol`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))**

Não podemos alterar ou remover uma linha da tabela mãe enquanto uma de suas colunas esteja sendo utilizada como FK de outra tabela.



# Exercício 3
### a)
```sql
SELECT * FROM Movie
JOIN Rating ON Movie.id = Rating.movie_id;
```

A query acima relaciona, quando (**ON**) Movie.id e Rating.movie_id são iguais, os filmes às suas respectivas avaliações.

### b)
```sql
SELECT Movie.id, Movie.title, Rating.rate FROM Movie
JOIN Rating ON Movie.id = Rating.movie_id;
```



# Exercício 4
### a)
```sql
SELECT Movie.id, title, rate, comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

### b)
```sql
SELECT movie_id, Movie.title, actor_id FROM MovieCast
LEFT JOIN Movie ON movie_id = Movie.id;
```

### c)
```sql
SELECT Movie.title, AVG(Rating.rate) FROM Movie
LEFT JOIN Rating ON Movie.id = movie_id
GROUP BY Movie.title;
```



# Exercício 5
```sql
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
### a)
Estamos relacionando o ID dos atores aos filmes no primeiro JOIN, então relacionando os ID dos atores aos atores em si. A tabela Movie não contém os elencose a Actor não contém os filmes realizados pelos atores, por isso utilizamos a tabela MovieCast que contém a relação filme-ator.

### b)
```sql
SELECT m.id AS movie_id, m.title, a.id AS actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON mc.actor_id = a.id;
```

### c)
```sql
SELECT m.id AS movie_id, m,title, a.id AS actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
**Error Code: 1054. Unknown column 'm' in 'field list'**

O erro está em **m,title**, pois era pra ser um ponto e não uma vírgula para podermos acessar a coluna title da tabela m Movie.

### d)
```sql
SELECT m.id AS movie_id, m.title, r.rate AS rating, r.comment, a.name FROM Movie m
LEFT JOIN Rating r ON r.movie_id = m.id
LEFT JOIN MovieCast mc ON mc.movie_id = m.id
JOIN Actor a ON a.id = mc.actor_id;
```
