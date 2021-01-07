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
    let errorMessage: string = ""

    const validQueries = ['name', 'capital', 'continent']

    try {
        const usedQuery: string[] = Object.keys(req.query)

        const isValidQuery = (queries: string[]): boolean => {
            for (let query of queries) {
                if (!validQueries.includes(query)) {
                    errorMessage = "Invalid query parameters."
                    return false
                }
            }

            return true
        }

        if (!usedQuery.length || !isValidQuery(usedQuery)) {
            errorCode = 422
            throw new Error(errorMessage || "Invalid queries.")
        }

        let result: country[] = countries

        for (let searchParam in req.query) {
            const reqQuery: string = req.query[searchParam] as string

            result = result.filter((aCountry: any) => {
                return aCountry[searchParam].toLowerCase().includes(reqQuery.toLowerCase())
            })
        }

        if (!result.length) {
            errorCode = 404
            throw new Error("Country not found.")
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.put('/countries/edit/:id', (req: Request, res: Response) => {
    let errorCode: number = 400
    let errorMessage: string = ""

    const editId: number = Number(req.params.id)

    type bodyType = {
        name: string,
        capital: string
    }

    const validBody: string[] = ['name', 'capital']

    try {
        if (isNaN(editId)) {
            errorCode = 422
            errorMessage = "Invalid ID."
            throw new Error(errorMessage)
        }

        const isValidBody = (body: bodyType): boolean => {
            for (let key in req.body) {
                if (!validBody.includes(key)) {
                    errorCode = 422
                    errorMessage = "Invalid body key."
                    return false
                }

                if (!req.body[key]) {
                    errorCode = 401
                    errorMessage = "Found an empty required field."
                    return false
                }
            }

            return true
        }

        if (!isValidBody(req.body)) {
            throw new Error(errorMessage)
        }

        const countryIndex: number = countries.findIndex((country) => {
            return country.id === editId
        })

        if (countryIndex === -1) {
            errorCode = 404
            errorMessage = "Country ID not found."
            throw new Error(errorMessage)
        }

        countries[countryIndex] = {
            ...countries[countryIndex],
            name: req.body.name,
            capital: req.body.capital
        }

        res.status(200).send("Country edited sucessfully.")

    } catch (error) {
        res.status(errorCode).send(errorMessage)
    }
})

app.get('/countries/:id', (req: Request, res: Response) => {
    let errorCode: number = 400
    const searchedId: number = Number(req.params.id)

    try {
        if (isNaN(searchedId)) {
            errorCode = 422
            throw new Error("Invalid ID.")
        }

        const searchedCountry: country | undefined = countries.find((country: country): boolean => {
            return country.id === searchedId
        })

        if (!searchedCountry) {
            errorCode = 404
            throw new Error("Country not found.")
        }

        res.status(200).send(searchedCountry)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})