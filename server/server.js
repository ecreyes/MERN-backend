require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS");
    next();
});

app.use(require('./routes/routes'));

mongoose.connect('mongodb://localhost:27017/MERN',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false 
    }, (err, res) => {
        if (err) throw err;
        console.log("Conexión realizada correctamente");
    });

app.listen(process.env.PORT, () => {
    console.log(`Server ON puerto ${process.env.PORT}`);
});