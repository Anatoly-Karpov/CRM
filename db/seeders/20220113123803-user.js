module.exports = {
  up: async (queryInterface, Sequelize) => {
    const admin = {
      name: 'Марсель',
      email: 'm@gmail.com',
      roleId: 1,
      password: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
      createdAt: new Date(),
      updatedAt: new Date(),

    };
    await queryInterface.bulkInsert('Users', [admin], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
