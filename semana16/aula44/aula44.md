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

# Correção:
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

# Correção:
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
SELECT * FROM Actor WHERE gender = "female";

## b)
SELECT salary FROM Actor WHERE name = "Tony Ramos";

## c)
SELECT * FROM Actor WHERE gender = "invalid";
# O resultado foi uma linha da tabela com NULL em todas as colunas.

## d)
SELECT id, name, salary FROM Actor WHERE salary >= 500000;

## e)
SELECT id, nome from Actor WHERE id = "002";

# "Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'"
# Isso ocorreu pois nossa tabela não tem uma coluna denominada 'nome', mas sim, 'name'.

# Correção:
SELECT id, name from Actor WHERE id = "002";


### Exercício 4
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

## a)
# A query acima retorna todas as colunas de linhas da tabela Actor onde a coluna name começa com A ou J e, além disso, a coluna salary possui valor maior que 300000.

## b)
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

## c)
SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

## d)
SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;


### Exercício 5
## a)
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

# Essa query cria uma tabela cuja linha deve conter todos esses valores e cujo valor do 'title' seja único.

## b)
INSERT INTO Movie
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

## c)
INSERT INTO Movie
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

## d)
INSERT INTO Movie
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

## e)
INSERT INTO Movie
VALUES (
	"004",
	"O Auto da Compadecida",
    "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna.",
    "2000-09-15",
    10
);


### Exercício 6
## a)
SELECT id, title, rating FROM Movie WHERE id = "004";

## b)
SELECT * FROM Movie WHERE title = "Doce de mãe";

## c)
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;


### Exercício 7
## a)
SELECT * FROM Movie WHERE title LIKE "%cida%";

## b)
SELECT * FROM Movie WHERE title LIKE "%casa%" OR synopsis LIKE "%casa%";

## c)
SELECT * FROM Movie WHERE release_date < "2021-01-12";

## d)
SELECT * FROM Movie WHERE
	release_date < "2021-01-12"
    AND (title LIKE "%casa%" OR synopsis LIKE "%casa%")
    AND rating > 7;