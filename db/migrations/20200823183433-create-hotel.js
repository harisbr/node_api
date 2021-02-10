export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Hotels', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    latitude: {
      type: Sequelize.DECIMAL,
    },
    longitude: {
      type: Sequelize.DECIMAL,
    },
    rating: {
      type: Sequelize.FLOAT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Hotels'),
};
