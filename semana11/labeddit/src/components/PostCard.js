import React from 'react'
import useFetchToken from '../hooks/useFetchToken'
import usePutDirection from '../hooks/usePutDirection'
import { goToPostPage } from '../routes/coordinator'

const PostCard = (props) => {
    const { title, text, username, likes, comments, liked, id, updatePosts, history } = props
    const token = useFetchToken()
    const vote = usePutDirection(`${id}/vote`, token)

    const onClickRate = (rate) => {
        vote(rate, updatePosts)
    }

    return (
        <div>
            <h3>{title}</h3>
            <h4>{username}</h4>
            <p>{text}</p>
            <button onClick={() => {goToPostPage(history, id)}}>Ir para post</button>
            <h5>Curtidas: {likes}</h5>
            {liked === 0 ?
                <>
                    <button
                        onClick={() => onClickRate(1)}
                    >Curtir</button>
                    <button
                        onClick={() => onClickRate(-1)}
                    >Odiar</button>
                </>
                : (liked === 1 ?
                    <>
                        <button
                            onClick={() => onClickRate(0)}
                        >Descurtir</button>
                        <button
                            onClick={() => onClickRate(-1)}
                        >Odiar</button>
                    </>
                    :
                    <>
                        <button
                            onClick={() => onClickRate(1)}
                        >Curtir</button>
                        <button
                            onClick={() => onClickRate(0)}
                        >Deixar de odiar</button>
                    </>)
            }
            <h5>Comentários: {comments}</h5>
        </div>
    )
}

export default PostCard