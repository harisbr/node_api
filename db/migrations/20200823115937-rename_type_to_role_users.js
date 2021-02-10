export default {
  up: (queryInterface) => queryInterface.renameColumn(
    'Users',
    'type',
    'role',
  ),

  down: (queryInterface) => queryInterface.renameColumn(
    'Users',
    'role',
    'type',
  ),
};
