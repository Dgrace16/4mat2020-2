const mongoose = require('mongoose')

const esquema = mongoose.Schema({ // Schema é um esquema 
    nome: {
        type: String, // tipo String e sem limitação 
        required: true // atibuto obrigatorio
    },
    formacao: {
        type: String, // tipo String e sem limitação 
        required: true // atibuto obrigatorio
    },
    data_nascimento: {
        type: Date, // tipo Data DD/MM/AAAA
        required: true // atibuto obrigatorio
    },
    cpf: {
        type: String, // tipo String e sem limitação 
        index: {
            unique: true // so pode ter um unico 
        },
        required: true // atibuto obrigatorio
    },
    rg: {
        type: String, // tipo String e sem limitação 
        required: true // atibuto obrigatorio
    },
    valor_hora_aula: {
        type: Number, // tipo Number tanto integer como Float 
        default: 20.15, // caso eu não Coloque valor como padrão será 20.15
        required: true // atibuto obrigatorio
    },
    endereco: {
        type: String, // tipo String e sem limitação
        required: true // atibuto obrigatorio
    },
    telefone: {
        type: String, // tipo String e sem limitação
        required: true // atibuto obrigatorio
    },
    email: {
        type: String, // tipo String e sem limitação 
        index: {
            unique: true // so pode ter um unico, para evitar duplicidade
        },
        required: true // atibuto obrigatorio
    }

})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)

module.exports = mongoose.model('Professor', esquema, 'professor')