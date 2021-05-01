const Router = require('express')
const router = new Router
const brainController = require('../controllers/brainController')


router.post('/', brainController.create)
router.get('/', brainController.getAll)
router.get('/:id', brainController.getOne)

module.exports = router