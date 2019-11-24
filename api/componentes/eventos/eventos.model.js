'use strict';

const mongoose = require('mongoose');

let schema_eventos = mongoose.Schema({
    nombre : {type : String, required : true},
    precio : {type : Number, required : true},
    fecha : {type: String, required : true},
    hora : {type : String, required : true}
});

module.exports = mongoose.model('Evento' , schema_eventos);

