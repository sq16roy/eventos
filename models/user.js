const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    segundoNombre: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required:true
    },
    primerApellido: {
        type: String,
        required: true
    },
    segundoApellido: {
        type: String,
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    genero: {
        type: String,
    },
    provincia: {
        type: String,
    },
    edad: {
        type: Number,
    },
    eventos: {
        type: Array,
        default: []
    },
    lugares: {
        type: Array,
        default: []
    },
    created: {
        type: Date,
        default: Date.now
    },
    tipo: {
        type: String,
        default: 'cliente',
    },
    cedulaJuridica: {
        type: Number,
        default: 0,
    },
    tiposEventos: {
        type: Array,
        default:[]
    },
});

userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashed = await bcrypt.hash(this.password, 10);
        this.password = hashed;
        return next();
    } catch (err) {
        return next(err);
    }
})

userSchema.methods.comparePassword = async function (attempt, next) {
    try {
        return await bcrypt.compare(attempt, this.password);
    } catch (err) {
        next(err);
    }
};

module.exports = mongoose.model('User', userSchema);