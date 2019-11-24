'use strict';
const express = require('express');
const router =  express.Router();
const comentario_api = require('./comentarios.api');

router.route('/registrar_comentario')
    .post(
        function(req, res){
            comentario_api.registrar(req, res);
        }
    );

router.route('/listar_comentarios')
        .get(
            function(req, res){
                comentario_api.listar_todos(req, res);
            }
        )

module.exports = router;