'use strict';

const express = require('express');
const router = express.Router();
const api_usuarios = require('./usuarios.api');

router.route('/registrar_usuario')
    .post(
        function(req , res){
            api_usuarios.registrar(req, res);
        }
    );

router.route('/listar_usuarios')
    .get(
        function(req , res){
            api_usuarios.listar(req, res);
        }
    );

module.exports = router;