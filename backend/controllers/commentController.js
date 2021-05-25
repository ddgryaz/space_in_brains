const ApiError = require("../error/ApiError");
const {User} = require("../models/models");
const {Comment} = require('../models/models')

class commentController {
    async create(req, res, next) {
        try {
            let {comment, userId} = req.body
            const ccomment = await Comment.create({comment, userId})
            return res.json(ccomment)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const comment = await Comment.findAll({
            include: [{
                model: User,
                required: true,
                attributes: ['login']
            }],
            order: [
                ['id', 'DESC']
            ]
        })
        return res.json(comment)
    }
}

module.exports = new commentController()