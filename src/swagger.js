// src/swagger.js

const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FitLife API',
      version: '1.0.0',
      description: 'Documentação da API FitLife',
    },
    servers: [
      {
        url: 'http://localhost:8000/fitlife',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)

module.exports = {
  swaggerUi,
  swaggerSpec,
}
