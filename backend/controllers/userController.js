const path = require('path')
const uuid = require('uuid')

const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')


const generateJwt = (id, login, role, img) => {
    return jwt.sign({id, login, role, img},
        process.env.SECRET_KEY,
        {expiresIn: 3600})
}


class UserController {
    async registration(req, res, next) {
        const {login, password, role, img} = req.body
        if (!login || !password) {
            return next(ApiError.badRequest('Некорректный login или password'))
        }
        const candidate = await User.findOne({where: {login}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким login уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({login, role, password: hashPassword, img})
        const token = generateJwt(user.id, user.login, user.role, user.img)
        return res.json({token})
    }

    async login(req, res, next) {
        const {login, password} = req.body
        const user = await User.findOne({where: {login}})
        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.login, user.role, user.img)
        return res.json({token})
    }

    async checkAuth(req, res, next) {
        const token = generateJwt(req.user.id, req.user.login, req.user.role, req.user.img)
        return res.json({token})
    }

    async changeAvatar(req, res, next) {
        try {
            const {userId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const newAvatar = await User.update(
                {img: fileName},
                {returning: true, where: {id: userId}}
            )
            return res.json(newAvatar)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

}

module.exports = new UserController()