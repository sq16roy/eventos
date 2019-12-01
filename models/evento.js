const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true
	},
	hora: {
		type: String,
		required: true
	},
	fecha: {
		type: Date,
		required: true
	},
	creado: {
		type: Date,
		default: Date.now
	},
	precio:{
		type: Number,
		default: 0,
		required: true
	},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Evento', eventoSchema);