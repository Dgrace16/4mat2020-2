var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testeRouter = require('./routes/teste'); // teste

// Rota para MongoDB
const db = require('./config/database')
// Rota para curso 
const curso = require('./routes/curso')
// Rota para professor
const professor = require('./routes/professor')
// Rota para sala_aula 
const sala_aula = require('./routes/sala_aula')
// Rota para turma
const turma = require('./routes/turma')
// Rota para turma
const cliente = require('./routes/cliente')

// Variaveis de segurança para o DB
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME

// Para conectar o MongoDB 
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.ryd2z.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)

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
app.use('/curso', curso); // Curso
app.use('/professor', professor); // professor
app.use('/sala-aula', sala_aula); // sala_aula
app.use('/turma', turma); // turma
app.use('/cliente', cliente); // turma

module.exports = app;