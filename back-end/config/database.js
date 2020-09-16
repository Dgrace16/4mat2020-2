const mongoose = require('mongoose')

module.exports = uri => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () =>
        console.log('==> Mongoose! Conectado com susseso ao servidor'),
        console.log('MONGOOSE aqui, To na atividade!')
    )
}
// captura um sinal de enceramento (sigint), CTRL+C
process.on('SIGINT', () =>
    mongoose.connection.close(() => {
        console.log('===> Mongoose! Desconectado pelo terminalda aplicação');
        console.log('Disgramado');
        // 0 indica que a finalização ocorreu sem erros 
        process.exit(0);
    })
)

// captura um sinal de enceramento por erro
mongoose.connection.on('disconnected', () => {
    console.log('===> Mongoose! Desconectado do servidor');
    console.log('Me derrubaram aqui, ohh');

})