import Repository from './Repository';
import {
  User as UserModel,
  Hotel as HotelModel,
} from '../db/models';

class UnitOfWork {
  static uow = null;

  constructor() {
    this.Users = new Repository(UserModel);
    this.Hotels = new Repository(HotelModel);
  }

  static async getInstance() {
    if (!UnitOfWork.uow) {
      const uow = new UnitOfWork();
      UnitOfWork.uow = uow;
    }
    return UnitOfWork.uow;
  }

  getUsersRepository() {
    return this.Users;
  }

  getHotelsRepository() {
    return this.Hotels;
  }
}

export default UnitOfWork;
