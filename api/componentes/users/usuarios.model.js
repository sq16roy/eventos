'use strict';

const mongoose = require('mongoose');

let schema_usuarios = mongoose.Schema({
    nombre : {type : String, required : true},
    tipo : {type: String, required : true},
    correo : {type: String, required : true},
    contrasenna: {type: String, required : true},
});

module.exports = mongoose.model('Usuario' , schema_usuarios);

