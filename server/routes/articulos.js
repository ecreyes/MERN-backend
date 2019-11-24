const express = require('express');
const app = express();

app.get('/articulos', (req, res) => {
    res.json("get articulos");
});

app.post('/articulo', (req, res) => {
    res.json("post articulo");
});

app.get('/articulos/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id: id
    });
});

app.put('/articulo/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id: id
    });
});

app.delete('/articulo', (req, res) => {
    res.json("delete articulo");
});

module.exports = app;