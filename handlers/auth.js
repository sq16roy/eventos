const jwt = require('jsonwebtoken');
const db = require('../models');

exports.register = async (req, res, next) => {
    try {
        const user = await db.User.create(req.body);
        const { id, username, email, tipo } = user;
        const token = jwt.sign({ id, username, email }, process.env.SECRETE);
        res.status(201).json({id, username, email, token, tipo});
    } catch (err) {
        if (err.code === 11000) {
            err.message = "Ese correo ya esta en uso";
        }
        next(err);
    }
}
exports.login = async (req, res, next) => {
    try {
        const user = await db.User.findOne({ email: req.body.email });
        const {id, username, email, tipo} = user;
        const valid = await user.comparePassword(req.body.password);

        if (valid) {
            const token = jwt.sign({ id, email, username, tipo }, process.env.SECRETE);

            res.json({
                id,
                username,
                email,
                tipo,
                token
            });
        } else {
            throw new Error();
        }
    } catch (err) {
        err.message = 'correo/contraseña invalida';
        next(err);
    }
};