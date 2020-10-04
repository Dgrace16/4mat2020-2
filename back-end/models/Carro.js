const mongoose = require('mongoose')

const esquema = mongoose.Schema({ // Schema é um esquema 
    placa: {
        type: String, // tipo String 
        index: {
            unique: true // É um dado único 
        },
        required: true // atributo obrigatório
    },
    marca: {
        type: String, // tipo String e sem limitação 
        required: true // atributo obrigatório
    },
    modelo: {
        type: String, // tipo String e sem limitação 
        required: true // atibuto obrigatório
    },
    ano: {
        type: Number, // tipo Number e sem limitação 
        required: true // atributo obrigatório
    },
    cor: {
        type: String, // tipo String e sem limitação
        required: true // atributo obrigatorio
    },
    interior: {
        type: String, // tipo String e sem limitação
        required: true // atributo obrigatório
    },
    cliente: {
        type: mongoose.ObjectId,
        relf: 'cliente', // para puxar cliente do mongoose
        required: true // atributo obrigatorio
    },
    manutencao: {
        type: mongoose.ObjectId,
        relf: 'manutencao', // para puxar manutenção do mongoose
        required: true // atributo obrigatorio
    }

})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Carro', esquema, 'carro')