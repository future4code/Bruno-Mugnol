import { useEffect, useState } from "react"

const { default: axios } = require("axios")
const { BASE_URL } = require("../constants/constants")

const useRequestData = (urlEnd, token) => {
    const [data, setData] = useState({})

    const getData = () => {
        axios.get(`${BASE_URL}${urlEnd}`, { headers: { Authorization: token } })
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(`Erro na requisição em ${urlEnd}`)
                console.log(error.message)
            })
    }

    useEffect(() => {
        getData()
    }, [])
    
    return [data, getData]
}

export default useRequestData