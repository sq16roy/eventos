const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true
	},
	descripcion: {
		type: String,
	},
	recinto: {
		type: Object,
		required: true
	},
	tipoEvento: {
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
	cantidadAsistentes:{
		type: Number,
		default: 1,
	},
	imgUrl:{
		type: String,
		default:'http://res.cloudinary.com/sq16roy/image/upload/v1575850149/default-no-image-1_jgg9x3.png'
	},
	rating:{
		type: Number,
		default: 0
	},
	votantes:{
		type:Array,
		default: []
	},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Evento', eventoSchema);
