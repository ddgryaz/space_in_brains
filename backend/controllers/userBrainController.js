const {UserBrain} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Brain, User} = require('../models/models')

class userBrainController {
    async create(req, res, next) {
        try {
            let {userId, brainId} = req.body
            const userBrain = await UserBrain.create({userId, brainId})
            return res.json(userBrain)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOneUserBrains(req, res, next) {
        try {
            const {userId} = req.body
            const userBrain = await UserBrain.findAll(
                {
                    where: {userId},

                },


            )
            return res.json(userBrain)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
}

module.exports = new userBrainController()