import express, { Express } from 'express'

import account from './accountRoute'

const app: Express = express()
app.use('/account', account)
app.use('/balance', balance)

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