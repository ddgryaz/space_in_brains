const Router = require('express')
const router = new Router
const brainController = require('../controllers/brainController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), brainController.create)
router.get('/', brainController.getAll)
router.get('/:id', brainController.getOne)

module.exports = router