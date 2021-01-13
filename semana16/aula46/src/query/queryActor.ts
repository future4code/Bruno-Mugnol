// Dependencies
import knex from 'knex';
import Knex from 'knex';
import dotenv from 'dotenv';

// Types and enums
import { Actor, Gender } from '../validators/types'

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
export const getActorById = async (id: string): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE id = "${id}";
        `)

        return result[0][0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

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
            SELECT COUNT(*) as gender_count FROM Actor WHERE gender = '${gender}';
        `)

        return result[0][0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}


// Queries using query builder
export const createActor = async (actorObj: Actor): Promise<void> => {
    try {
        await connection
            .insert({
                ...actorObj,
                birth_date: actorObj.birth_date
            })
            .into("Actor")

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const updateSalary = async (actor: { id: string, salary: number }): Promise<void> => {
    try {
        await connection("Actor")
            .update({ salary: actor.salary })
            .where("id", actor.id)

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const deleteActor = async (actor: { id: string }): Promise<void> => {
    try {
        await connection("Actor")
            .delete()
            .where("id", actor.id)

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const avgSalaryByGender = async (gender: Gender): Promise<any> => {
    try {
        const result = await connection("Actor")
            .avg("salary as average_salary")
            .where({ gender })

        return result[0].average_salary

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}