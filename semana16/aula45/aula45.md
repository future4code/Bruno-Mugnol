USE `dumont-bruno-mugnol`;
DESCRIBE Actor;

# Exercício 1
### a)
Remove a coluna 'salary' da tabela inteira.

### b)
Altera o nome da coluna 'gender' para 'sex'.

### c)
Altera o tipo da coluna 'gender' de 'VARCHAR(6)' para 'VARCHAR(255)'

### d)
```sql
ALTER TABLE Acout CHANGE gender gender VARCHAR(255);
```

# Exercício 2
### a)
```sql
UPDATE Actor
SET
	name = "Moacyr Mentiroso",
	birth_date = "1990-04-01"
WHERE id = "003";
```

### b)
```sql
UPDATE Actor
SET
	name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET
	name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

### c)
```sql
UPDATE Actor
SET
	name = "Júlio Brioches",
    birth_date = "2002-02-20",
    salary = 1000,
    gender = "male"
WHERE id = "005";
```

### d)
```sql
UPDATE Actor
SET
	name = "James Trem"
WHERE id = "050";
```
 **0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0** 

O comando foi rodado, porém nenhuma linha foi encontrada e nenhum dado foi alterado.



# Exercício 3
### a)
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

### b)
```sql
DELETE FROM Actor
WHERE
	gender = "male" AND
    salary > 1000000
;
```
    
    
    
# Exercício 4
### a)
```sql
SELECT MAX(salary) FROM Actor;
```

### b)
```sql
SELECT MIN(salary) FROM Actor
WHERE
	gender = "female"
;
```

### c)
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

### d)
```sql
SELECT SUM(salary) FROM Actor;
```



# Exercício 5
### a)
```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
Conta a quantidade de linhas da tabela, separando a quantidade de linhas por gênero: uma quantidade para 'male' e uma para 'female'.


### b)
```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

### c)
```sql
SELECT * FROM Actor
ORDER BY salary ASC;
```

### d)
```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

### e)
```sql
SELECT AVG(salary) AS 'Average salary', gender FROM Actor
GROUP BY gender;
```



# Exercício 6
### a)
```sql
ALTER TABLE Movie
ADD playing_limit_date DATE;
```

### b)
```sql
ALTER TABLE Movie
CHANGE rating rating FLOAT NOT NULL;
```

### c)
```sql
UPDATE Movie
SET
	playing_limit_date = "2021-04-01"
WHERE
	id = "004"
;

UPDATE Movie
SET
	playing_limit_date = "2018-01-18"
WHERE
	id = "003"
;
```

### d)
```sql
DELETE FROM Movie
WHERE
	id = "003"
;

UPDATE Movie
SET
	synopsis = "Filme deletado"
WHERE
	id = "003"
;
```
**0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0**

O comando foi rodado, porém nenhuma linha foi encontrada e nenhum dado foi alterado.


# Exercício 7
### a)
```sql
SELECT COUNT(*) FROM Movie
WHERE
	playing_limit_date > CURDATE() AND
    rating > 7.5
;
```
-- Resposta: 1

### b)
```sql
SELECT AVG(rating) AS "media_avaliacoes" FROM Movie;
```
-- Resposta: 9

### c)
```sql
SELECT COUNT(*) FROM Movie
WHERE
	playing_limit_date > CURDATE()
;
```
-- Resposta: 1

### d)
```sql
SELECT COUNT(*) FROM Movie
WHERE
	release_date > CURDATE()
;
```
-- Resposta: 0

### e)
```sql
SELECT MAX(rating) FROM Movie;
```
-- Resposta: 10

### f)
```sql
SELECT MIN(rating) FROM Movie;
```
-- Resposta: 7



# Exercício 8
### a)
```sql
SELECT * FROM Movie
ORDER BY title ASC;
```

### b)
```sql
SELECT * FROM Movie
ORDER BY title ASC
LIMIT 5;
```

### c)
```sql
SELECT * FROM Movie
WHERE
	playing_limit_date > CURDATE()
ORDER BY release_date DESC;
```

### d)
```sql
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;
```