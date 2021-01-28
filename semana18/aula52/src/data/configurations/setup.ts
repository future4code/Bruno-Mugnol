// Database connection
import { connection } from './connection'

const setupTable = async (): Promise<void> => {
    try {
        await connection.raw(`
            CREATE TABLE Addresses (
                address_id VARCHAR(255) PRIMARY KEY,
                street VARCHAR(255) NOT NULL,
                number VARCHAR(255) NOT NULL,
                neighbourhood VARCHAR(255) NOT NULL,
                complement VARCHAR(255) DEFAULT "No complement provided",
                city VARCHAR(255) NOT NULL,
                state VARCHAR(255) NOT NULL
            );

            CREATE TABLE Users (
                user_id VARCHAR(255) PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role ENUM("normal", "admin") DEFAULT "normal",
                address VARCHAR(255) NOT NULL,
                FOREIGN KEY (address) REFERENCES Addresses(address_id)
            );
        `)

        console.log("Setup successul!")

    } catch (error) {
        console.log(error.sqlMessage)

    } finally {
        connection.destroy()
    }
}

setupTable()
