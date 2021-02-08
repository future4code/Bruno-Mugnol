import { POST_TYPES } from '../business/entities/types'
import { connection } from './configurations/connection'

export const insertPost = async (
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    author_id: string): Promise<void> => {

        await connection("labook_posts")
         .insert({
            id,
            photo,
            description,
            type,
            author_id
         })
}

export const selectPostById = async (id: string): Promise<any> => {
    const result = await connection("labook_posts")
         .select("*")
         .where({ id })

    return result
}