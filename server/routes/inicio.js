const express = require('express');
const app = express();

app.get('/',(req, res)=> {
    res.json("get usuario");
});

module.exports = app;