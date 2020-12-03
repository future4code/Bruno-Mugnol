import { goToFeedPage } from "../routes/coordinator"

const { useEffect } = require("react")
const { useHistory } = require("react-router-dom")
const { default: useFetchToken } = require("./useFetchToken")

const useRequireNotLoggedIn = (logged, setLogged) => {
    const token = useFetchToken()
    const history = useHistory()
    
    useEffect(() => {
        if (token && logged) {
            goToFeedPage(history)
        } else {
            localStorage.removeItem("token")
            setLogged(false)
        }
    }, [token, history, logged])
}

export default useRequireNotLoggedIn