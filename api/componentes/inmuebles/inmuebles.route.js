'use strict';

const express = require('express');
const router = express.Router();
const api_inmuebles = require('./inmuebles.api');

router.route('/registrar_inmueble')
    .post(
        function(req , res){
            api_inmuebles.registrar(req, res);
        }
    );

router.route('/listar_inmuebles')
    .get(
        function(req , res){
            api_inmuebles.listar(req, res);
        }
    );

module.exports = router;