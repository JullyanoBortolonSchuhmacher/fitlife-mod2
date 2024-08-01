const express = require('express')
const cors = require('cors')
const connection = require('./database/connection')
const routes = require('./routes/router')

class Server {
  constructor(APP_PORT, servidor = express()) {
    this.porta = APP_PORT
    this.servidor = servidor
    this.database()
    this.configurarMiddlewares()
    this.iniciarServer()
  }

  async database() {
    try {
      await connection.authenticate()
      console.log('Banco de dados conectado!')
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error)
    }
  }

  configurarMiddlewares() {
    this.servidor.use(cors())
    this.servidor.use(express.json())
    this.servidor.use('/api', routes)
  }

  iniciarServer() {
    try {
      this.servidor.listen(this.porta, () => {
        console.log(`Rodando em: \n http://localhost:${this.porta}`)
      });
    } catch (error) {
      console.error('Erro ao iniciar servidor:', error)
    }
  }
}

module.exports = { Server }