// Libraries
import axios from 'axios'

// Types
import { AddressByCEP } from '../types/types'

const URL = "https://viacep.com.br/ws"

export const getAdressByCEP = async (cep: string): Promise<AddressByCEP> => {
    try {
        const result = await axios.get(`${URL}/${cep}/json`)

        const address: AddressByCEP = {
            street: result.data.logradouro,
            neighbourhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }

        return address

    } catch (error) {
        throw new Error(error.message)
    }
}