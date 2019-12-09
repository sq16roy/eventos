const db = require('../models');

exports.showEventos = async (req, res, next) => {
    try {
        const eventos = await db.Evento.find().populate('user', ['username', 'id']);

        res.status(200).json(eventos);
    } catch (err) {
        err.status = 400;
        next(err);
    }
};

exports.usersEventos = async (req,res,next) => {
    try {
        const {id} = req.decoded;
        const user = await db.User.findById(id).populate('eventos');

        res.status(200).json(user.eventos);
    } catch (err) {
        err.status = 400;
        next(err);

    }
};
exports.getEvento = async (req,res,next) => {
    try {
        const { id } = req.params;
        const evento = await db.Evento.findById(id).populate('user', ['username', 'id']);

        if (!evento) {
            throw new Error('No evento found');
        }

        res.status(200).json(evento);

    } catch (err) {
        err.status = 400;
        next(err);

    }
}

exports.createEvento = async (req,res,next) => {
    try {
        const {id} = req.decoded;
        const {
            precio,
            nombre,
            hora,
            fecha,
            tipoEvento,
            cantidadAsistentes,
            recinto,
            descripcion,
            imgUrl
        } = req.body;
        const user = await db.User.findById(id);
        const evento = await db.Evento.create({
            precio,
            nombre,
            hora,
            fecha,
            tipoEvento,
            cantidadAsistentes,
            recinto,
            descripcion,
            imgUrl,
            user
        });
        user.eventos.push(evento._id);
        await user.save();

        res.status(201).json({...evento._doc, user:user._id});
    } catch (err) {
        err.status = 400;
        err.message = 'Todos los campos son requeridos';
        next(err);

    }
};

exports.deleteEvento = async (req,res,next) => {
    try {
        const { id: eventoId } = req.params;
        const { id: userId } = req.decoded;
        const evento = await db.Evento.findById(eventoId);

        if(!evento) throw Error('No evento found');
    
        await evento.remove();
        res.status(202).json(evento);
    } catch (err) {
        err.status = 400;
        next(err);

    }
};

exports.createLugar = async (req,res,next) => {
    try {
        const {id} = req.decoded;
        const {
            nombre,
            cupo,
            provincia,
            direcion
        } = req.body;
        const user = await db.User.findById(id);
        const lugar = await db.Lugar.create({
            nombre,
            cupo,
            provincia,
            direcion
        });
        user.lugares.push(lugar._id);
        await user.save();

        res.status(201).json({...lugar._doc, user:user._id});
    } catch (err) {
        err.status = 400;
        err.message = 'Todos los campos son requeridos';
        next(err);

    }
};

exports.showLugares = async (req, res, next) => {
    try {
        const lugares = await db.Lugar.find().populate('user', ['username', 'id']);

        res.status(200).json(lugares);
    } catch (err) {
        err.status = 400;
        next(err);
    }
};