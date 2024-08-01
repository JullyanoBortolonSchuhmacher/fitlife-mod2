'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'João Silva',
        sexo: 'Masculino',
        cpf: '123.454.789-01',
        endereco: JSON.stringify({
          rua: 'rua alzira aguiar',
          numero: '123',
          bairro: 'ingleses',
          cidade: 'florianópolis',
          estado: 'SC',
          cep: '88000-000'
        }),
        email: 'joao.silva@exemplo.com',
        senha: '12345678',
        dataNascimento: '01/08/1994',
        criadoEm: new Date(),
      },
      {
        nome: 'Maria Souza',
        sexo: 'Feminino',
        cpf: '987.622.321-00',
        endereco: JSON.stringify({
          rua: 'Avenida Brasil',
          numero: '456',
          bairro: 'centro',
          cidade: 'Florianópolis',
          estado: 'SC',
          cep: '88080-030'
        }),
        email: 'maria.souza@exemplo.com',
        senha: 'sucodebanana',
        dataNascimento: '02/02/1992',
        criadoEm: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {})
  }
};
