const express = require('express');
const app = express();
const cowsay = require('cowsay');

// Configuracion
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Rutas
app.post('/jsubarte', (req, res) => {
    var msj = req.body.mensaje;
    var fig = req.body.figura;
    if( msj == "" ){
        msj = "En mi maquina funciona. :D jajajajajaja";
    }
    var paghtml = '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Cowsay con Express 4.17.1</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"><link rel="stylesheet" href="css/estilos.css"></head><body><div class="container"><div class="row"><div class="col-6"><a href="javascript: history.go(-1)">Regresar</a><br>';
    paghtml += '<pre>' + cowsay.say({
        text: msj,
        f: fig
    }) + '</pre>';
    paghtml += '</div></div></div></body></html>';
    res.send(paghtml);
});

// Iniciando el servidor
app.listen(app.get('port'), (err) => {
    if(err) console.log(err);
    console.log(`Server on port ${app.get('port')}`);
});