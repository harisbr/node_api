export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    displayName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    emailVerified: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    emailVerificationToken: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('Users'),
};
