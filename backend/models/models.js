const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    img: {type: DataTypes.STRING, defaultValue: 'default_avatar.jpg'},
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
    userId: {type: DataTypes.INTEGER, references: {model: User, key: 'id'}},
    brainId: {type: DataTypes.INTEGER, references: {model: Brain, key: 'id'}}
})

User.belongsToMany(Brain, {through: UserBrain, as: 'brain'})
Brain.belongsToMany(User, {through: UserBrain, as: 'user'})

User.hasMany(Comment)
Comment.belongsTo(User)


// Кастомный метод, сырой запрос
UserBrain.mostPopularBrains = async (req, res) => {
    try {
        const [results] = await sequelize.query("select b.name, count(\"brainId\") as popularity from user_brains\n" +
            "    join brains b on b.id = user_brains.\"brainId\"\n" +
            "    group by \"brainId\", b.name\n" +
            "    having count(\"brainId\") > 1\n" +
            "    order by count(\"brainId\") desc\n" +
            "    limit 5", 'SELECT');
        return res.json(results)
    } catch (e) {
        console.log(e)
    }

}


module.exports = {
    User,
    Brain,
    Comment,
    UserBrain,
}