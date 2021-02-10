/* eslint-disable no-unused-expressions */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { User } from '../db/models';
import {
  generateRegularUser,
  deleteRows,
  testUser,
  insertRow,
} from './testHelper';

// eslint-disable-next-line no-unused-vars
const should = chai.should();
chai.use(chaiHttp);

describe('POST /api/users', async () => {
  after((done) => {
    deleteRows(User).then(done());
  });

  it('should successfully create new user', async () => {
    const request = await generateRegularUser();

    chai
      .request(app)
      .post('/api/users')
      .send(request)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
      });
  });
});

describe('POST /api/login', async () => {
  after((done) => {
    deleteRows(User).then(done());
  });

  it('should successfully pass login', async () => {
    const user = await generateRegularUser();
    const loginInfo = {
      email: testUser.email,
      password: testUser.password,
    };

    await insertRow(User, user);

    chai
      .request(app)
      .post('/api/login')
      .send(loginInfo)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property('token').to.be.a('string');
      });
  });
});
