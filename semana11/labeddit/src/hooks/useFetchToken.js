const useFetchToken = () => {
    const token = localStorage.getItem('token')
    return token
}

export default useFetchToken