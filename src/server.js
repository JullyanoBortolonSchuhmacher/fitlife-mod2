const express = require("express")
const connection = require("./database/connection")

class Server {
  constructor(APP_PORT, servidor= express()) {
    this.porta = APP_PORT
    this.database()
    this.iniciarServer(servidor)
  }
  
  async database() {
    try {
      await connection.authenticate()
    } catch (error) {
      console.log("Erro ao conectar ao banco de dados: ", error)
    }
  }

  async iniciarServer(servidorAPI) {
    servidorAPI.listen(this.porta, () => {
      console.log(`Servidor rodando em https://localhost:${this.porta}`)
    })
  }
}

module.exports = { Server }