import React from 'react'
import { goToPostPage } from '../routes/coordinator'
import LikeButton from './LikeButton'

const PostCard = (props) => {
    const { title, text, username, likes, comments, liked, id, updatePosts, history } = props

    return (
        <div>
            <h3>{title}</h3>
            <h4>{username}</h4>
            <p>{text}</p>
            <button onClick={() => { goToPostPage(history, id) }}>Ir para post</button>
            <h5>Curtidas: {likes}</h5>
            <LikeButton
                urlEnd={`${id}/vote`}
                liked={liked}
                update={updatePosts}
            />
            <h5>Comentários: {comments}</h5>
        </div>
    )
}

export default PostCard