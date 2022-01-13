module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      num: {
        type: Sequelize.INTEGER,
      },
      statusId: {
        type: Sequelize.INTEGER,
      },
      wgId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Workgroups',
          key: 'id',
        },
      },
      doc: {
        type: Sequelize.TEXT,
      },
      comments: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  },
};
