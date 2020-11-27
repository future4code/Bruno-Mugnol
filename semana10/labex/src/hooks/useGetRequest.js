import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../constants/constants';

const useGetRequest = (endUrl, authorization) => {
    const [data, setData] = useState({})

    useEffect(() => {
        if (!authorization) {
        axios.get(`${baseUrl}${endUrl}`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log("Erro na requisição GET na URL", endUrl)
                console.log(error.message)
                console.log(`${baseUrl}${endUrl}`)
            })
        } else {
            axios.get(`${baseUrl}${endUrl}`, {
                headers: {
                    auth: authorization
                }
            })
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log("Erro na requisição GET na URL", endUrl)
                console.log(error.message)
                console.log(`${baseUrl}${endUrl}`)
            })
        }
    }, [])

    return data
}

export default useGetRequest