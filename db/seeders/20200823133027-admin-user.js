import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

export default {
  up: async (queryInterface) => queryInterface.bulkInsert('Users', [{
    id: uuidv4(),
    email: 'admin@mail.com',
    password: await bcrypt.hash('admin123', 10),
    displayName: 'Admin',
    role: 'Admin',
    emailVerified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
