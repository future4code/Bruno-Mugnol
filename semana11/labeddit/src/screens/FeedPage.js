import React from 'react'
import { useHistory } from 'react-router-dom'
import LogoutButton from '../components/LogoutButton'
import PostCard from '../components/PostCard'
import useFetchToken from '../hooks/useFetchToken'
import useRequestData from '../hooks/useRequestData'
import useRequireLogin from '../hooks/useRequireLogin'

const FeedPage = () => {
    useRequireLogin()
    const history = useHistory()
    const token = useFetchToken()
    const [{ posts }, updatePosts] = useRequestData("/posts", token)

    return (
        <div>
            <LogoutButton history={history} />
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