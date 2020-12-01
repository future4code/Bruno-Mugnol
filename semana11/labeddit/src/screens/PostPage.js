import React from 'react'
import { useHistory } from 'react-router-dom'
import LogoutButton from '../components/LogoutButton'
import useRequireLogin from '../hooks/useRequireLogin'

const PostPage = () => {
    useRequireLogin()
    const history = useHistory()

    return (
        <div>
            <LogoutButton history={history}/>
            PostPage
        </div>
    )
}

export default PostPage