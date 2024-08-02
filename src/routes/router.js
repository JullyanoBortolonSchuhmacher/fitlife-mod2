const { Router } = require('express')
const usuariosRoutes = require('./usuario.routes')
const localRoutes = require('./local.routes')
const routes = new Router()

routes.use('/usuario', usuariosRoutes)
routes.use('/local', localRoutes)

module.exports = routes