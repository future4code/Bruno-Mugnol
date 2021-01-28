// Database connection
import { connection } from './configurations/connection'


const selectInfoById = async (user_id: string): Promise<any> => {
    console.log(user_id)
    
    try {
        const result = await connection.raw(`
        SELECT user_id, email, role, street, number, neighbourhood, complement, city, state FROM Users
        JOIN Addresses ON address = address_id
        WHERE user_id = "${user_id}"
        ;
        `)
        
        return result[0][0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default selectInfoById
