const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1]

    if (token == null) return res.status(401)

    jwt.verify(token, process.env.SECRET_TOKEN_KEY, (err, user) => {
        if (err) return res.status(403)

        req.user = user
        next()
    })
}