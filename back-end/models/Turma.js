const mongoose = require('mongoose')

const esquema = mongoose.Schema({ // Schema é um esquema 
    nome: {
        type: String, // tipo String e sem limitação
        required: true // atibuto obrigatorio
    },
    data_inicial: {
        type: Date, // tipo Data AAAA/MM/DD
        required: true // atibuto obrigatorio
    },
    data_final: {
        type: Date, // tipo Data AAAA/MM/DD
        required: true // atibuto obrigatorio
    },
    dias_semana: [{
        type: String, // tipo String e sem limitação
        enum: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sex'], // Conjunto de valores validos
        required: true, // atibuto obrigatorio
    }],
    horario_inicial: {
        type: String, // tipo String e sem limitação
        required: true // atibuto obrigatorio
    },
    horario_final: {
        type: String, // tipo String e sem limitação
        required: true // atibuto obrigatorio
    },
    curso: {
        type: mongoose.ObjectId,
        ref: 'Curso', // para puxar Curso do  mongoose
        required: true // atibuto obrigatorio
    },
    professor: {
        type: mongoose.ObjectId,
        ref: 'Professor', // para puxar professor do mongoose
        required: true // atibuto obrigatorio
    },
    sala_aula: {
        type: mongoose.ObjectId,
        ref: 'SalaAula', // para puxar SalaAula do mongoose
        required: true // atibuto obrigatorio
    },
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)

module.exports = mongoose.model('Turma', esquema, 'turma')