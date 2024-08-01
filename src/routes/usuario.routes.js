const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const authMiddleware = require('../middlewares/autenticacao') 

const router = Router()

router.post('/', UsuarioController.cadastra)
router.get('/', authMiddleware, UsuarioController.lista) 
router.get('/:id', authMiddleware, UsuarioController.listaId)
router.delete('/:id', authMiddleware, UsuarioController.deleta)
router.post('/login', UsuarioController.autenticar) 

module.exports = router
