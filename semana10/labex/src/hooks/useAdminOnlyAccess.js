import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useFetchToken from './useFetchToken';

const useAdminOnlyAccess = () => {
    const history = useHistory()
    const token = useFetchToken()

    useEffect(() => {
        if (!token) {
            history.push("/")
        }
    }, [token, history])
}

export default useAdminOnlyAccess