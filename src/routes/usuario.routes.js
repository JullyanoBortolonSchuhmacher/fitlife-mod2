const express = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const router = express.Router()

router.post('/', UsuarioController.cadastra)
router.get('/', UsuarioController.lista)
router.get('/:id', UsuarioController.listaId)
router.put('/:id', UsuarioController.atualiza)
router.delete('/:id', UsuarioController.deleta)

module.exports = router
