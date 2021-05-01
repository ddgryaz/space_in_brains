const uuid = require('uuid')
const path = require('path')
const {Brain, Brain_info} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrainController {
    async create(req, res, next) {
        try {
            let {name, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const brain = await Brain.create({name, img: fileName})

            if (info) {
                info = JSON.parse(info)
                await Brain_info.create({
                    title: info.title,
                    description: info.description,
                    brainId: brain.id
                }
                )
            }

            return res.json(brain)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const brain = await Brain.findAll()
        return res.json(brain)

    }

    async getOne(req, res) {
        const {id} = req.params
        const brain = await Brain.findOne(
            {
                where: {id},
                include: [{model: Brain_info, as: 'info'}]
            }
        )
        return res.json(brain)
    }
}

module.exports = new BrainController()