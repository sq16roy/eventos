'use strict';
const mongoose = require('mongoose');

let schema_comentario = new mongoose.Schema(
    {
        nombre : {type : String, required : true},
        correo : {type : String, required: true},
        sexo : {type: String, required: true},
        comentario : {type: String, required: true}
    }
);

module.exports = mongoose.model('Comentario', schema_comentario);