const Router = require('express')
const router = new Router
const AuthMiddleWare = require('../middleware/AuthMiddleware')
const {UserBrain} = require("../models/models");

router.get('/', AuthMiddleWare, UserBrain.mostPopularBrains)

module.exports = router