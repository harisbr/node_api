import bcrypt from 'bcrypt';
import Service from './Service';
import config from '../config';
import generateToken from '../helpers/generateToken';

class UserService extends Service {
  async registerUser(request) {
    const { email } = request;
    const checkIfUserExist = await super.getByAttribute({ email });
    let data;

    if (checkIfUserExist.length > 0) {
      data = {
        status: 400,
        message: 'Email already exists',
      };
    } else {
      const { password } = request;
      const hashedPass = await bcrypt.hash(password, config.hashRounds);
      data = await super.insert({ ...request, password: hashedPass });
      data = {
        status: 200,
        message: 'User successfully created',
      };
      // send email verification link
    }
    return data;
  }

  // eslint-disable-next-line class-methods-use-this
  async login(request) {
    const payload = {
      id: request.user.get('id'),
      displayName: request.user.get('displayName'),
      role: request.user.get('role'),
    };

    const token = await generateToken(payload);
    const data = { token };
    return data;
  }
}

export default UserService;
