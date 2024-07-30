const express = require('express')
const bodyParser = require('body-parser')
const usuarioRoutes = require('./routes/usuario.routes')

const app = express()

app.use(bodyParser.json())

app.use('/usuarios', usuarioRoutes)

const PORT = process.env.PORT || false
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
