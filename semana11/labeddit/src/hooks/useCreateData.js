import axios from "axios"
import { BASE_URL } from "../constants/constants"

const useCreateData = (token) => {
    const create = (urlEnd, body, updateFunction) => {
        axios.post(`${BASE_URL}/${urlEnd}`,
            body,
            { headers: { Authorization: token } })
            .then(() => {
                updateFunction()
            })
            .catch(error => {
                console.log(`Erro na criação no endpoint ${urlEnd}`)
                console.log(error.message)
            })
    }

    return create
}

export default useCreateData