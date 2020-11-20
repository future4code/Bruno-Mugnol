import { useEffect } from 'react';

const useFetchToken = () => {
        const token = localStorage.getItem("token")
        if (token) {
            return token
        } else {
            return null
        }
}

export default useFetchToken