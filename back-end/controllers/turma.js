/*
    QUATRO OPERÇÕES BÁSICAS SOBRE DADOS
    1) CREATE (criação ou inserção)
        Cria um novo objetodentro da coleção

    2) RETRIEVE (recuperação ou listagem)
        Permite recuperar os objetos a partir do BANCO de DADOS
    
    3) UPDATE (atualização)
        Altera os valores de um objeto que JÁ EXISTE no BANCO de DADOS
    
    4) DELETE (exclusão)
        Elimina um objeto do BANCO de DADOS
        
    FAMOSO CRUD = (C)REATE + (R)ETRIEVE + (U)PDATE + (D)ELETE

    VERBOS ASSOCIADOS HTTP ÁS OPERAÇÕES CRUD
    
    VERBO       Operação      
    
    POST        Creat
    GET         Retrieve
    PUT         Update
    DELETE      Delete

*/

// Importar o model para dentro do controler
const Turma = require('../models/Turma')

const controller = {} // Objeto vazio 

//Metodo novo(), implementando a operação CREATE
controller.novo = async (req, res) => {
    // req = requisisão  res = resposta
    // async e await SEMPRE estao juntas, siginifica que é assíncrona

    try {
        // envia os dados  dentro de req.body para o BD para criação 
        await Turma.create(req.body)
        //HTTP 201: Created
        res.status(201).end()
    } catch (erro) {
        console.error(erro)
        //HTTp 500: Internal Server Error
        res.status(500).send(erro)
    }
}

// Método listar(), implementando a operação RETRIEVE(all) todos
controller.listar = async (req, res) => {
    // req = requisisão  res = resposta
    // find() sem parêametros é para trazer tudo(do SALAAULA) do banco de dados
    // async e await SEMPRE estao juntas, siginifica que é assíncrona
    try {
        let dados = await Turma.find()
            .populate('curso') // para mostar o curso
            .populate('professor', 'nome email') // para mostrar somente o nome e email do professor
            .populate('sala_aula'); // para mostar a sala_aula 

        res.send(dados)
        // Ele retorna res.status(200) : OK

    } catch (erro) {
        console.error(erro)
        //HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

// Método obtenUm(), implementando a operação RETRIEVE(one) um
controller.obterUm = async (req, res) => {
    // req = requisisão  res = resposta
    // find() sem parêametros é para trazer tudo(do CURSO) do banco de dados
    // async e await SEMPRE estao juntas, siginifica que é assíncrona

    const id = req.params.id // Capturando o parametro Id
    let obj = await Turma.findById(id)

    // Se o objeto vier preenchido (achou), entao retorne
    if (obj) res.send(obj);
    // Se não (objeto vario), enviamos o status HTTP 404: Not found
    else res.status(404).end()
}

// Método atualizar(), implementando a operação UPDATE
controller.atualizar = async (req, res) => {
    try {
        // Isolar o _id do objeto para fins de busca
        const id = req.body._id
        // Busca o objeto pelo id e, encontrado-o, subistitui o conteudo por req.body
        let obj = await Turma.findByIdAndUpdate(id, req.body)

        // Se encontar e substituiu, retornando HTTP 204: No content
        if (obj) res.status(204).end()
        // Caso contrário, retorna HTTP 404: Not found 
        else res.status(404).end()
    } catch (erro) {
        console.error(erro)
        //HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

// Método excluir(), implementando a operação DELETE
controller.excluir = async (req, res) => {
    try {
        // Isolar o _id para exclusão
        const id = req.body._id
        // Um metodo mais seguro do que passar pela URL
        let obj = await Turma.findByIdAndDelete(id)

        // Se encontar e excluir, retornando HTTP 204: No content
        if (obj) res.status(204).end()
        // Caso não encontre, retorna HTTP 404: Not found 
        else res.status(404).end()
    } catch (erro) {
        console.error(erro)
        //HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

//Exportador do controller
module.exports = controller