'use strict';

const express = require('express');
const router = express.Router();
const api_eventos = require('./eventos.api');

router.route('/registrar_evento')
    .post(
        function(req , res){
            api_eventos.registrar(req, res);
        }
    );

router.route('/listar_eventos')
    .get(
        function(req , res){
            api_eventos.listar(req, res);
        }
    );

module.exports = router;