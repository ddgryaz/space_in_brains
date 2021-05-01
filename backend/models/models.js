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
})

const Brain_info = sequelize.define('brain_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
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

Brain.hasMany(Brain_info, {as: 'info'})
Brain_info.belongsTo(Brain)

module.exports = {
    User,
    Brain,
    Brain_info,
    Comment,
    UserBrain
}