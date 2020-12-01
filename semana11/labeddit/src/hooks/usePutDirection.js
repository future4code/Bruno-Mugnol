const { default: axios } = require("axios")
const { BASE_URL } = require("../constants/constants")

const usePutDirection = (postId, token) => {
    const vote = (direction, updateFunction) => {
        axios.put(`${BASE_URL}/posts/${postId}/vote`,
            { direction: direction },
            { headers: { Authorization: token } })
            .then(response => {
                console.log(response.data)
                updateFunction()
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return vote
}

export default usePutDirection