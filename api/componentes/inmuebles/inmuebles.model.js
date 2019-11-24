'use strict';

const mongoose = require('mongoose');

let schema_inmuebles = mongoose.Schema({
    nombre : {type : String, required : true},
    precio : {type : Number, required : true},
    provincia : {type: String, required : true},
    canton : {type : String, required : false}
});

module.exports = mongoose.model('Inmueble' , schema_inmuebles);

