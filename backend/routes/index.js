const Router = require('express')
const router = new Router()
const commentRouter = require('./commentRouter')
const userRouter = require('./userRouter')
const brainRouter = require('./brainRouter')
const userBrainRouter = require('./userBrainRouter')
const AllBrainRouter = require('./allBrainRouter')

router.use('/user', userRouter)
router.use('/brain', brainRouter)
router.use('/comment', commentRouter)
router.use('/userBrain', userBrainRouter)
router.use('/allBrains', AllBrainRouter)

module.exports = router