// Dependencies
import express, { Express } from "express"

// Connection setup
import { AddressInfo } from "net";

// Routes
import actor from './routes/actor'

const app: Express = express()

app.use("/actor", actor)

// Server configuration
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})