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
controller.novo = async (req, res) => { // req = requisisão  res = resposta
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
module.exports = controller