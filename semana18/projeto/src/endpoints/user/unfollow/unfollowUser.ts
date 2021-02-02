// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import deleteFollowRelation from '../../../data/deletes/deleteFollowRelation'
import selectFollowRelation from '../../../data/selects/selectFollowage'

// Services
import { getTokenData } from '../../../services/authenticator'
import { verifyKeys, verifyString } from '../../../services/validators'



const unfollowUser = async (req: Request, res: Response): Promise<void> => {
    const validBodyKeys = ["userToUnfollowId"]

    try {
        res.statusCode = 422

        verifyKeys(req.body, validBodyKeys)
        verifyString(req.body)

        const { userToUnfollowId } = req.body

        const token = req.headers.authorization

        if (!token) {
            res.statusCode = 401
            throw new Error("Unauthorized access.")
        }

        const tokenData = getTokenData(token)

        if (tokenData.id === userToUnfollowId) {
            res.statusCode = 400
            throw new Error("Cannot unfollow oneself.")
        }

        const followage = await selectFollowRelation({
            follower_id: tokenData.id,
            followee_id: userToUnfollowId
        })

        if(!followage) {
            res.statusCode = 400
            throw new Error("Follow relation does not exist.")
        }

        await deleteFollowRelation({
            follower_id: tokenData.id,
            followee_id: userToUnfollowId
        })

        res.status(200).send({
            status: {
                code: 200,
                message: `Unfollow successful.`
            }
        })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default unfollowUser
