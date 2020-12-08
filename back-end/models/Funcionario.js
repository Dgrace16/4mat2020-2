const mongoose = require('mongoose')

const esquema = mongoose.Schema({ // Schema é um esquema 
    nome: {
        type: String, // tipo String e sem limitação 
        required: true // atibuto obrigatorio
    },
    data_nascimento: {
        type: Date, // tipo Data AAAA/MM/DD
        required: true // atibuto obrigatorio
    },
    cpf: {
        type: String, // tipo String e sem limitação 
        index: {
            unique: true // so pode ter" um unico 
        },
        required: true // atibuto obrigator
    },
    rg: {
        type: String, // tipo String e sem limitação 
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
    funcao: [{ // função que o Mecanico atua
        type: String, // tipo String e sem limitação
        required: true, // atibuto obrigatorio
        enum: ['alinhador', 'eletricista', 'funilaria', 'mecanico', 'pintura', 'retificador', 'tapeceiro'] // Conjunto de valores validos

    }],
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
module.exports = mongoose.model('Funcionario', esquema, 'funcionario')