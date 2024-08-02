const { Router } = require('express')
const LocalController = require('../controllers/LocalController')

const router = Router()

router.post('/', LocalController.cadastra)
router.get('/', LocalController.lista) 
router.get('/:id', LocalController.listaId)
router.delete('/:id', LocalController.deleta)

module.exports = router
