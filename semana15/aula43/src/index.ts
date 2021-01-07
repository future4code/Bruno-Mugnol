import express, { Express, Request, Response } from 'express'
import cors from 'cors'


import allUsers from './users-path'

const app: Express = express()
app.use(express.json())
app.use(cors())

// Exercício 1
// a) GET
// b) users

// Exercício 2
// a) Utilizei QueryParams, pois em caso de buscas é mais recomendado que PathParams
// b) Sim. Ver arquivo users-path.ts

// Exercício 3
// a) Query
// b) Dito e feito.


app.use('/users', allUsers)



// Server
import { AddressInfo } from 'net'

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`)
    }
})