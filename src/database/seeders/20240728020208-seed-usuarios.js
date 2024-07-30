'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'João Silva',
        sexo: 'Masculino',
        cpf: '123.454.789-01',
        endereco: JSON.stringify({
          rua: 'Rua A',
          numero: '123',
          bairro: 'Centro',
          cidade: 'Cidade X',
          estado: 'BA',
          cep: '12345-678'
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
          rua: 'Avenida B',
          numero: '456',
          bairro: 'Bairro Z',
          cidade: 'Cidade Y',
          estado: 'RR',
          cep: '87654-321'
        }),
        email: 'maria.souza@exemplo.com',
        senha: 'sucodebanana',
        dataNascimento: '02/02/1992',
        criadoEm: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
