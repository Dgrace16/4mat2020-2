const mongoose = require('mongoose')

const esquema = mongoose.Schema({ // Schema é um esquema 
    nome: {
        type: String, // tipo String e sem limitação 
        required: true // atibuto obrigatorio
    },
    carga_horaria: {
        type: Number, // tipo Number tanto integer como Float 
        required: true, // atibuto obrigatorio
        min: 4, // minimo de horas
        max: 240, // maximo de horas 
        default: 100 // caso eu não Coloque valor como padrão será 100
    },
    nivel: {
        type: String, // tipo String e sem limitação 
        required: true, // atibuto obrigatorio
        enum: ['Básico', 'Intermediário', 'Avançado'] // Conjunto de valores validos
    },
    valor_curso: {
        type: Number, // tipo Number tanto integer como Float
        required: true, // atibuto obrigatorio
        min: 50 // minimo do valor
    }
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Curso', esquema, 'cursos')