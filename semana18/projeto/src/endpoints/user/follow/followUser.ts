// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import insertFollowRelation from '../../../data/inserts/insertFollowRelation'
import selectFollowRelation from '../../../data/selects/selectFollowage'

// Services
import { getTokenData } from '../../../services/authenticator'
import { verifyKeys, verifyString } from '../../../services/validators'



const followUser = async (req: Request, res: Response): Promise<void> => {
    const validBodyKeys = ["userToFollowId"]

    try {
        res.statusCode = 422

        verifyKeys(req.body, validBodyKeys)
        verifyString(req.body)

        const { userToFollowId } = req.body

        const token = req.headers.authorization

        if (!token) {
            res.statusCode = 401
            throw new Error("Unauthorized access.")
        }

        const tokenData = getTokenData(token)

        if (tokenData.id === userToFollowId) {
            res.statusCode = 400
            throw new Error("Cannot unfollow oneself.")
        }

        const followage = await selectFollowRelation({
            follower_id: tokenData.id,
            followee_id: userToFollowId
        })

        if(followage) {
            res.statusCode = 400
            throw new Error("Follow relation already exists.")
        }

        await insertFollowRelation({
            follower_id: tokenData.id,
            followee_id: userToFollowId
        })

        res.status(201).send({
            status: {
                code: 201,
                message: `Followed successfully.`
            }
        })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default followUser
