'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('locais', [
      {
        idUsuario: 1,
        nome: 'Local Exemplo 1',
        descricao: 'Descrição do Local Exemplo 1',
        endereco: JSON.stringify({
          cep: '12345-678',
          rua: 'Rua Exemplo',
          numero: '100',
          bairro: 'Bairro Exemplo',
          cidade: 'Cidade Exemplo',
          estado: 'EX'
        }),
        geoCoords: JSON.stringify({
          latitude: -23.5505,
          longitude: -46.6333
        }),
        outro: 'Informação adicional',
        criadoEm: new Date()
      },
      {
        idUsuario: 2,
        nome: 'Local Exemplo 2',
        descricao: 'Descrição do Local Exemplo 2',
        endereco: JSON.stringify({
          cep: '23456-789',
          rua: 'Rua Exemplo 2',
          numero: '200',
          bairro: 'Bairro Exemplo 2',
          cidade: 'Cidade Exemplo 2',
          estado: 'EX2'
        }),
        geoCoords: JSON.stringify({
          latitude: -23.5505,
          longitude: -46.6333
        }),
        outro: 'Informação adicional',
        criadoEm: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locais', null, {})
  }
}
