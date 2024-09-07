const { User } = require("../db/db");

async function SignupMiddleware(req, res, next) {

    const { username, email } = req.body;

    const value = await User.findOne({
        username: username,
        email: email,
    })
    if (value) {
        res.status(400).json({
            message: "User Exist",
            statusCode: 400
        })
        return;
    }
    next();

}

module.exports = SignupMiddleware;