const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../secrets')

module.exports = user => {
    const payload = {
        role_name: user.role_name,
        subject: user.user_id,
        username: user.username,
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, jwtSecret, options)
}