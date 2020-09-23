const mongoose = require('mongoose')

const esquema = mongoose.Schema({ // Schema é um esquema 
    nome: {
        type: String, // tipo String e sem limitação
        required: true // atibuto obrigatorio
    },
    capacidade: {
        type: Number,
        min: 5, // minimo de alunos 5
        max: 30, // maximo de alunos 30
        default: 15, // caso eu não Coloque valor como padrão será 15
        required: true // atibuto obrigatorio
    },
    recursos_didaticos: {
        type: String // tipo String e sem limitação
        // atibuto não obrigatorio
    }
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)

module.exports = mongoose.model('SalaAula', esquema, 'salas_aula')