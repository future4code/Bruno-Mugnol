// Libraries
import express, { Express } from "express"
import cors from "cors"

// Connection
import { AddressInfo } from "net"

// Endpoints
import getAllUsers from "./endpoints/getAllUsers"
import getNameFiltered from "./endpoints/search/getNameFiltered"
import getTypeFiltered from "./endpoints/search/getTypeFiltered"
import getOrderedUsers from "./endpoints/getOrderedUsers"
import getPaginatedUsers from "./endpoints/getPaginatedUsers"
import getCompleteSelection from "./endpoints/getCompleteSelection"


const app: Express = express()
app.use(express.json())
app.use(cors())


app.get("/", getAllUsers)
app.get("/ordered", getOrderedUsers)
app.get("/paginated", getPaginatedUsers)

app.get("/search", getNameFiltered)
app.get("/search/:type", getTypeFiltered)

app.get("/complete", getCompleteSelection)


// Server
const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo
      console.log(`Server is running in http://localhost:${address.port}`)
   } else {
      console.error(`Failure upon starting server.`)
   }
})