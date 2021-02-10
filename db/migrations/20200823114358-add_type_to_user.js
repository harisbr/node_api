export default {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Users',
    'type',
    Sequelize.ENUM('Admin', 'Regular'),
  ),

  down: (queryInterface) => queryInterface.removeColumn(
    'Users',
    'type',
  ),
};
