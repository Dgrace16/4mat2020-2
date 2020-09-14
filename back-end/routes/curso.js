const controller = require('../controllers/curso')
const express = require('express')

const router = express.Router()

router.post('/', controller.novo) // CREATE
router.get('/', controller.listar) // RETRIEVE
module.exports = router