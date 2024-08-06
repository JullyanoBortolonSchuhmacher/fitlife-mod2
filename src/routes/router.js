const { Router } = require('express')
const usuariosRoutes = require('./usuario.routes')
const localRoutes = require('./local.routes')
const UsuarioController = require('../controllers/UsuarioController')

const routes = Router() 

routes.post('/login', UsuarioController.autenticar)

routes.use('/usuario', usuariosRoutes)
routes.use('/local', localRoutes)

module.exports = routes
