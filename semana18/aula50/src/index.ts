// Libraries
import express, { Express } from 'express'
import cors from 'cors'

// Connection
import { AddressInfo } from 'net'

// Endpoints
import createUser from './endpoints/createUser'
import loginUser from './endpoints/loginUser'
import getLoggedUser from './endpoints/getLoggedUser'


const app: Express = express()
app.use(express.json())
app.use(cors())

app.post("/signup", createUser)

app.post("/login", loginUser)

app.get("/user/profile", getLoggedUser)

// Server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost:${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
 })