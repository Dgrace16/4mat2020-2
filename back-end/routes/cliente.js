const controller = require('../controllers/cliente')
const express = require('express')

const router = express.Router()

router.post('/', controller.novo) // CREATE
router.get('/', controller.listar) // RETRIEVE (all)
router.get('/:id', controller.obterUm) // RETRIEVE (one)
router.put('/', controller.atualizar) // UPDATE
router.delete('/', controller.excluir) // DELETE

// Exportador do controller
module.exports = router