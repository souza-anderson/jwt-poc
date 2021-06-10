const jwt = require('jsonwebtoken')

const secret = 'asfasfasdfasdfasfdsadf'
const token = jwt.sign({
    name: 'Anderson Felipe',
    username: 'anderson.souza'
}, secret, { expiresIn: '10h' })

console.log(token)