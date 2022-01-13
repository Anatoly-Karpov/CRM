module.exports = {
  up: async (queryInterface, Sequelize) => {
    const admin = {
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const worker = {
      role: 'worker',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await queryInterface.bulkInsert('Roles', [admin, worker], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
