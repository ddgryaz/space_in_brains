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
            const {id} = req.body
            const userBrain = await User.findAll(
                {
                    where: {id},
                    include: [{
                        model: Brain,
                        as: 'brain'
                    }]

                },
            )
            return res.json(userBrain)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
}

module.exports = new userBrainController()