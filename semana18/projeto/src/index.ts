// Libraries
import express, { Express } from 'express'
import cors from 'cors'

// Connection
import { AddressInfo } from 'net'

// Endpoints
import createUser from './endpoints/signup/createUser'
import loginUser from './endpoints/login/loginUser'


const app: Express = express()
app.use(express.json())
app.use(cors())

app.post("/signup", createUser)

app.post("/login", loginUser)


// Server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost:${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
 })