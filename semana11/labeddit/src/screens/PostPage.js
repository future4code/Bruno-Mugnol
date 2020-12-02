import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import LogoutButton from '../components/LogoutButton'
import useFetchToken from '../hooks/useFetchToken'
import useRequestData from '../hooks/useRequestData'
import useRequireLogin from '../hooks/useRequireLogin'
import { goToFeedPage } from '../routes/coordinator'

const PostPage = () => {
    useRequireLogin()
    const token = useFetchToken()
    const history = useHistory()
    const postId = useParams().postId
    const [{ post }, getPostDetails] = useRequestData(`posts/${postId}`, token)

    return (
        <div>
            <button onClick={() => { goToFeedPage(history) }}>Voltar</button>
            <LogoutButton history={history} />
            {console.log(post)}
            {post &&
                <h1>{post.title}</h1>
            }
        </div>
    )
}

export default PostPage