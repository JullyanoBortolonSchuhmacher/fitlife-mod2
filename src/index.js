const { Server } = require('./server')
require('dotenv').config()

try {
  const APP_PORT = process.env.APP_PORT || undefined 
  
  if (!APP_PORT) { //valida a porta
    throw new Error('O arquivo ".env" não está configurado corretamente.');
  }

  new Server(APP_PORT) // sem erros = inicia o servidor

} catch (error) {
  console.error('Erro ao iniciar o servidor: ', error.message)
}
