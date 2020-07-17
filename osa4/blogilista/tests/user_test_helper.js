const User = require('../models/user')

const initialUsers = [
    {
        username: 'Matti',
        name: 'Matti Patti',
        passwordHash: 'salispalis'
    },
    {
        username: 'Katti',
        name: 'Katti Matikainen',
        passwordHash: 'palissalis'
    }

]

const usersInDb = async () => {
    const users = await User.find({})
    return users
}
  
module.exports = { initialUsers, usersInDb }