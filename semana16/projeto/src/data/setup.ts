import connection from './dbConfig'

// Setup query
const setupTables = async (): Promise<void> => {
    try {
        const result = await connection.raw(`
        CREATE TABLE Users (
            user_id INT PRIMARY KEY AUTO_INCREMENT,
            username VARCHAR(255) NOT NULL,
            nickname VARCHAR(255) NOT NULL UNIQUE,
            email VARCHAR(255) NOT NULL UNIQUE
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
        `)

        console.log("Setup complete. Run script 'populate' to populate the tables with dummy values.")

        connection.destroy()
    } catch (error) {
        console.log(error.sqlMessage || error.message)
        connection.destroy()
    }
}

setupTables()