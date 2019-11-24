const express = require('express');
const app = express();

app.use(require('./articulos'));

module.exports = app;