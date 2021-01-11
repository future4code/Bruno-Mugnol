USE `dumont-bruno-mugnol`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);

### Exercício 1
## a)
# VARCHAR(n) é uma string com tamanho até 255 caracteres. DATE é uma data no formato YYYY-MM-DD.

## b)
SHOW DATABASES;
# Mostra os bancos de dados conectados ao Workspace.
SHOW TABLES;
# Mostra as tabelas dos bancos de dados conectados ao Workspace.

## c)
DESCRIBE Actor;
# Mostra a estrutura da tabela, quais as chaves/colunas, valores, tipo de valores e se podem assumir o valor nulo.


### Exercício 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"001",
    "Tony Ramos",
    400000,
    "1948-08-25",
    "male"
);

## a)
INSERT INTO Actor
VALUES (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);

## b)
INSERT INTO Actor
VALUES (
	"002",
    "Glória Ramires",
    1200000,
    "1963-08-22",
    "female"
);

# "Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'"
# O erro acontece pois a Primary Key deve ser única e já existe uma com esse valor (o id é o nosso PK).

## c)
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

# "Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1"
# Nem todas colunas foram explicitadas, devemos adicionar todas as colunas que receberão um valor. Podemos até inverter a ordem dos valores a serem inseridos, se invertermos também as chaves explicitadas.

#Correção:
INSERT INTO Actor (id, name, salary, gender, birth_date)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "female",
  "1929-10-19"
);

## d)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

# "Código de erro: 1364. O campo 'name' não tem um valor padrão"
# Como nome é NOT NULL seu valor padrão é NULL, não podemos omitir o campo **name** ao inserir um dado à tabela Actor.

#Correção:
INSERT INTO Actor (id, salary, birth_date, gender, name)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male",
  "Toninho Galho"
);

## e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

# "Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1"
# O valor de data deve ser do tipo DATE, ou seja, uma **string** no formato YYYY-MM-DD.

# Correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

## f)
INSERT INTO Actor
VALUES(
  "006", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor
VALUES(
	"007",
    "Janaína Bond",
    "700007",
    "1977-07-07",
    "female"
);


### Exercício 3
SELECT * FROM Actor;
SELECT id, salary FROM Actor;
SELECT id, name FROM Actor WHERE gender = "male";

## a)
SELECT * FROM Actor