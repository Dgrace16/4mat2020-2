var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testeRouter = require('./routes/teste'); // teste

//MongoDB
const db = require('./config/database')
//bd('mongodb+srv://Douglas:<password>@cluster0.ryd2z.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teste', testeRouter); //Teste 

module.exports = app;