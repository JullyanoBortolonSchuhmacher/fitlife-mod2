const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const router = Router()

router.post('/', UsuarioController.cadastra)
router.get('/', UsuarioController.lista)
router.get('/:id', UsuarioController.listaId)
router.delete('/:id', UsuarioController.deleta)

module.exports = router