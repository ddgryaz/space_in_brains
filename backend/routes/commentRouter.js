const Router = require('express')
const router = new Router
const AuthMiddleWare = require('../middleware/AuthMiddleware')
const commentController = require('../controllers/commentController')


router.post('/', AuthMiddleWare, commentController.create)
router.get('/', AuthMiddleWare, commentController.getAll)

module.exports = router