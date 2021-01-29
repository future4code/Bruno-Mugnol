// Database connection
import { connection } from './connection'

const setupTables = async (): Promise<void> => {
    try {
        await connection.raw(`
            CREATE TABLE Users (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role ENUM("normal", "admin") DEFAULT "normal"
            );
            
            
            CREATE TABLE Recipes (
                id VARCHAR(255) PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                created_at INT NOT NULL,
                creator_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (creator_id) REFERENCES Users (id)
            );
            
            
            CREATE TABLE Followage (
                follower_id VARCHAR(255) NOT NULL,
                followee_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (follower_id) REFERENCES Users (id),
                FOREIGN KEY (followee_id) REFERENCES Users (id)
            );
        `)

        console.log("Setup was successful. Run script 'setup:admin' with arguments name, email and password to create an administrator.")

    } catch (error) {
        console.log(error.sqlMessage)

    } finally {
        connection.destroy()
    }
}

setupTables()
