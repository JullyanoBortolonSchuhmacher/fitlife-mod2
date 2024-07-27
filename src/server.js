const express = require('express')
const connection = require('./database/connection')
const APP_PORT = process.env.APP_PORT || false

class Server {
  constructor() {
    this.server = express()
    this.database()
    this.iniciarServer()
  }

  async database() {
    try {
      await connection.authenticate()
      console.log('Conexão com o banco de dados foi bem-sucedida!')
    } catch (error) {
      console.error('Não foi possível conectar ao banco de dados:', error)
    }
  }

  iniciarServer() {
    try {
      if (!APP_PORT) {
        throw new Error('As variáveis de ambiente não estão definidas')
      }

      this.server.listen(APP_PORT, () => {
        console.log(`Servidor Online, na porta ${APP_PORT}`)
      })
    } catch (error) {
      console.error(error.message)
    }
  }
}

module.exports = new Server()
