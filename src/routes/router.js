const { Router } = require('express')
const usuariosRoutes = require('./usuario.routes')
const routes = new Router()

routes.use('/usuario', usuariosRoutes)

module.exports = routes