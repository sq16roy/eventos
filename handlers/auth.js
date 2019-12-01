const jwt = require('jsonwebtoken');
const db = require('../models');

exports.register = async (req, res, next) => {
    try {
        const user = await db.User.create(req.body);
        const { id, username } = user;
        const token = jwt.sign({ id, username }, process.env.SECRETE);
        res.status(201).json(user, token);
    } catch (err) {
        if (err.code === 11000) {
            err.message = "Sorry, that username is already taken";
        }
        next(err);
    }
}
exports.login = async (req, res, next) => {
    try {
        const user = await db.User.findOne({ email: req.body.email });
        const {id, username, email} = user;
        const valid = await user.comparePassword(req.body.password);

        if (valid) {
            const token = jwt.sign({ id, email, username }, process.env.SECRETE);

            res.json({
                id,
                username,
                email,
                token
            });
        } else {
            throw new Error();
        }
    } catch (err) {
        err.message = 'Invalid username/password';
        next(err);
    }
};