// Database connection
import { connection } from './connection'

// Services
import { generateId } from '../../services/idGenerator'
import { verifyEmail, verifyLength, verifyString } from '../../services/validators'
import { generateHash } from '../../services/hashManager'

const createAdmin = async (): Promise<any> => {
    try {
        const [name, email, password] = process.argv.slice(2) as string[]

        if(!name || !email || !password) {
            throw new Error("Provide arguments: name, email, password")
        }

        verifyString({name, email, password})
        verifyEmail(email)
        verifyLength(password, "Password", 9)

        const id = generateId()
        const encryptedPassword = await generateHash(password)

        await connection.raw(`
            INSERT INTO Users (id, name, email, password, role)
                VALUES (
                    "${id}",
                    "${name}",
                    "${email}",
                    "${encryptedPassword}",
                    "admin"
                )
        `)

    } catch (error) {
        console.log(error.message || error.sqlMessage)

    } finally {
        connection.destroy()
    }
}

createAdmin()
