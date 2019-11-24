'use strict';
const model_comentario = require('./comentarios.model');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cenfoproyecto1@gmail.com',
      pass: '1Proyecto9'
    }
});

module.exports.registrar = (req, res) =>{
    let comentario_nuevo = new model_comentario(
        {
            nombre : req.body.nombre,
            correo: req.body.correo,
            sexo : req.body.sexo,
            comentario : req.body.comentario
        }
    );
    
    comentario_nuevo.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar el comentario ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                let mailOptions = {
                    from: 'cenfoproyecto1@gmail.com',
                    to: comentario_nuevo.correo,
                    subject: 'Comentario recibido',
                    html: `<h1 style="color:#6F1E51;">Saludos ${comentario_nuevo.nombre} </h1>
                    <p>Gracias por contactarnos</p>
                    <p>le estaremos escribiendo pronto</p>
                    `
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
                res.json(
                    {
                        success : true,
                        msg : `Se registró el comentario de forma correcta`
                    }
                )
            }
        }

    );
};



module.exports.listar_todos = (req ,res) =>{
    model_comentario.find().then(
        function(comentarios){
            if(comentarios.length > 0){
                res.json(
                    {
                        success: true,
                        comentarios: comentarios
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron comentarios'
                    }
                )
            }
        }

    )
};