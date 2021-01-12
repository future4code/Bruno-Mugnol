USE `dumont-bruno-mugnol`;
DESCRIBE Actor;

-- Exercício 2
-- a)
UPDATE Actor
SET
	name = "Moacyr Mentiroso",
	birth_date = "1990-04-01"
WHERE id = "003";

-- b)
UPDATE Actor
SET
	name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET
	name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

-- c)
UPDATE Actor
SET
	name = "Júlio Brioches",
    birth_date = "2002-02-20",
    salary = 1000,
    gender = "male"
WHERE id = "005";

-- d)
UPDATE Actor
SET
	name = "James Trem"
WHERE id = "050";
-- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0



-- Exercício 3
-- a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- b)
DELETE FROM Actor
WHERE
	gender = "male" AND
    salary > 1000000
;
    
    
    
-- Exercício 4
-- a)
SELECT MAX(salary) FROM Actor;

-- b)
SELECT MIN(salary) FROM Actor
WHERE
	gender = "female"
;

-- c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- d)
SELECT SUM(salary) FROM Actor;



-- Exercício 5
-- a)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- b)
SELECT id, name FROM Actor
ORDER BY name DESC;

-- c)
SELECT * FROM Actor
ORDER BY salary ASC;

-- d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- e)
SELECT AVG(salary) AS 'Average salary', gender FROM Actor
GROUP BY gender;



-- Exercício 6
-- a)
ALTER TABLE Movie
ADD playing_limit_date DATE;

-- b)
ALTER TABLE Movie
CHANGE rating rating FLOAT NOT NULL;

-- c)
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

-- d)
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
-- 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0



-- Exercício 7
-- a)
SELECT COUNT(*) FROM Movie
WHERE
	playing_limit_date > CURDATE() AND
    rating > 7.5
;
-- Resposta: 1

-- b)
SELECT AVG(rating) AS "media_avaliacoes" FROM Movie;
-- Resposta: 9

-- c)
SELECT COUNT(*) FROM Movie
WHERE
	playing_limit_date > CURDATE()
;
-- Resposta: 1

-- d)
SELECT COUNT(*) FROM Movie
WHERE
	release_date > CURDATE()
;
-- Resposta: 0

-- e)
SELECT MAX(rating) FROM Movie;
-- Resposta: 10

-- f)
SELECT MIN(rating) FROM Movie;
-- Resposta: 7



-- Exercício 8
-- a)
SELECT * FROM Movie
ORDER BY title ASC;

-- b)
SELECT * FROM Movie
ORDER BY title ASC
LIMIT 5;

-- c)
SELECT * FROM Movie
WHERE
	playing_limit_date > CURDATE()
ORDER BY release_date DESC;

-- d)
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;