const mongoose = require('mongoose');

const lugarSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true
	},
	creado: {
		type: Date,
		default: Date.now
	},
    provincia:{
		type: String,
		required: true
	},
    direcion:{
        type: String,
        required: true
	},
    cupo:{
		type: Number,
		required: true
	},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Lugar', lugarSchema);
