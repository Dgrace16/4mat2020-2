const mongoose = require('mongoose')

const esquema = mongoose.Schema({ // Schema é um esquema 
    horario_inicial: {
        type: String, // tipo String e sem limitação 
        required: true // atributo obrigatório
    },
    horario_termino: {
        type: String, // tipo Number e sem limitação
        required: true // atributo obrigatório
    },

    funcionario: {
        type: mongoose.ObjectId,
        ref: 'Funcionario', // para puxar funcionario do mongoose
        required: true // atributo obrigatorio
    }

})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Manutencao', esquema, 'manutencao')