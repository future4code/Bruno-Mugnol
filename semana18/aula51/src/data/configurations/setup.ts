// Database connection
import { connection } from './connection'

const setupTable = async (): Promise<void> => {
    try {
        await connection.raw(`
            CREATE TABLE Users (
                id VARCHAR(255) PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role ENUM("normal", "admin") DEFAULT "normal"
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
