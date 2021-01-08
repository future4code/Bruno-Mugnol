import express, { Express, Request, Response } from 'express'
import cors from 'cors'

import { users } from './data/users'

import account from './routes/accountRoute'
import balance from './routes/balanceRoute'
import userlist from './routes/usersRoute'

const app: Express = express()

app.use('/account', account)
app.use('/balance', balance)
app.use('/users', userlist)


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