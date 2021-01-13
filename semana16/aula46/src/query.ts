// Dependencies
import knex from 'knex';
import Knex from 'knex';
import dotenv from 'dotenv';

// Types and enums
import { Actor, Gender } from './validators/types'

// Database configuration
dotenv.config()

const connection: Knex = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})


// Raw Queries
export const getActorByName = async (name: string): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name LIKE "%${name}%";
        `)

        return result[0][0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const getGenderCount = async (gender: Gender): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT COUNT(*) FROM Actor WHERE gender = '${gender}';
        `)
        console.log(result)

        return result[0][0][0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}


// Queries using query builder
export const createActor = async (actorObj: Actor): Promise<void> => {
    try {
        await connection
            .insert(actorObj)
            .into("Actor")

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const updateSalary = async (obj:
    { id: string, salary: number }
): Promise<void> => {

}