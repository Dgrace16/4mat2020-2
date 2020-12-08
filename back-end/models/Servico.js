const mongoose = require('mongoose')

const esquema = mongoose.Schema({ // Schema é um esquema 

    carro: {
        type: mongoose.ObjectId,
        ref: 'Carro', // para puxar carro do mongoose
        required: true // atributo obrigatorio
    },
    manutencao: {
        type: mongoose.ObjectId,
        ref: 'Manutencao', // para puxar manutencao do mongoose
        required: true // atributo obrigatorio
    },
    peca: {
        type: mongoose.ObjectId,
        ref: 'Peca', // para puxar peca do mongoose
        required: true // atributo nao obrigatorio
    }


})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Servico', esquema, 'servico')