import express, { Express } from "express"
import cors from "cors"
import { userRouter } from "./controller/routes/userRoutes"
import { postRouter } from "./controller/routes/postRoutes"



const app: Express = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRouter)
app.use("/posts", postRouter)


app.listen(3003, () => {
   console.log("Server running on port 3003")
})