const jwt = require('jsonwebtoken')

const createJwt = (holder) => {
    return jwt.sign({holder}, process.env.SECRET, {
        expiresIn: '2h',
    })
}

const tokenDecoder = (token) => {
    return jwt.decode(token)
}

const authenticateMiddleware = async (req, res, next) => {
    const auth = req.headers.authorization
    const [bearer, token] = auth.split(' ')

    try {
        await jwt.verify(token, process.env.SECRET)
        return next()
    } catch (error) {
        return res.status(401).json('Unauthenticated access!')
    }
}



module.exports = {
    createJwt,
    authenticateMiddleware,
    tokenDecoder
}