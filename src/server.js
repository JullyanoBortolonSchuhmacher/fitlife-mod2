const express = require('express')
const connection = require('./database/connection')

class Server {
  constructor(APP_PORT, servidor = express()) {
    this.porta = APP_PORT
    this.servidor = servidor
    this.database()
    this.iniciarServer()
  }
  async database() {
    try {
      await connection.authenticate()
      console.log('Conexão com o banco de dados estabelecida com sucesso')
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados: ', error)
    }
  }

  // Método para iniciar o servidor
  iniciarServer() {
    this.servidor.listen(this.porta, () => {
      console.log(`Servidor rodando em http://localhost:${this.porta}`)
    })
  }
}

module.exports = { Server }
