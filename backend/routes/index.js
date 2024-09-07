const Router = require('express');
const { User } = require('../db/db');
const SignupMiddleware = require('../middleware/middleware');
const router = Router();

router.post('/signup', SignupMiddleware, async (req, res) => {

    const { username, password, email } = req.body;

    await User.create({
        username: username,
        email: email,
        password: password,
    })
    res.status(200).json({
        statusCode: 200,
        message: "Successfully signup"
    })
})

module.exports = router;