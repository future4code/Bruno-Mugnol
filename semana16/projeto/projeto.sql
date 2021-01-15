USE `dumont-bruno-mugnol`;

CREATE TABLE Users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE Tasks (
	task_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    due_date DATE NOT NULL,
    status ENUM("to do", "doing", "done") NOT NULL DEFAULT "to do",
    creator_id INT NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES Users(user_id)
);

CREATE TABLE Assignments (
	task_id INT,
    user_id INT,
    FOREIGN KEY (task_id) REFERENCES Tasks(task_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);


DESCRIBE Users;
DESCRIBE Tasks;
DESCRIBE Assignments;

SELECT * FROM Users;
SELECT * FROM Assignments;
SELECT * FROM Tasks;

SELECT * FROM Tasks t
LEFT JOIN Assignments a ON t.task_id = a.task_id
JOIN Users u ON u.user_id = a.user_id
ORDER BY t.task_id;

INSERT INTO Users (username, nickname, email)
VALUE
	("Bob o Bobo", "bob_o_bobo", "bob@bobo.com"),
	("Billy Boi", "the_vermin", "billy@boi.com"),
    ("Bart Simpson", "El_Barto","bart_simpson@yellow.com"),
    ("Bellatriz Aestranha", "bebella", "bebella@estranha.com"),
    ("Bob Marley", "bob420", "bob_da_paz@marley.com")    
;


INSERT INTO Tasks (title, due_date, status, creator_id, description)
VALUE
	("Terminar queries", "2021-01-18", "doing", 2,
		"Fazer todas as queries dos exercícios 1 a 5. Desafios 6 a 20 são opcionais."),
	("Tocar baixo", "2023-08-08", "to do", 5,
		"É o instrumento, não o volume. Partiu um raggae aí"),
	("Fazer desafios", "2021-01-18", "to do", 1,
		"Tentar fazer alguns dos desafios. Possivelmente ignorar as validações para avançar mais rápido."),
	("Cozinhar arroz", "2021-01-16", "done", 1,
		"Acabou o arroz, tem que cozinhar mais pra ter pro almoço. Se não der tempo, faz um miojo com batata palha"),
	("Beber água", "2100-04-01", "doing", 4,
		"Parece fácil, mas pra ser uma bruxa de verdade tem que beber bastante água. Senão, os fluidos mágicos viram pedra no rim. Recomendo a todos que bebam muita água, 5L ao dia pelo resto de vossas vidas."),
	("Vender urânio", "2022-02-02", "to do", 3,
		"Preciso de alguém que tenha ~contatos~. Meu pai tem acesso a urânio enriquecido e eu quero um skate novo. Faça a conta.")
;

INSERT INTO Assignments (task_id, user_id)
VALUE
	(1, 2), (1, 5),
    (2, 5),
    (3, 2), (3, 5),
    (4, 2),
    (5, 1), (5, 2), (5, 3), (5, 4), (5, 5),
    (6, 3), (6, 4)
;
    

UPDATE Users
SET nickname = "bob_o_bobo"
WHERE userid = 1;