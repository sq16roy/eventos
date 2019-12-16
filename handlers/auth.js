const jwt = require('jsonwebtoken');
const db = require('../models');

exports.register = async (req, res, next) => {
    try {
        const user = await db.User.create(req.body);
        const { id, username, email, tipo } = user;
        const token = jwt.sign({ id, username, email, tipo }, process.env.SECRETE);
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
        const usuarios = await db.User.find();
        const user = await db.User.findOne({ email: req.body.email });
        const {id, username, email, tipo, lugares} = user;
        const valid = await user.comparePassword(req.body.password);

        if (valid) {
            const token = jwt.sign({ id, email, username, tipo, lugares, usuarios: tipo == 'admin' ? usuarios : [], }, process.env.SECRETE);

            res.json({
                id,
                username,
                email,
                tipo,
                lugares,
                token,
                usuarios: tipo == 'admin' ? usuarios : [],
            });
        } else {
            throw new Error();
        }
    } catch (err) {
        err.message = 'correo/contraseña invalida';
        next(err);
    }
};

exports.updateUsuario = async (req,res,next) => {
    try {
        const {
            status,
            id
        } = req.body;
        const user = await db.User.findById(id);
        user.status = status;
        await user.save();

        const usuarios = await db.User.find();

        res.status(201).json({ usuarios:usuarios });
    } catch (err) {
        err.status = 400;
        err.message = 'Todos los campos son requeridos';
        next(err);

    }
};