import { goToFeedPage } from "../routes/coordinator"

const { useEffect } = require("react")
const { useHistory } = require("react-router-dom")
const { default: useFetchToken } = require("./useFetchToken")

const useRequireNotLoggedIn = () => {
    const token = useFetchToken()
    const history = useHistory()

    useEffect(() => {
        if(token) {
            goToFeedPage(history)
        }
    }, [token, history])
}

export default useRequireNotLoggedIn