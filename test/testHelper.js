import bcrypt from 'bcrypt';

const testUser = {
  email: 'test@mail.com',
  password: 'test123',
};

const generateRegularUser = async () => ({
  email: testUser.email,
  password: await bcrypt.hash(testUser.password, 10),
  displayName: 'Test User',
});

const deleteRows = (model) => model.destroy({ where: {} });

const insertRow = (model, data) => model.create(data);

export {
  generateRegularUser,
  deleteRows,
  testUser,
  insertRow,
};
