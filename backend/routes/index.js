const Router = require('express')
const router = new Router()
const commentRouter = require('./commentRouter')
const userRouter = require('./userRouter')
const brainRouter = require('./brainRouter')

router.use('/user', userRouter)
router.use('/brain', brainRouter)
router.use('/comment', commentRouter)

module.exports = router