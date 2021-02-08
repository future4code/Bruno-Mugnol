import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { User } from "../business/entities/types";
import { generateToken } from "../business/services/authenticator"
import { hash } from "../business/services/hashManager"
import { generateId } from "../business/services/idGenerator"
import { insertUser, selectUserByEmail } from "../data/userDatabase"


export const signup = async (req: Request, res: Response) => {
   try {
      let message = "Success!"
      const { name, email, password } = req.body

      if (!name || !email || !password) {
         res.statusCode = 406
         message = '"name", "email" and "password" must be provided'
         throw new Error(message)
      }

      const id: string = generateId()

      const cypherPassword = await hash(password);

      await insertUser({
         id,
         name,
         email,
         password: cypherPassword
      })

      const token: string = generateToken({ id })

      res.status(201).send({ message, token })

   } catch (error) {
      res.statusCode = 400
      let message = error.sqlMessage || error.message

      res.send({ message })
   }
}


export const login = async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 406
         message = '"email" and "password" must be provided'
         throw new Error(message)
      }

      const queryResult: any = await selectUserByEmail(email)

      if (!queryResult) {
         res.statusCode = 401
         message = "Invalid credentials"
         throw new Error(message)
      }

      const user: User = {
         id: queryResult.id,
         name: queryResult.name,
         email: queryResult.email,
         password: queryResult.password
      }

      const passwordIsCorrect: boolean = await compare(password, user.password)

      if (!passwordIsCorrect) {
         res.statusCode = 401
         message = "Invalid credentials"
         throw new Error(message)
      }

      const token: string = generateToken({
         id: user.id
      })

      res.status(200).send({ message, token })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
}