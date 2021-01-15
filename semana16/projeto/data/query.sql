USE `dumont-bruno-mugnol`;

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

-- Endpoint 1
INSERT INTO Users (username, nickname, email)
VALUE ("Bob o Bobo", "bob_o_bobo", "bob@bobo.com");


-- Endpoint 2
SELECT user_id, nickname FROM Users
WHERE user_id = 1;


-- Endpoint 3
UPDATE Users
SET
	name = "Bob el Bobo",
    nickname = "bob_el_bobo"
WHERE user_id = 1;


-- Endpoint 4
INSERT INTO Tasks (title, due_date, status, creator_id, description)
VALUE
	("Title", "date", "status", "creator_id",
		"Description.");
        
        
-- Endpoint 5
SELECT 
	t.task_id, t.title, t.description, t.due_date, t.status, t.creator_id,
    u.nickname
FROM Tasks t
JOIN Users u ON u.user_id = t.creator_id
WHERE t.task_id = 3;