const express = require('express');
const app = express();
const Articulo = require('../models/articulo');

app.get('/articulos', (req, res) => {
    Articulo.find((error, articulosDB) => {
        if (error) {
            res.status(400).json({
                ok: false,
                mensaje: error
            });
        } else {
            res.json({
                ok: true,
                articulos: articulosDB
            });
        }
    });
});

app.post('/articulo', (req, res) => {
    let body = req.body;
    let articulo = new Articulo({
        titulo: body.titulo,
        cuerpo: body.cuerpo
    });
    articulo.save((error, articuloDB) => {
        if (error) {
            res.status(400).json({
                ok: false,
                mensaje: error
            });
        } else {
            res.json({
                ok: true,
                articulo: articuloDB
            });
        }
    });
});

app.get('/articulo/:id', (req, res) => {
    let id = req.params.id;
    Articulo.findById(id, (error, articuloDB) => {
        if (error) {
            res.status(400).json({
                ok: false,
                mensaje: error
            });
        } else {
            res.json({
                ok: true,
                articulo: articuloDB
            });
        }
    });
});

app.put('/articulo/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let articulo = {
        titulo: body.titulo,
        cuerpo: body.cuerpo
    };
    Articulo.findByIdAndUpdate(id, articulo, (error, articuloDB) => {
        if (error) {
            res.status(400).json({
                ok: false,
                mensaje: error
            });
        } else {
            res.json({
                ok: true,
                articulo: articulo
            });
        }
    });
});

app.delete('/articulo/:id', (req, res) => {
    let id = req.params.id;
    Articulo.findById(id, (error, articuloDB) => {
        if (error) {
            res.status(400).json({
                ok: false,
                mensaje: error
            });
        } else {
            Articulo.deleteOne(articuloDB, (error, resultado) => {
                if (error) {
                    res.status(400).json({
                        ok: false,
                        mensaje: error
                    });
                } else {
                    res.json({
                        ok: true,
                        mensaje: resultado
                    });
                }
            });
        }
    });
});

module.exports = app;