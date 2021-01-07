// Dependencies
import express, { Express, Request, Response } from 'express'
import cors from 'cors'

// Other files
import { countries, country } from './countries'

type basicCountry = {
    id: number,
    name: string
}

const app: Express = express()

app.use(express.json())
app.use(cors())

console.log("------------------------------------ \n")

app.get('/countries/all', (req: Request, res: Response) => {
    const basicCountryArray: basicCountry[] = countries.map((country: country): basicCountry => {
        const basicCountry: basicCountry = {
            id: country.id,
            name: country.name
        }
        return basicCountry
    })

    res.status(200).send({ countries: basicCountryArray })
})


app.get('/countries/search', (req: Request, res: Response) => {
    let errorCode: number = 400

    const validQueries = ['name', 'capital', 'continent']

    try {
        const usedQuery: string[] = Object.keys(req.query)

        const isValidQuery = (queries: string[]): boolean => {
            for (let query of queries) {
                if (!validQueries.includes(query)) {
                    return false
                }
            }

            return true
        }

        if (!usedQuery.length || !isValidQuery(usedQuery)) {
            errorCode = 422
            throw new Error()
        }

        let result: country[] = countries

        for (let searchParam in req.query) {
            result = result.filter((aCountry: any) => {
                return aCountry[searchParam].includes(req.query[searchParam])
            })
        }
        
        if (!result.length) {
            errorCode = 404
            throw new Error()
        }

        res.status(200).send(result)
    }
    catch (error) {
        console.log(error)
        res.status(errorCode).end()
    }
})

app.get('/countries/:id', (req: Request, res: Response) => {
    let errorCode: number = 400
    const searchedId: number = Number(req.params.id)

    try {
        if (isNaN(searchedId)) {
            errorCode = 422
            throw new Error()
        }

        const searchedCountry: country | undefined = countries.find((country: country): boolean => {
            return country.id === searchedId
        })

        if (!searchedCountry) {
            errorCode = 404
            throw new Error()
        }

        res.status(200).send(searchedCountry)

    }
    catch (error) {
        console.log(error)
        res.status(errorCode).end()
    }

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})