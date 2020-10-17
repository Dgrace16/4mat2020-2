var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testeRouter = require('./routes/teste'); // teste

// Rota para MongoDB
const db = require('./config/database')
// Rota para cliente
const cliente = require('./routes/cliente')
// Rota para funcionario
const funcionario = require('./routes/funcionario')
// Rota para peca
const peca = require('./routes/peca')
// Rota para manutenção
const manutencao = require('./routes/manutencao')
// Rota para carro
const carro = require('./routes/carro')
// Rota para servico
const servico = require('./routes/servico')

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
app.use('/cliente', cliente); // cliente
app.use('/funcionario', funcionario); // funcionario
app.use('/peca', peca); // peca
app.use('/carro', carro); // carro
app.use('/manutencao', manutencao); // manutencao
app.use('/servico', servico); // servico

module.exports = app;