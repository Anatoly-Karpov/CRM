module.exports = {
  up: async (queryInterface, Sequelize) => {
    const groupname1 = {
      groupname: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const groupname2 = {
      groupname: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await queryInterface.bulkInsert('Workgroups', [groupname1, groupname2], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Workgroups', null, {});
  },
};
