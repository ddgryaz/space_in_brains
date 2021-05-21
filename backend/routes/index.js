const Router = require('express')
const router = new Router()
const commentRouter = require('./commentRouter')
const userRouter = require('./userRouter')
const brainRouter = require('./brainRouter')
const userBrainRouter = require('./userBrainRouter')

router.use('/user', userRouter)
router.use('/brain', brainRouter)
router.use('/comment', commentRouter)
router.use('/userBrain', userBrainRouter)

module.exports = router