import React from 'react'
import useFetchToken from '../hooks/useFetchToken'
import usePutDirection from '../hooks/usePutDirection'

const PostCard = (props) => {
    const { title, text, username, likes, comments, liked, id, updatePosts } = props
    const token = useFetchToken()
    const vote = usePutDirection(id, token)

    const onClickRate = (rate) => {
        vote(rate, updatePosts)
    }

    return (
        <div>
            <h2>{title}</h2>
            <h3>{username}</h3>
            <p>{text}</p>
            <h4>Curtidas: {likes}</h4>
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
            <h4>Comentários: {comments}</h4>
        </div>
    )
}

export default PostCard