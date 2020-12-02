import React from 'react'
import { useHistory } from 'react-router-dom'
import LogoutButton from '../components/LogoutButton'
import PostCard from '../components/PostCard'
import useCreateData from '../hooks/useCreateData'
import useFetchToken from '../hooks/useFetchToken'
import useForm from '../hooks/useForm'
import useRequestData from '../hooks/useRequestData'
import useRequireLogin from '../hooks/useRequireLogin'

const FeedPage = () => {
    useRequireLogin()
    const history = useHistory()
    const token = useFetchToken()
    const [{ posts }, updatePosts] = useRequestData("posts", token)    
    const createPost = useCreateData(token)
    const [form, onChange, resetForm] = useForm({
        title: "",
        text: ""
    })

    const handleInput = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const onClickCreatePost = (event) => {
        event.preventDefault()
        createPost("posts", form, updatePosts)
        resetForm()
    }

    return (
        <div>
            <LogoutButton history={history} />
            <div>
                <form onSubmit={onClickCreatePost}>
                    <h1>Crie o seu post :)</h1>
                    <label>Título: </label>
                    <input
                        name="title"
                        value={form.title}
                        type="text"
                        required
                        onChange={handleInput}
                    />
                    <br />
                    <label>Texto: </label>
                    <input
                        name="text"
                        value={form.text}
                        type="text"
                        required
                        onChange={handleInput}
                    />
                    <br/>
                    <button type="submit">Criar!</button>
                </form>
            </div>
            <br/>
            {posts && posts.sort((a, b) => {
                return b.createdAt - a.createdAt
            }).map((post, index) => {
                if (index < 20) {
                    return (
                        <PostCard
                            key={post.id}
                            text={post.text}
                            title={post.title}
                            username={post.username}
                            likes={post.votesCount}
                            comments={post.commentsCount}
                            liked={post.userVoteDirection}
                            id={post.id}
                            updatePosts={updatePosts}
                            history={history}
                        />
                    )
                } else {
                    return null
                }
            })}
        </div>
    )
}

export default FeedPage