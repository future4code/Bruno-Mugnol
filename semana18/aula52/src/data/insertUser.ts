// Database connection
import { connection } from './configurations/connection'


// Types
import { User, UserAddress } from '../types/types'
import { AuthData } from '../services/authenticator'

const insertUser = async ({ user_id, email, password, role }: User,
    { address_id, street, number, neighbourhood, complement, city, state }: UserAddress
): Promise<AuthData> => {
    try {
        await connection.raw(`
            INSERT INTO Addresses (address_id, street, number, neighbourhood, complement, city, state)
                VALUES (
                    "${address_id}",
                    "${street}",
                    "${number}",
                    "${neighbourhood}",
                    "${complement}",
                    "${city}",
                    "${state}"
            );

            INSERT INTO Users (user_id, email, password, role, address)
                VALUES (
                    "${user_id}",
                    "${email}",
                    "${password}",
                    "${role}",
                    "${address_id}"
            );
        `)

        return { user_id, role }

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default insertUser
