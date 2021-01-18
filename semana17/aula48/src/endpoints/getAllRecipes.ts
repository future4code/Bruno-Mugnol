import { recipe } from "../types/recipe";
import { Request, Response } from "express";
import { connection } from "../data/config";


export const getAllRecipes = async (req: Request, res: Response): Promise<void> => {
    try {
        const recipes: recipe[] = await connection.raw(`
          SELECT title, name AS "author", description
          FROM recipes_aula48
          JOIN users_aula48 
          ON user_id = users_aula48.id;
       `)

        if (!recipes.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(recipes)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}