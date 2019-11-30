const jwt = require('jsonwebtoken');
const db = require('../models');

exports.register = async (req, res, next) => {
    try {
        const user = await db.User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        if (err.code === 11000) {
            err.message = "Sorry, that username is already taken";
        }
        next(err);
    }
}
exports.login = async (req, res, next) => {
    try {
        const user = await db.User.findOne({username: req.body.username});
        const {id, username} = user;
        const valid = await user.comparePassword(req.body.password);

        if (valid) {
            res.json({
                id,
                username
            });
        } else {
            throw new Error();
        }
    } catch (error) {
        err.message = 'Invalid username/password';
        next(err);
    }
};