import connection from './dbConfig'

// Types
import { editData, newTask, newUser } from '../types'

// Queries
export const createUser = async (newUser: newUser): Promise<void> => {
    try {
        await connection.raw(`
        INSERT INTO Users (username, nickname, email)
        VALUE (
            '${newUser.username}',
            '${newUser.nickname}',
            '${newUser.email}'
        );
        `)

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const getUserById = async (userId: number): Promise<any> => {
    try {
        const result = await connection.raw(`
        SELECT user_id, nickname FROM Users
        WHERE user_id = ${userId};
        `)

        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const editUser = async (userId: number, editData: editData): Promise<void> => {
    try {
        await connection.raw(`
        UPDATE Users
        SET
            username = '${editData.username}',
            nickname = '${editData.nickname}'
        WHERE user_id = ${userId};
        `)

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const createTask = async (newTask: newTask): Promise<void> => {
    try {
        await connection.raw(`
        INSERT INTO Tasks (title, due_date, creator_id, description)
        VALUE
            (
            '${newTask.title}',
            '${newTask.dueDate}',
            ${newTask.creatorId},
            '${newTask.description}'
            );
        `)

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const getTaskById = async (taskId: number): Promise<any> => {
    try{
        const result = await connection.raw(`
        SELECT 
            t.task_id as taskId,
            t.title as title,
            t.description as description,
            t.due_date as dueDate,
            t.status as status,
            t.creator_id as creatorId,
            u.nickname as creatorNickname
        FROM Tasks t
        JOIN Users u ON u.user_id = t.creator_id
        WHERE t.task_id = ${taskId};
        
        `)

        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }

}