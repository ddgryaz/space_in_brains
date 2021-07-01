const {Brain} = require('../models/models')

class AllBrainsController {
    async getAll(req, res) {
        const brain = await Brain.findAll()
        return res.json(brain)
    }
}

module.exports = new AllBrainsController()
