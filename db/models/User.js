import Sequelize from 'sequelize';
import sequelizeService from '../services/sequelize';

const User = sequelizeService.define('User', {
  id: {
    type: Sequelize.UUIDV4,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  displayName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  emailVerified: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  emailVerificationToken: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.ENUM('Admin', 'Regular'),
    allowNull: false,
    defaultValue: 'Regular',
  },
});

export default User;
