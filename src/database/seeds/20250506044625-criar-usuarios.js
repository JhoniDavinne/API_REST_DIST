/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Luiz',
        email: 'luiz@example.com',
        password_hash: bcryptjs.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Maria',
        email: 'maria@example.com',
        password_hash: bcryptjs.hashSync('567891', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Joao',
        email: 'joao@example.com',
        password_hash: bcryptjs.hashSync('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down() { },
};
