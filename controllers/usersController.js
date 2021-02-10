import ServiceFactory from '../services/ServiceFactory';
import userValidation from '../validations/user/userValidation';

const sf = new ServiceFactory();

const createUser = async (req) => {
  await userValidation.validateInsertRequest(req.body);
  const service = await sf.getUsersService();
  const data = await service.registerUser(req.body);
  return data;
};

const userLogin = async (req) => {
  const service = await sf.getUsersService();
  const data = await service.login(req);
  return data;
};

const getAllUsers = async (req) => {
  const service = await sf.getUsersService();
  const data = await service.getAll(req.query);
  return data;
};

export {
  createUser,
  userLogin,
  getAllUsers,
};
