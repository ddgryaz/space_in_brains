const uuid = require('uuid')
const path = require('path')
const {Brain,} = require('../models/models')
const ApiError = require('../error/ApiError')
let oops = 'Упс, администратор еще не заполнил описание Брейна.'

class BrainController {
    async create(req, res, next) {
        try {
            let {name, description} = req.body
            if (description == '' || null) {
                description = oops
            }
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const brain = await Brain.create({name, description, img: fileName})


            return res.json(brain)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 12
        let offset = page * limit - limit
        const brain = await Brain.findAndCountAll({limit, offset, order: ['id']})
        return res.json(brain)

    }

    async getOne(req, res) {
        const {id} = req.params
        const brain = await Brain.findOne(
            {
                where: {id},
            }
        )
        return res.json(brain)
    }
}

module.exports = new BrainController()
