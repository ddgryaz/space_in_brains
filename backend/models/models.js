const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    img : {type: DataTypes.STRING, defaultValue: 'default_avatar.jpg'},
    deleted: {type: DataTypes.BOOLEAN, defaultValue: false},
})

const Brain = sequelize.define('brain', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    img: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, defaultValue: 'Упс, администратор еще не заполнил описание Брейна.'},
})


const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING},
})

const UserBrain = sequelize.define('user_brain', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.belongsToMany(Brain, {through: UserBrain})
Brain.belongsToMany(User, {through: UserBrain})

User.hasMany(Comment)
Comment.belongsTo(User)


module.exports = {
    User,
    Brain,
    Comment,
    UserBrain
}