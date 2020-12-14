import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import LikeButton from '../components/LikeButton'
import LogoutButton from '../components/LogoutButton'
import LoggedContext from '../context/LoggedContext'
import useCreateData from '../hooks/useCreateData'
import useFetchToken from '../hooks/useFetchToken'
import useForm from '../hooks/useForm'
import useRequestData from '../hooks/useRequestData'
import useRequireLogin from '../hooks/useRequireLogin'
import { goToFeedPage } from '../routes/coordinator'

const PostPage = () => {
    const { logged, setLogged } = useContext(LoggedContext)
    useRequireLogin(logged, setLogged)

    const token = useFetchToken()
    const history = useHistory()
    const postId = useParams().postId

    const [form, onChange, resetForm] = useForm({ text: "" })
    const [{ post }, updatePostDetails] = useRequestData(`posts/${postId}`, token)

    const createComment = useCreateData(token)

    const handleInput = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const onClickComment = (event) => {
        event.preventDefault()
        createComment(`posts/${postId}/comment`, form, updatePostDetails)
        resetForm()
    }

    return (
        <div>
            <button onClick={() => { goToFeedPage(history) }}>Voltar</button>
            <LogoutButton history={history} />

            {post &&
                <div>
                    <h1>{post.title}</h1>
                    <h2><em>por {post.username}</em></h2>
                    <p>{post.text}</p>
                </div>
            }
            <br />

            <div>
                <form onSubmit={onClickComment}>
                    <h3>Comente!</h3>
                    <label>Texto: </label>
                    <input
                        name="text"
                        value={form.text}
                        type="text"
                        required
                        onChange={handleInput}
                    />
                    <br />
                    <button type="submit">Comentar</button>
                </form>
            </div>
            <br />

            {(post && post.commentsCount) &&
                post.comments.sort((a, b) => {
                    return a.createdAt - b.createdAt
                }).map((comment) => {
                    return (
                        <div key={comment.id}>
                            <h4>{comment.username}</h4>
                            <p>{comment.text}</p>
                            <h5>Curtidas: {comment.votesCount}</h5>
                            <LikeButton
                                urlEnd={`${postId}/comment/${comment.id}/vote`}
                                liked={comment.userVoteDirection}
                                update={updatePostDetails}
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default PostPage