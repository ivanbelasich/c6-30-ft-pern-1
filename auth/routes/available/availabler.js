function availabler(checker, availablerError) {
    return async function (req, res, next) {
        let { user } = req.body
        try {
            let available = await checker(user)
            if (!available) return res.status(400).send({ success: false, message: "Username already exists"})
            else return res.send({success:true, message: "Username is available"})
        }
        catch (error) {
            return res.status(500).send(availablerError("There was a problem connecting to the user database."))
        }

    }
}
module.exports = availabler