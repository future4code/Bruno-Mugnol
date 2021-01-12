-- Criar tabela
CREATE TABLE Actor(
	id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(255) UNIQUE NOT NULL,
   salary FLOAT DEFAULT 100000.10,
   birth_date DATE NOT NULL,
   gender ENUM('female','male') NOT NULL
);

-- Ver a estrutura de uma tabela
DESCRIBE Actor;

-- Modificar tabela: adicionar, remover e modificar colunas
ALTER TABLE Actor
CHANGE salary salary INT DEFAULT 222333,
DROP COLUMN name,
ADD hometown VARCHAR(255);

-- Apagar tabela
DROP TABLE Actor;

-------------------------------------------------------

-- Inserir valores
INSERT INTO Actor 
	( name, salary, birth_date, gender) 
VALUES 
   ('Tony Ramos', 4000, '1948-08-25', 'male'),
   ('Camila Pitanga', DEFAULT, '1977-06-14', 'female'),
   ('Antônio Fagundes', 230000, '1949-04-10', 'male'),
   ('Fernanda Montenegro', 400000, '1929-10-16', 'female'),
   ('Moacyr Franco', 719333, '2020-02-10', 'female');

-- Alterar valores
UPDATE Actor
SET 
   name = "Antônio F.",
   birth_date = '1970-01-01'
WHERE id = 3;

-- Deletar valores
DELETE FROM Actor
WHERE id = 4;

TRUNCATE TABLE Actor; -- Deleta TODOS os valores da tabela

-- Ler valores
SELECT  
   LOWER(name), UPPER(gender)
FROM Actor
ORDER BY birth_date DESC 
LIMIT 3;

SELECT 
	CONCAT(
		name, 
		' tem ', 
		DATEDIFF(CURRENT_DATE, birth_date) / 365,
		' anos'
	) AS frases
FROM Actor;

SELECT COUNT(*) 
FROM Actor
WHERE birth_date < '1960-01-01';

SELECT SUM(salary) FROM Actor;

SELECT MIN(birth_date) FROM Actor;

SELECT AVG(salary), gender 
FROM Actor
GROUP BY gender;