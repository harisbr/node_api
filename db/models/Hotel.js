import Sequelize from 'sequelize';
import sequelizeService from '../services/sequelize';

const Hotel = sequelizeService.define('Hotel', {
  id: {
    type: Sequelize.UUIDV4,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
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
    defaultValue: 0,
  },
});

// Hotel.associate = function(models) {
//   // associations can be defined here
// };

export default Hotel;
