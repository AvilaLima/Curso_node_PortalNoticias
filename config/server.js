var express = require ('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var application = express();

application.set('view engine','ejs');
application.set('views','./app/views');
application.use(bodyParser.urlencoded({extend: true}));
application.use(expressValidator());
application.use(express.static('./app/public'));

//Definindo as rotas via consign
consign().include('app/routes')
        .then('config/dbConnection.js')
        .then('app/models')
        .then('app/controllers')
        .into(application);

module.exports = application;