import React from 'react'
import useFetchToken from '../hooks/useFetchToken'
import usePutDirection from '../hooks/usePutDirection'

const LikeButton = ({urlEnd, liked, update}) => {
    const token = useFetchToken()
    const vote = usePutDirection(urlEnd, token)

    const onClickRate = (rate) => {
        vote(rate, update)
    }

    return (
        <div>
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
        </div>
    )
}

export default LikeButton