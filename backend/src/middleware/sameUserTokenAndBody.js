function sameUserTokenAndBody(req, res, next) {
    if (!req.headers.payload) return res.status(500).send({ success: false, message: "Missing token error." })
    if (!req.body.user) return res.status(500).send({ success: false, message: "Missing user body error." })
    let { user: tokenUser } = req.headers.payload
    let { user: bodyUser } = req.body
    if (tokenUser !== bodyUser) return res.status(400).send({ success: false, message: "Access token user and requested user are different." })
    else next()
}

module.exports = sameUserTokenAndBody