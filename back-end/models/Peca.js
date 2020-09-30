const mongoose = require('mongoose')

const esquema = mongoose.Schema({ // Schema é um esquema 
    nome: {
        type: String, // tipo String e sem limitação 
        required: true // atibuto obrigatorio
    },
    fabricante: {
        type: String, // tipo String e sem limitação 
        required: true // atibuto obrigatorio
    },
    valor: {
        type: Number, // tipo String e sem limitação 
        min: 0.00, // Valor minimo sera de 0 ????????? talvez nao tenha como ser menos Questionar professor 
        default: null, // caso valor não seja escolhido sera conseidderado sem valor ?????? questionar se null pode ser utilizado
        required: true // atibuto obrigator

    }

})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Peca', esquema, 'peca')