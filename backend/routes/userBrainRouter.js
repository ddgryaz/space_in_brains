const Router = require('express')
const router = new Router
const AuthMiddleWare = require('../middleware/AuthMiddleware')
const userBrainController = require('../controllers/userBrainController')

router.post('/', AuthMiddleWare, userBrainController.create)
router.get('/:id', AuthMiddleWare, userBrainController.getOneUserBrains)

module.exports = router