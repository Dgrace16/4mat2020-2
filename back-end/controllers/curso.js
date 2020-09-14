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
const Curso = require('../models/Curso')

const controller = {} // Objeto vazio 

//Metodo novo(), implementando a operação CREATE
controller.novo = async (req, res) => {
    // req = requisisão  res = resposta
    // async e await SEMPRE estao juntas, siginifica que é assíncrona

    try {
        // envia os dados  dentro de req.body para o BD para criação 
        await Curso.create(req.body)
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
    // find() sem parêametros é para trazer tudo(do CURSO) do banco de dados
    // async e await SEMPRE estao juntas, siginifica que é assíncrona
    try {
        let dados = await Curso.find()
        res.send(dados)
        // Ele retorna res.status(200) : OK

    } catch (erro) {
        console.error(erro)
        //HTTp 500: Internal Server Error
        res.status(500).send(erro)
    }
}

// Método obtenUm(), implementando a operação RETRIEVE(one) um
controller.obterUm = async (req, res) => {
    // req = requisisão  res = resposta
    // find() sem parêametros é para trazer tudo(do CURSO) do banco de dados
    // async e await SEMPRE estao juntas, siginifica que é assíncrona

    const id = req.params.id // Capturando o parametro Id
    let obj = await Curso.findById(id)

    // Se o objeto vier preenchido (achou), entao retorne
    if (obj) res.send(obj);
    // Se não (objeto vario), enviamos o status HTTP 404: Not found
    else res.status(404).end()
}
module.exports = controller