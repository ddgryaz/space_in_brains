const AllBrains = require('../controllers/allBrainsController')
const Router = require('express')
const router = new Router


router.get('/', AllBrains.getAll)

module.exports = router