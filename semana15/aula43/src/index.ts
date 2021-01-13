import express, { Express, Request, Response } from 'express'
import cors from 'cors'


import allUsers from './users-path'
import userPath from './user-path'

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

// Exercício 4
// a) Nada altera, pois ambos POST e PUT estão >>ALTERANDO<< a variável users.
// b) Sim, porém o método POST é mais semântico. De um ponto de vista técnico, estamos alterando uma variável, portanto PUT deveria ser mais recomendado; porém, por estarmos acrescentando um usuário -efetivamente criando-, o uso de POST é mais apropriado.

app.use('/users', allUsers)
app.use('/user', userPath)


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